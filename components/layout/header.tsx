import React from 'react'
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
import {
	BellSimple,
	BookmarkSimple,
	CaretRight,
	ChatDots,
	CirclesThreePlus,
	FolderSimpleUser,
	GearSix,
	Moon,
	Question,
	SignOut,
} from '@phosphor-icons/react'

import { AppSearch, AvatarGroup, Logo } from '@/components'
import { HEADER_HEIGHT } from '@/constants/layout'

interface HeaderProps {
	toggle: () => void
}

const isLoggedIn = true

const Header = ({ toggle }: HeaderProps) => {
	return (
		<MantineHeader
			height={HEADER_HEIGHT}
			sx={{ padding: `${rem(12)} ${rem(28)}` }}
		>
			<Flex align="center" sx={{ width: '100%' }}>
				<Flex justify="space-between" align="center" sx={{ width: '100%' }}>
					<Flex align="center" gap={16}>
						<Burger opened={false} onClick={toggle} size="sm" />
						<Logo />
						<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
							<AppSearch />
						</MediaQuery>
					</Flex>
					<Flex align="center" gap={12}>
						{isLoggedIn ? (
							<>
								<ActionIcon
									variant="subtle"
									color="gray"
									size="lg"
									aria-label="Notification"
								>
									<BellSimple size={24} />
								</ActionIcon>
								<Menu shadow="md" width={300} position="bottom-end">
									<Menu.Target>
										<ActionIcon variant="transparent" color="gray" size="lg">
											<Avatar color="gray" radius="xl" size={32}>
												US
											</Avatar>
										</ActionIcon>
									</Menu.Target>
									<Menu.Dropdown>
										<AvatarGroup
											title="Username"
											description="example@gmail.com"
											containerProps={{
												sx: {
													padding: `${rem(8)} ${rem(12)}`,
												},
											}}
										/>
										<Menu.Divider />
										<Menu.Item icon={<FolderSimpleUser size={20} />}>
											Management
										</Menu.Item>
										<Menu.Item
											icon={<CirclesThreePlus size={20} />}
											rightSection={<CaretRight size={20} />}
										>
											Create new
										</Menu.Item>
										<Menu.Item icon={<BookmarkSimple size={20} />}>
											Bookmarks
										</Menu.Item>
										<Menu.Item icon={<SignOut size={20} />}>Sign out</Menu.Item>
										<Menu.Divider />
										<Menu.Item
											icon={<Moon size={20} />}
											rightSection={<CaretRight size={20} />}
										>
											Appearance
										</Menu.Item>
										<Menu.Item icon={<GearSix size={20} />}>Settings</Menu.Item>
										<Menu.Divider />
										<Menu.Item icon={<Question size={20} />}>FAQs</Menu.Item>
										<Menu.Item icon={<ChatDots size={20} />}>
											Send feedback
										</Menu.Item>
									</Menu.Dropdown>
								</Menu>
							</>
						) : (
							<>
								<Button color="gray" variant="text" px="sm">
									Sign in
								</Button>
								<Button color="primary">Create account</Button>
							</>
						)}
					</Flex>
				</Flex>
			</Flex>
		</MantineHeader>
	)
}

export default Header
