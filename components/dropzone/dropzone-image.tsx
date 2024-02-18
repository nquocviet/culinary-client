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
				accept={IMAGE_MIME_TYPE}
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'center',
					minHeight: rem(98),
					...props.sx,
				}}
				onDrop={onDrop}
			>
				<Group position="center" spacing="xl">
					<div>
						<Text align="center" mb={12}>
							<HighlightIcon color="gray" icon={CloudArrowUp} size="md" />
						</Text>
						<Text
							align="center"
							component="p"
							my={0}
							size="sm"
							sx={{ fontWeight: 'var(--fw-medium)' as 'normal' }}
						>
							Drop your images here, or{' '}
							<Text className="text-primary-700" component="span">
								click to browse
							</Text>
							.
						</Text>
						<Text
							align="center"
							component="p"
							my={0}
							size="sm"
							sx={{ color: 'var(--gray-600)' }}
						>
							SVG, PNG, JPG or GIF (max. 10MB)
						</Text>
					</div>
				</Group>
			</Dropzone>
		</div>
	)
}

export default DropzoneImage
