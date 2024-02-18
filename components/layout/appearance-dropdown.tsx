import React from 'react'
import { ActionIcon, Flex, Menu, rem, Text } from '@mantine/core'
import { CaretLeft } from '@phosphor-icons/react'

type AppearanceDropdownProps = {
	toggleSubDropdown: (subDropdown: string | null) => void
}

const AppearanceDropdown = ({ toggleSubDropdown }: AppearanceDropdownProps) => {
	return (
		<>
			<Flex align="center" gap={4} sx={{ padding: rem(2) }}>
				<ActionIcon
					radius="xl"
					size="lg"
					onClick={() => toggleSubDropdown(null)}
				>
					<CaretLeft size={20} />
				</ActionIcon>
				<Text sx={{ fontWeight: 'var(--fw-medium)' as 'normal' }}>
					Appearance
				</Text>
			</Flex>
			<Menu.Divider />
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Use device theme</Menu.Item>
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Dark theme</Menu.Item>
			<Menu.Item sx={{ paddingLeft: rem(40) }}>Light theme</Menu.Item>
		</>
	)
}

export default AppearanceDropdown
