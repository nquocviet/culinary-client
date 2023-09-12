import React, { useMemo } from 'react'
import {
	Burger,
	Divider,
	Drawer,
	Flex,
	Navbar as MantineNavbar,
	NavLink,
	rem,
	ScrollArea,
} from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '@/components'
import { ROUTES } from '@/config/routes'
import { ASIDE_WIDTH } from '@/constants/layout'
import { MENU_LIST, MenuItemType } from '@/constants/menu'

interface NavbarProps {
	opened: boolean
	onClose: () => void
}

const MenuItem = ({ label, href, subPaths, icon: Icon }: MenuItemType) => {
	const pathname = usePathname()
	const domain = pathname.split('/')[1]
	const active = useMemo(() => {
		if (href === ROUTES.HOME && domain === '') {
			return true
		}
		if (domain && subPaths && subPaths.some((path) => path.includes(domain))) {
			return true
		}
		if (domain && href.includes(domain)) {
			return true
		}
		return false
	}, [domain, href, subPaths])

	return (
		<NavLink
			active={active}
			component={Link}
			href={href}
			label={label}
			sx={{
				borderRadius: rem(4),
				...(active && {
					'&:hover': {
						backgroundColor: 'var(--gray-200) !important',
					},
				}),
			}}
			styles={{
				label: {
					fontSize: 'var(--fs-text-md)',
					...(active && {
						fontWeight: 'var(--fw-medium)' as 'normal',
					}),
				},
			}}
			{...(Icon && {
				icon: <Icon size={24} weight={active ? 'fill' : 'regular'} />,
			})}
		/>
	)
}

const Navbar = ({ opened, onClose }: NavbarProps) => {
	return (
		<Drawer
			opened={opened}
			onClose={onClose}
			size={ASIDE_WIDTH}
			withCloseButton={false}
			sx={{
				paddingTop: 0,
			}}
		>
			<MantineNavbar h="100vh" px="md">
				<MantineNavbar.Section>
					<Flex
						align="center"
						gap={16}
						sx={{
							padding: rem(12),
						}}
					>
						<Burger opened={false} onClick={onClose} size="sm" />
						<Link href={ROUTES.HOME}>
							<Logo />
						</Link>
					</Flex>
				</MantineNavbar.Section>

				<MantineNavbar.Section
					grow
					component={ScrollArea}
					mt="xs"
					mx="-md"
					px="md"
					pb="xl"
				>
					<Flex
						direction="column"
						align="stretch"
						gap={4}
						className="font-medium"
					>
						{MENU_LIST.map((menu, index) => {
							const isLast = index === MENU_LIST.length - 1

							return (
								<React.Fragment key={index}>
									{menu.map((item, key) => (
										<MenuItem key={key} {...item} />
									))}
									{!isLast && <Divider color="var(--gray-200)" />}
								</React.Fragment>
							)
						})}
					</Flex>
				</MantineNavbar.Section>
			</MantineNavbar>
		</Drawer>
	)
}

export default Navbar
