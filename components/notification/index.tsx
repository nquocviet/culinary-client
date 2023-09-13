import React from 'react'
import { Avatar, Box, Divider, Flex, rem, Text } from '@mantine/core'

import { Dots } from '@/components'
import { timeSince } from '@/utils'

interface NotificationProps {
	sender: string
	action: string
	content: string
	isRead: boolean
	createdAt: Date
}

const Notification = ({
	sender,
	action,
	content,
	isRead,
	createdAt,
}: NotificationProps) => {
	return (
		<Box
			sx={{
				position: 'relative',
				cursor: 'pointer',
				'&:hover': { backgroundColor: 'var(--gray-50)', transition: '225ms' },
			}}
		>
			<Flex
				sx={{
					padding: `${rem(6)} ${rem(20)} ${rem(6)} ${rem(8)}}`,
				}}
				gap={16}
			>
				<Avatar size="md" radius="xl" />
				<Flex direction="column" align="stretch" gap={4}>
					<Text
						sx={{ color: 'var(--gray-600)', fontSize: 'var(--fs-text-sm)' }}
					>
						<Text
							component="span"
							sx={{
								color: 'var(--gray-800)',
								fontWeight: 'var(--fw-medium)' as 'normal',
							}}
						>
							{sender}
						</Text>{' '}
						{action}{' '}
						<Text
							component="span"
							sx={{
								color: 'var(--gray-800)',
								fontWeight: 'var(--fw-medium)' as 'normal',
							}}
						>
							{content}
						</Text>
					</Text>
					<Text
						sx={{ color: 'var(--gray-500)', fontSize: 'var(--fs-text-sm)' }}
					>
						{timeSince(createdAt)}
					</Text>
				</Flex>
			</Flex>
			{!isRead && (
				<Box
					sx={{
						position: 'absolute',
						right: rem(8),
						top: '50%',
						transform: 'translateY(-50%)',
					}}
				>
					<Dots color="blue" size={10} />
				</Box>
			)}
			<Divider />
		</Box>
	)
}

export default Notification
