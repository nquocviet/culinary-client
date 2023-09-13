import React from 'react'
import { Menu, rem } from '@mantine/core'
import {
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

import { AvatarGroup } from '@/components'
import { MENU_DROPDOWN } from '@/constants/common'

type UserDropdownProps = {
	toggleSubDropdown: (subDropdown: string | null) => void
}

const UserDropdown = ({ toggleSubDropdown }: UserDropdownProps) => {
	return (
		<>
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
			<Menu.Item icon={<FolderSimpleUser size={20} />}>Management</Menu.Item>
			<Menu.Item
				icon={<CirclesThreePlus size={20} />}
				rightSection={<CaretRight size={16} />}
				closeMenuOnClick={false}
				onClick={() => toggleSubDropdown(MENU_DROPDOWN.CREATE)}
			>
				Create new
			</Menu.Item>
			<Menu.Item icon={<BookmarkSimple size={20} />}>Bookmarks</Menu.Item>
			<Menu.Item icon={<SignOut size={20} />}>Sign out</Menu.Item>
			<Menu.Divider />
			<Menu.Item
				icon={<Moon size={20} />}
				rightSection={<CaretRight size={16} />}
				closeMenuOnClick={false}
				onClick={() => toggleSubDropdown(MENU_DROPDOWN.APPEARANCE)}
			>
				Appearance
			</Menu.Item>
			<Menu.Item icon={<GearSix size={20} />}>Settings</Menu.Item>
			<Menu.Divider />
			<Menu.Item icon={<Question size={20} />}>FAQs</Menu.Item>
			<Menu.Item icon={<ChatDots size={20} />}>Send feedback</Menu.Item>
		</>
	)
}

export default UserDropdown
