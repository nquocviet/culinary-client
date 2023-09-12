'use client'

import { ReactNode } from 'react'
import { AppShell, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Footer, Header, Navbar } from '@/components'
import { FOOTER_HEIGHT } from '@/constants/layout'

interface BaseLayoutProps {
	children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
	const [opened, { close, toggle }] = useDisclosure(false)

	return (
		<AppShell
			styles={{
				main: {
					minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
					paddingBottom: '1rem',
				},
				body: {
					overflow: 'hidden',
				},
			}}
			layout="alt"
			header={<Header toggle={toggle} />}
			footer={<Footer />}
		>
			<Container
				py={16}
				className="flex h-full flex-col items-stretch gap-6"
				fluid
			>
				{children}
			</Container>
			<Navbar opened={opened} onClose={close} />
		</AppShell>
	)
}

export default BaseLayout
