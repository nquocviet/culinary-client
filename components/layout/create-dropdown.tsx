import React from 'react'
import { ActionIcon, Flex, Menu, rem, Text } from '@mantine/core'
import { CaretLeft } from '@phosphor-icons/react'

type CreateDropdownProps = {
	toggleSubDropdown: (subDropdown: string | null) => void
}

const CreateDropdown = ({ toggleSubDropdown }: CreateDropdownProps) => {
	return (
		<>
			<Flex align="center" sx={{ padding: rem(2) }} gap={4}>
				<ActionIcon
					size="lg"
					radius="xl"
					onClick={() => toggleSubDropdown(null)}
				>
					<CaretLeft size={20} />
				</ActionIcon>
				<Text sx={{ fontWeight: 'var(--fw-medium)' as 'normal' }}>
					Create new
				</Text>
			</Flex>
			<Menu.Divider />
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Recipe</Menu.Item>
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Blog</Menu.Item>
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Cooking plan</Menu.Item>
		</>
	)
}

export default CreateDropdown
