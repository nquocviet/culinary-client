import React, { ReactNode } from 'react'
import { Flex, FlexProps, rem } from '@mantine/core'

interface ModalActionProps extends FlexProps {
	children: ReactNode
	bordered?: boolean
	fluid?: boolean
}

const ModalAction = ({
	children,
	bordered,
	fluid,
	...props
}: ModalActionProps) => {
	return (
		<Flex
			justify="flex-end"
			align="center"
			gap={12}
			sx={{
				width: '100%',
				padding: `${rem(16)} ${rem(24)} 0`,
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
