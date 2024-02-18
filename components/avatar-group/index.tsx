import React from 'react'
import { Avatar, AvatarProps, Flex, FlexProps, Text } from '@mantine/core'

interface AvatarGroupProps extends AvatarProps {
	className?: string
	containerProps?: FlexProps
	description?: string
	spacing?: number
	title: string
}

const AvatarGroup = ({
	className,
	containerProps,
	description,
	spacing = 10,
	title,
	...props
}: AvatarGroupProps) => {
	return (
		<Flex
			align="center"
			className={className}
			gap={spacing}
			{...containerProps}
		>
			<Avatar color="gray" radius="xl" size="md" {...props} />
			<div>
				<Text
					className="line-clamp-1"
					component="p"
					my={0}
					sx={{
						fontSize: 'var(--fs-text-sm)',
						fontWeight: 'var(--fw-semibold)' as 'bold',
					}}
				>
					{title}
				</Text>
				{description && (
					<Text
						className="line-clamp-1"
						component="p"
						my={0}
						sx={{
							color: 'var(--gray-500)',
							fontSize: 'var(--fs-text-sm)',
						}}
					>
						{description}
					</Text>
				)}
			</div>
		</Flex>
	)
}

export default AvatarGroup
