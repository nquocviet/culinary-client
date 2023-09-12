import React from 'react'
import { Avatar, AvatarProps, Flex, FlexProps, Text } from '@mantine/core'

interface AvatarGroupProps extends AvatarProps {
	spacing?: number
	title: string
	description?: string
	className?: string
	containerProps?: FlexProps
}

const AvatarGroup = ({
	spacing = 10,
	title,
	description,
	className,
	containerProps,
	...props
}: AvatarGroupProps) => {
	return (
		<Flex
			align="center"
			gap={spacing}
			className={className}
			{...containerProps}
		>
			<Avatar size="md" radius="xl" color="gray" {...props} />
			<div>
				<Text
					sx={{
						fontSize: 'var(--fs-text-sm)',
						fontWeight: 'var(--fw-semibold)' as 'bold',
					}}
					className="line-clamp-1"
				>
					{title}
				</Text>
				{description && (
					<Text
						sx={{
							fontSize: 'var(--fs-text-sm)',
							color: 'var(--gray-500)',
						}}
						className="line-clamp-1"
					>
						{description}
					</Text>
				)}
			</div>
		</Flex>
	)
}

export default AvatarGroup
