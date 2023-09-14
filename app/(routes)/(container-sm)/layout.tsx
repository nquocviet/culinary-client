'use client'

import { ReactNode } from 'react'
import { Container, rem } from '@mantine/core'

import { CONTAINER_WIDTH_SM } from '@/constants/layout'

interface ContainerSMProps {
	children: ReactNode
}

const ContainerSM = ({ children }: ContainerSMProps) => {
	return (
		<Container
			w={CONTAINER_WIDTH_SM}
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

export default ContainerSM
