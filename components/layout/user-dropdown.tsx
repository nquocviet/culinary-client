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
				containerProps={{
					sx: {
						padding: `${rem(8)} ${rem(12)}`,
					},
				}}
				description="example@gmail.com"
				title="Username"
			/>
			<Menu.Divider />
			<Menu.Item icon={<FolderSimpleUser size={20} />}>Management</Menu.Item>
			<Menu.Item
				closeMenuOnClick={false}
				icon={<CirclesThreePlus size={20} />}
				rightSection={<CaretRight size={16} />}
				onClick={() => toggleSubDropdown(MENU_DROPDOWN.CREATE)}
			>
				Create new
			</Menu.Item>
			<Menu.Item icon={<BookmarkSimple size={20} />}>Bookmarks</Menu.Item>
			<Menu.Item icon={<SignOut size={20} />}>Sign out</Menu.Item>
			<Menu.Divider />
			<Menu.Item
				closeMenuOnClick={false}
				icon={<Moon size={20} />}
				rightSection={<CaretRight size={16} />}
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
