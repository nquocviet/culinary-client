import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Divider, Flex, Highlight, rem, Text } from '@mantine/core'
import { useDisclosure, useHotkeys, useLocalStorage } from '@mantine/hooks'
import { CaretRight, MagnifyingGlass, X } from '@phosphor-icons/react'

import { Modal, TextInput } from '@/components'

const RECENT_SEARCH_KEY = 'recent_search'

const groupsSearch = [
	{
		group: 'Recipes',
		results: [
			{
				title: 'Healthy spaghetti bolognese with mushrooms',
			},
			{
				title: 'Pure lemon Lemonade Juice with Paper super good for health',
			},
		],
	},
	{
		group: 'Blogs',
		results: [
			{
				title: '10 Tips To Healthy Eating',
			},
		],
	},
]

const AppSearch = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [recentSearch, setRecentSearch] = useLocalStorage({
		key: RECENT_SEARCH_KEY,
		defaultValue: ['Curry', 'Blueberry', 'Healthy'],
	})
	const { control, watch } = useForm()
	const textSearch = watch('q')

	useHotkeys([['ctrl+K', open]])

	const renderRecentSearch = () => {
		if (textSearch) {
			return (
				<Box py={24} sx={{ minHeight: rem(160) }}>
					{groupsSearch.map(({ group, results }, key) => (
						<Box key={key} mb={20}>
							<Text
								mb={12}
								sx={{
									fontSize: 'var(--fs-text-lg)',
									fontWeight: 'var(--fw-medium)' as 'normal',
								}}
							>
								{group}
							</Text>
							<Flex direction="column" align="stretch" gap={8}>
								{results.map(({ title }, key) => (
									<Flex
										key={key}
										justify="space-between"
										align="center"
										gap={16}
										px={12}
										py={8}
										sx={{
											borderRadius: rem(4),
											cursor: 'pointer',
											transition: '225ms',
											backgroundColor: 'var(--gray-50)',
											color: 'var(--gray-800)',
											'&:hover': {
												backgroundColor: 'var(--primary-500)',
											},
											'&:hover mark': {
												color: 'var(--gray-800)',
											},
										}}
									>
										<Highlight
											highlight={textSearch}
											sx={{
												'& mark': {
													backgroundColor: 'transparent',
													color: 'var(--primary-700)',
													fontWeight: 'var(--fw-bold)' as 'bold',
													textDecoration: 'underline',
													transition: '225ms',
												},
											}}
										>
											{title}
										</Highlight>
										<CaretRight size={16} weight="bold" />
									</Flex>
								))}
							</Flex>
						</Box>
					))}
				</Box>
			)
		}

		if (recentSearch.length) {
			return (
				<Box py={24} sx={{ minHeight: rem(160) }}>
					<Text
						mb={12}
						sx={{
							fontSize: 'var(--fs-text-lg)',
							fontWeight: 'var(--fw-medium)' as 'normal',
						}}
					>
						Recent
					</Text>
					{recentSearch.map((text, key) => (
						<Flex
							key={key}
							justify="space-between"
							align="center"
							gap={16}
							px={24}
							py={12}
							mx={-24}
							sx={{
								cursor: 'pointer',
								transition: '225ms',
								'&:hover': { backgroundColor: 'var(--gray-50)' },
							}}
						>
							{text}
							<Text
								component="span"
								sx={{
									color: 'var(--gray-400)',
									'&:hover': { color: 'var(--gray-900)' },
								}}
								role="button"
							>
								<X size={16} weight="bold" />
							</Text>
						</Flex>
					))}
				</Box>
			)
		}

		return (
			<Flex justify="center" align="center" sx={{ minHeight: rem(160) }}>
				<Text sx={{ color: 'var(--gray-600)' }}>No recent searches</Text>
			</Flex>
		)
	}

	return (
		<>
			<Button
				color="gray"
				variant="outline"
				leftIcon={<MagnifyingGlass size={20} />}
				styles={{
					root: { width: 280, marginLeft: rem(8) },
					inner: { justifyContent: 'flex-start' },
				}}
				onClick={open}
			>
				<Text
					sx={{
						paddingRight: rem(8),
						fontWeight: 'var(--fw-semibold)' as 'bold',
					}}
				>
					Ctrl K
				</Text>
				<Text>Quick search</Text>
			</Button>
			<Modal
				opened={opened}
				onClose={close}
				title={
					<TextInput
						name="q"
						control={control}
						size="md"
						icon={<MagnifyingGlass size={20} />}
						placeholder="Quick search"
						styles={{
							input: {
								borderRadius: 0,
								border: 'none',
							},
						}}
					/>
				}
				headerProps={{
					py: 12,
					px: undefined,
					pr: 24,
				}}
				size="lg"
			>
				<Divider mx={rem(-24)} />
				{renderRecentSearch()}
			</Modal>
		</>
	)
}

export default AppSearch
