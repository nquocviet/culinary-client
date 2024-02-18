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
	const [opened, { close, open }] = useDisclosure(false)
	const [recentSearch, setRecentSearch] = useLocalStorage({
		defaultValue: ['Curry', 'Blueberry', 'Healthy'],
		key: RECENT_SEARCH_KEY,
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
							<Flex align="stretch" direction="column" gap={8}>
								{results.map(({ title }, key) => (
									<Flex
										align="center"
										gap={16}
										justify="space-between"
										key={key}
										px={12}
										py={8}
										sx={{
											'&:hover': {
												backgroundColor: 'var(--primary-500)',
											},
											'&:hover mark': {
												color: 'var(--gray-800)',
											},
											backgroundColor: 'var(--gray-50)',
											borderRadius: rem(4),
											color: 'var(--gray-800)',
											cursor: 'pointer',
											transition: '225ms',
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
							align="center"
							gap={16}
							justify="space-between"
							key={key}
							mx={-24}
							px={24}
							py={12}
							sx={{
								'&:hover': { backgroundColor: 'var(--gray-50)' },
								cursor: 'pointer',
								transition: '225ms',
							}}
						>
							{text}
							<Text
								component="span"
								role="button"
								sx={{
									'&:hover': { color: 'var(--gray-900)' },
									color: 'var(--gray-400)',
								}}
							>
								<X size={16} weight="bold" />
							</Text>
						</Flex>
					))}
				</Box>
			)
		}

		return (
			<Flex align="center" justify="center" sx={{ minHeight: rem(160) }}>
				<Text component="p" my={0} sx={{ color: 'var(--gray-600)' }}>
					No recent searches
				</Text>
			</Flex>
		)
	}

	return (
		<>
			<Button
				color="gray"
				leftIcon={<MagnifyingGlass size={20} />}
				styles={{
					inner: { justifyContent: 'flex-start' },
					root: { marginLeft: rem(8), width: 280 },
				}}
				variant="outline"
				onClick={open}
			>
				<Text
					sx={{
						fontWeight: 'var(--fw-semibold)' as 'bold',
						paddingRight: rem(8),
					}}
				>
					Ctrl K
				</Text>
				<Text>Quick search</Text>
			</Button>
			<Modal
				headerProps={{
					pr: 24,
					px: undefined,
					py: 12,
				}}
				opened={opened}
				size="lg"
				title={
					<TextInput
						control={control}
						icon={<MagnifyingGlass size={20} />}
						name="q"
						placeholder="Quick search"
						size="md"
						styles={{
							input: {
								border: 'none',
								borderRadius: 0,
							},
						}}
					/>
				}
				onClose={close}
			>
				<Divider mx={rem(-24)} />
				{renderRecentSearch()}
			</Modal>
		</>
	)
}

export default AppSearch
