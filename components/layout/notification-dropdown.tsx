import React from 'react'
import { Button, Flex, Menu, rem, ScrollArea, Text } from '@mantine/core'
import Link from 'next/link'

import { Notification } from '@/components'
import { ROUTES } from '@/config/routes'

export const notifications = [
	{
		action: 'liked your comment',
		content: 'Lorem ipsum dolor sit amet consectetur adip',
		createdAt: new Date(),
		id: 1,
		isRead: false,
		sender: 'Taylor Kinny',
	},
	{
		action: 'made a new recipe',
		content: 'Easy sheet pan baked eggs and veggies.',
		createdAt: new Date(),
		id: 2,
		isRead: true,
		sender: 'Magi Dawson',
	},
	{
		action: 'liked your post',
		content: 'Tomato gorgonzola bruschetta.',
		createdAt: new Date(),
		id: 3,
		isRead: false,
		sender: 'Sophia Vargas',
	},
	{
		action: 'replied to your comment',
		content: 'Lorem ipsum dolor sit amet consectenet',
		createdAt: new Date(),
		id: 4,
		isRead: false,
		sender: 'Laura Dern',
	},
	{
		action: 'is now followed to you.',
		content: '',
		createdAt: new Date(),
		id: 5,
		isRead: true,
		sender: 'Taylor Kinny',
	},
	{
		action: 'rated your post',
		content: 'Tomato gorgonzola bruschetta.',
		createdAt: new Date(),
		id: 6,
		isRead: false,
		sender: 'Sophia Vargas',
	},
	{
		action: 'liked your blog',
		content: '5 Snacks That Pair Well with Beer.',
		createdAt: new Date(),
		id: 7,
		isRead: true,
		sender: 'Taylor Kinny',
	},
]

const NotificationDropdown = () => {
	return (
		<>
			<Flex
				align="center"
				justify="space-between"
				sx={{
					padding: `${rem(8)} ${rem(16)}`,
				}}
			>
				<Text
					sx={{
						color: 'var(--gray-600)',
						fontSize: 'var(--fs-text-sm)',
						fontWeight: 'var(--fw-medium)' as 'normal',
					}}
				>
					Notifications
				</Text>
				<Button
					color="primary"
					component={Link}
					href={ROUTES.NOTIFICATIONS}
					sx={{
						color: 'var(--primary-800)',
						height: 'auto',
						padding: 0,
					}}
					variant="white"
				>
					View all
				</Button>
			</Flex>
			<Menu.Divider />
			<ScrollArea h={320} w="100%" offsetScrollbars>
				{notifications.map((notification) => (
					<Notification key={notification.id} {...notification} />
				))}
			</ScrollArea>
		</>
	)
}

export default NotificationDropdown
