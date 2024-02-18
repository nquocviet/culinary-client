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
			py={16}
			sx={{
				alignItems: 'stretch',
				display: 'flex',
				flexDirection: 'column',
				gap: rem(24),
				height: '100%',
			}}
			w={CONTAINER_WIDTH_XS}
			fluid
		>
			{children}
		</Container>
	)
}

export default ContainerXS
