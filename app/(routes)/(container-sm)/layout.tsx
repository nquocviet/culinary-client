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
			py={16}
			sx={{
				alignItems: 'stretch',
				display: 'flex',
				flexDirection: 'column',
				gap: rem(24),
				height: '100%',
			}}
			w={CONTAINER_WIDTH_SM}
			fluid
		>
			{children}
		</Container>
	)
}

export default ContainerSM
