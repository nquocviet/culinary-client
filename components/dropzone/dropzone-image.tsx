import React from 'react'
import { Group, rem, Text } from '@mantine/core'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { CloudArrowUp } from '@phosphor-icons/react'

import { HighlightIcon, Label } from '@/components'

interface DropzoneImageProps
	extends Omit<DropzoneProps, 'accept' | 'children'> {
	label?: string
}

const DropzoneImage = ({ label, onDrop, ...props }: DropzoneImageProps) => {
	return (
		<div>
			{label && <Label text={label} />}
			<Dropzone
				{...props}
				onDrop={onDrop}
				accept={IMAGE_MIME_TYPE}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: rem(98),
					...props.sx,
				}}
			>
				<Group position="center" spacing="xl">
					<div>
						<Text align="center" mb={12}>
							<HighlightIcon size="md" color="gray" icon={CloudArrowUp} />
						</Text>
						<Text
							size="sm"
							align="center"
							sx={{ fontWeight: 'var(--fw-medium)' as 'normal' }}
						>
							Drop your images here, or{' '}
							<Text component="span" className="text-primary-700">
								click to browse
							</Text>
							.
						</Text>
						<Text size="sm" align="center" sx={{ color: 'var(--gray-600)' }}>
							SVG, PNG, JPG or GIF (max. 10MB)
						</Text>
					</div>
				</Group>
			</Dropzone>
		</div>
	)
}

export default DropzoneImage
