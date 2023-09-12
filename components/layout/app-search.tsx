import React from 'react'
import { Button, rem, Text } from '@mantine/core'
import { MagnifyingGlass } from '@phosphor-icons/react'

const AppSearch = () => {
	return (
		<Button
			color="gray"
			variant="outline"
			leftIcon={<MagnifyingGlass size={20} />}
			styles={{
				root: { width: 280, marginLeft: rem(8) },
				inner: { justifyContent: 'flex-start' },
			}}
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
	)
}

export default AppSearch
