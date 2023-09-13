import React from 'react'
import { Button, Flex, Menu, rem, ScrollArea, Text } from '@mantine/core'
import Link from 'next/link'

import { Notification } from '@/components'
import { ROUTES } from '@/config/routes'

export const notifications = [
	{
		id: 1,
		sender: 'Taylor Kinny',
		action: 'liked your comment',
		content: 'Lorem ipsum dolor sit amet consectetur adip',
		isRead: false,
		createdAt: new Date(),
	},
	{
		id: 2,
		sender: 'Magi Dawson',
		action: 'made a new recipe',
		content: 'Easy sheet pan baked eggs and veggies.',
		isRead: true,
		createdAt: new Date(),
	},
	{
		id: 3,
		sender: 'Sophia Vargas',
		action: 'liked your post',
		content: 'Tomato gorgonzola bruschetta.',
		isRead: false,
		createdAt: new Date(),
	},
	{
		id: 4,
		sender: 'Laura Dern',
		action: 'replied to your comment',
		content: 'Lorem ipsum dolor sit amet consectenet',
		isRead: false,
		createdAt: new Date(),
	},
	{
		id: 5,
		sender: 'Taylor Kinny',
		action: 'is now followed to you.',
		content: '',
		isRead: true,
		createdAt: new Date(),
	},
	{
		id: 6,
		sender: 'Sophia Vargas',
		action: 'rated your post',
		content: 'Tomato gorgonzola bruschetta.',
		isRead: false,
		createdAt: new Date(),
	},
	{
		id: 7,
		sender: 'Taylor Kinny',
		action: 'liked your blog',
		content: '5 Snacks That Pair Well with Beer.',
		isRead: true,
		createdAt: new Date(),
	},
]

const NotificationDropdown = () => {
	return (
		<>
			<Flex
				justify="space-between"
				align="center"
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
					variant="white"
					component={Link}
					href={ROUTES.NOTIFICATIONS}
					sx={{
						padding: 0,
						height: 'auto',
						color: 'var(--primary-800)',
					}}
				>
					View all
				</Button>
			</Flex>
			<Menu.Divider />
			<ScrollArea w="100%" h={320} offsetScrollbars>
				{notifications.map((notification) => (
					<Notification key={notification.id} {...notification} />
				))}
			</ScrollArea>
		</>
	)
}

export default NotificationDropdown
