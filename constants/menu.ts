import {
	AddressBook,
	Book,
	BookmarkSimple,
	ChatDots,
	ClipboardText,
	ClockCounterClockwise,
	GearSix,
	GlobeHemisphereWest,
	House,
	Icon,
	Info,
	Notebook,
	Notepad,
	Question,
	ShieldCheck,
} from '@phosphor-icons/react'

import { ROUTES } from '@/config/routes'

export type MenuItemType = {
	label: string
	href: string
	subPaths?: string[]
	icon?: Icon
}

export type MenuListType = Array<MenuItemType[]>

export const MENU_LIST: MenuListType = [
	[
		{
			label: 'Home',
			href: ROUTES.HOME,
			icon: House,
		},
		{
			label: 'Community',
			href: ROUTES.COMMUNITY,
			icon: GlobeHemisphereWest,
		},
		{
			label: 'Recipes',
			href: ROUTES.RECIPES,
			icon: Book,
		},
		{
			label: 'Blogs',
			href: ROUTES.BLOGS,
			icon: Notepad,
		},
		{
			label: 'Bookmarks',
			href: ROUTES.BOOKMARKS,
			icon: BookmarkSimple,
		},
	],
	[
		{
			label: 'About us',
			href: ROUTES.ABOUT_US,
			icon: Info,
		},
		{
			label: 'Contact us',
			href: ROUTES.CONTACT_US,
			icon: AddressBook,
		},
		{
			label: 'Guideline',
			href: ROUTES.GUIDELINE,
			icon: Notebook,
		},
	],
	[
		{
			label: 'FAQs',
			href: ROUTES.FAQS,
			icon: Question,
		},
		{
			label: 'Send feedback',
			href: ROUTES.SEND_FEEDBACK,
			icon: ChatDots,
		},
	],
	[
		{
			label: 'Settings',
			href: ROUTES.SETTINGS,
			icon: GearSix,
		},
		{
			label: 'Report history',
			href: ROUTES.REPORT_HISTORY,
			icon: ClockCounterClockwise,
		},
	],
	[
		{
			label: 'Privacy policy',
			href: ROUTES.PRIVACY_POLICY,
			icon: ShieldCheck,
		},
		{
			label: 'Terms of service',
			href: ROUTES.TERMS_OF_SERVICE,
			icon: ClipboardText,
		},
	],
]
