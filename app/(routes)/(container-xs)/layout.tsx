'use client'

import { ReactNode } from 'react'
import { Container, rem } from '@mantine/core'

import { CONTAINER_WIDTH_XS } from '@/constants/layout'

interface ContainerXSProps {
	children: ReactNode
}

const ContainerXS = ({ children }: ContainerXSProps) => {
	return (
		<Container
			w={CONTAINER_WIDTH_XS}
			py={16}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				gap: rem(24),
				height: '100%',
			}}
			fluid
		>
			{children}
		</Container>
	)
}

export default ContainerXS
