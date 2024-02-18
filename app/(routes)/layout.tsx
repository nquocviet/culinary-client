'use client'

import { ReactNode } from 'react'
import { AppShell, rem } from '@mantine/core'
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
			footer={<Footer />}
			header={<Header toggle={toggle} />}
			layout="alt"
			styles={{
				body: {
					overflow: 'hidden',
				},
				main: {
					minHeight: `calc(100vh - ${rem(FOOTER_HEIGHT)})`,
					paddingBottom: '1rem',
				},
			}}
		>
			{children}
			<Navbar opened={opened} onClose={close} />
		</AppShell>
	)
}

export default BaseLayout
