import React, { ReactNode } from 'react'
import { Flex, FlexProps, rem } from '@mantine/core'

interface ModalActionProps extends FlexProps {
	bordered?: boolean
	children: ReactNode
	fluid?: boolean
}

const ModalAction = ({
	bordered,
	children,
	fluid,
	...props
}: ModalActionProps) => {
	return (
		<Flex
			align="center"
			gap={12}
			justify="flex-end"
			sx={{
				padding: `${rem(16)} ${rem(24)} 0`,
				width: '100%',
				...props.sx,
				...(bordered && {
					borderTop: '1px solid var(--gray-200)',
				}),
				...(fluid && {
					'& > *': {
						flex: 1,
					},
				}),
			}}
			{...props}
		>
			{children}
		</Flex>
	)
}

export default ModalAction
