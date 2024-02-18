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
	href: string
	icon?: Icon
	label: string
	subPaths?: string[]
}

export type MenuListType = Array<MenuItemType[]>

export const MENU_LIST: MenuListType = [
	[
		{
			href: ROUTES.HOME,
			icon: House,
			label: 'Home',
		},
		{
			href: ROUTES.COMMUNITY,
			icon: GlobeHemisphereWest,
			label: 'Community',
		},
		{
			href: ROUTES.RECIPES,
			icon: Book,
			label: 'Recipes',
		},
		{
			href: ROUTES.BLOGS,
			icon: Notepad,
			label: 'Blogs',
		},
		{
			href: ROUTES.BOOKMARKS,
			icon: BookmarkSimple,
			label: 'Bookmarks',
		},
	],
	[
		{
			href: ROUTES.ABOUT_US,
			icon: Info,
			label: 'About us',
		},
		{
			href: ROUTES.CONTACT_US,
			icon: AddressBook,
			label: 'Contact us',
		},
		{
			href: ROUTES.GUIDELINE,
			icon: Notebook,
			label: 'Guideline',
		},
	],
	[
		{
			href: ROUTES.FAQS,
			icon: Question,
			label: 'FAQs',
		},
		{
			href: ROUTES.SEND_FEEDBACK,
			icon: ChatDots,
			label: 'Send feedback',
		},
	],
	[
		{
			href: ROUTES.SETTINGS,
			icon: GearSix,
			label: 'Settings',
		},
		{
			href: ROUTES.REPORT_HISTORY,
			icon: ClockCounterClockwise,
			label: 'Report history',
		},
	],
	[
		{
			href: ROUTES.PRIVACY_POLICY,
			icon: ShieldCheck,
			label: 'Privacy policy',
		},
		{
			href: ROUTES.TERMS_OF_SERVICE,
			icon: ClipboardText,
			label: 'Terms of service',
		},
	],
]
