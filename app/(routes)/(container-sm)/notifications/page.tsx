'use client'

import React from 'react'
import { ActionIcon, Box, Button, Flex, Menu } from '@mantine/core'
import { Check, DotsThree, GearSix } from '@phosphor-icons/react'

import { Notification, PageTitle } from '@/components'
import { notifications } from '@/components/layout/notification-dropdown'

const NotificationsPage = () => {
	return (
		<Flex direction="column" justify="center" gap={24}>
			<PageTitle title="Notifications" divider />
			<Flex justify="space-between" align="center">
				<Flex gap={8}>
					<Button color="primary" variant="light" px={12}>
						All
					</Button>
					<Button color="gray" variant="subtle" px={12}>
						Unread
					</Button>
				</Flex>
				<Menu width={220} position="bottom-end">
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={24} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<Check size={20} />}>Mask all as read</Menu.Item>
						<Menu.Item icon={<GearSix size={20} />}>
							Notification settings
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Flex>
			<Box>
				{notifications.map((notification) => (
					<Notification key={notification.id} {...notification} />
				))}
			</Box>
		</Flex>
	)
}

export default NotificationsPage
