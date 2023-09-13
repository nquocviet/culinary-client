import React, { useEffect, useState } from 'react'
import {
	ActionIcon,
	Avatar,
	Burger,
	Button,
	Flex,
	Header as MantineHeader,
	MediaQuery,
	Menu,
	rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { BellSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
	AppearanceDropdown,
	AppSearch,
	CreateDropdown,
	LoginForm,
	Logo,
	Modal,
	NotificationDropdown,
	RegisterForm,
	UserDropdown,
} from '@/components'
import { ROUTES } from '@/config/routes'
import { MENU_DROPDOWN, TRANSITION_TIME } from '@/constants/common'
import { HEADER_HEIGHT } from '@/constants/layout'

interface HeaderProps {
	toggle: () => void
}

export type ModalMode = keyof typeof MODAL_MODE

const MODAL_MODE = {
	LOGIN: 'LOGIN',
	REGISTER: 'REGISTER',
} as const

const isLoggedIn = true

const subDropdowns = {
	[MENU_DROPDOWN.CREATE]: CreateDropdown,
	[MENU_DROPDOWN.APPEARANCE]: AppearanceDropdown,
}

const Header = ({ toggle }: HeaderProps) => {
	const pathname = usePathname()
	const [modalMode, setModalMode] = useState<null | ModalMode>(null)
	const [menuOpened, setMenuOpened] = useState(false)
	const [openSubDropdown, setOpenSubDropdown] = useState<boolean>(false)
	const [currentSubDropdown, setCurrentSubDropdown] = useState<null | string>(
		null
	)
	const [loginOpened, { open: openLogin, close: closeLogin }] =
		useDisclosure(false)
	const [registerOpened, { open: openRegister, close: closeRegister }] =
		useDisclosure(false)
	const isAuthPage = ([ROUTES.LOGIN, ROUTES.REGISTER] as string[]).includes(
		pathname
	)
	const SubDropdown = currentSubDropdown && subDropdowns[currentSubDropdown]

	useEffect(() => {
		if (loginOpened || registerOpened) return

		setTimeout(() => setModalMode(null), TRANSITION_TIME)
	}, [loginOpened, registerOpened])

	useEffect(() => {
		if (menuOpened) return

		setTimeout(() => {
			setOpenSubDropdown(false)
			setCurrentSubDropdown(null)
		}, TRANSITION_TIME)
	}, [menuOpened])

	const onChangeMode = (mode: ModalMode) => {
		setModalMode(mode)
	}

	const toggleSubDropdown = (subDropdown: string | null) => {
		if (subDropdown) {
			setOpenSubDropdown(true)
			setCurrentSubDropdown(subDropdown)
			return
		}

		setOpenSubDropdown(false)
		setCurrentSubDropdown(null)
	}

	return (
		<MantineHeader
			height={HEADER_HEIGHT}
			sx={{ padding: `${rem(12)} ${rem(28)}` }}
		>
			<Flex align="center" sx={{ width: '100%' }}>
				<Flex justify="space-between" align="center" sx={{ width: '100%' }}>
					<Flex align="center" gap={16}>
						<Burger opened={false} onClick={toggle} size="sm" />
						<Link href={ROUTES.HOME}>
							<Logo />
						</Link>
						<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
							<AppSearch />
						</MediaQuery>
					</Flex>
					<Flex align="center" gap={12}>
						{isLoggedIn ? (
							<>
								<Menu shadow="md" width={340} position="bottom-end">
									<Menu.Target>
										<ActionIcon
											variant="subtle"
											color="gray"
											size="lg"
											aria-label="Notification"
										>
											<BellSimple size={24} />
										</ActionIcon>
									</Menu.Target>
									<Menu.Dropdown p={0}>
										<NotificationDropdown />
									</Menu.Dropdown>
								</Menu>
								<Menu
									opened={menuOpened}
									onChange={setMenuOpened}
									shadow="md"
									width={300}
									position="bottom-end"
								>
									<Menu.Target>
										<ActionIcon variant="transparent" color="gray" size="lg">
											<Avatar color="gray" radius="xl" size={32}>
												US
											</Avatar>
										</ActionIcon>
									</Menu.Target>
									<Menu.Dropdown>
										{openSubDropdown ? (
											<SubDropdown toggleSubDropdown={toggleSubDropdown} />
										) : (
											<UserDropdown toggleSubDropdown={toggleSubDropdown} />
										)}
									</Menu.Dropdown>
								</Menu>
							</>
						) : (
							!isAuthPage && (
								<>
									<Button
										color="gray"
										variant="text"
										px="sm"
										onClick={openLogin}
									>
										Sign in
									</Button>
									<Button color="primary" onClick={openRegister}>
										Create account
									</Button>
								</>
							)
						)}
					</Flex>
				</Flex>
			</Flex>
			<Modal opened={loginOpened} onClose={closeLogin}>
				{modalMode === 'REGISTER' ? (
					<RegisterForm onChangeMode={() => onChangeMode('LOGIN')} />
				) : (
					<LoginForm onChangeMode={() => onChangeMode('REGISTER')} />
				)}
			</Modal>
			<Modal opened={registerOpened} onClose={closeRegister}>
				{modalMode === 'LOGIN' ? (
					<LoginForm onChangeMode={() => onChangeMode('REGISTER')} />
				) : (
					<RegisterForm onChangeMode={() => onChangeMode('LOGIN')} />
				)}
			</Modal>
		</MantineHeader>
	)
}

export default Header
