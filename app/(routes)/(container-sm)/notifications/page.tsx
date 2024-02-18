'use client'

import React from 'react'
import { ActionIcon, Box, Button, Flex, Menu } from '@mantine/core'
import { Check, DotsThree, GearSix } from '@phosphor-icons/react'

import { Notification, PageTitle } from '@/components'
import { notifications } from '@/components/layout/notification-dropdown'

const NotificationsPage = () => {
	return (
		<Flex direction="column" gap={24} justify="center">
			<PageTitle title="Notifications" divider />
			<Flex align="center" justify="space-between">
				<Flex gap={8}>
					<Button color="primary" px={12} variant="light">
						All
					</Button>
					<Button color="gray" px={12} variant="subtle">
						Unread
					</Button>
				</Flex>
				<Menu position="bottom-end" width={220}>
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
