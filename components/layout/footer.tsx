import React from 'react'
import { Flex, Footer as MantineFooter, rem, Text } from '@mantine/core'

import { CustomLink, Dots } from '@/components'
import { ROUTES } from '@/config/routes'
import { APP_NAME, CURRENT_YEAR } from '@/constants/common'
import { FOOTER_HEIGHT } from '@/constants/layout'

const Footer = () => {
	return (
		<MantineFooter
			fixed={false}
			height={FOOTER_HEIGHT}
			sx={{
				backgroundColor: 'var(--gray-50)',
				padding: `${rem(16)} ${rem(28)}`,
				position: 'static',
			}}
		>
			<Flex align="center" justify="space-between">
				<Flex align="center" gap={8}>
					<CustomLink href={ROUTES.PRIVACY_POLICY}>Privacy policy</CustomLink>
					<Dots size={4} />
					<CustomLink href={ROUTES.TERMS_OF_SERVICE}>
						Terms of service
					</CustomLink>
				</Flex>
				<Text
					align="center"
					component="p"
					my={0}
					sx={{ color: 'var(--text-gray-500)' }}
				>
					&copy; {CURRENT_YEAR} {APP_NAME}. All rights reversed.
				</Text>
			</Flex>
		</MantineFooter>
	)
}

export default Footer
