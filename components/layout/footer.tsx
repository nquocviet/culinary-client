import React from 'react'
import { Flex, Footer as MantineFooter, rem, Text } from '@mantine/core'

import { CustomLink, Dots } from '@/components'
import { ROUTES } from '@/config/routes'
import { APP_NAME, CURRENT_YEAR } from '@/constants/common'
import { FOOTER_HEIGHT } from '@/constants/layout'

const Footer = () => {
	return (
		<MantineFooter
			height={FOOTER_HEIGHT}
			fixed={false}
			sx={{
				position: 'static',
				backgroundColor: 'var(--gray-50)',
				padding: `${rem(16)} ${rem(28)}`,
			}}
		>
			<Flex justify="space-between" align="center">
				<Flex align="center" gap={8}>
					<CustomLink href={ROUTES.PRIVACY_POLICY}>Privacy policy</CustomLink>
					<Dots size={4} />
					<CustomLink href={ROUTES.TERMS_OF_SERVICE}>
						Terms of service
					</CustomLink>
				</Flex>
				<Text align="center" sx={{ color: 'var(--text-gray-500)' }}>
					&copy; {CURRENT_YEAR} {APP_NAME}. All rights reversed.
				</Text>
			</Flex>
		</MantineFooter>
	)
}

export default Footer
