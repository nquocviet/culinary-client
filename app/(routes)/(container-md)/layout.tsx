'use client'

import { ReactNode } from 'react'
import { Container, rem } from '@mantine/core'

import { CONTAINER_WIDTH_MD } from '@/constants/layout'

interface ContainerMDProps {
	children: ReactNode
}

const ContainerMD = ({ children }: ContainerMDProps) => {
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
			w={CONTAINER_WIDTH_MD}
			fluid
		>
			{children}
		</Container>
	)
}

export default ContainerMD
