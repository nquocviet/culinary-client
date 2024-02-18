'use client'

import React from 'react'
import { Box, Text } from '@mantine/core'

import { PageTitle } from '@/components'

const PrivacyPolicyPage = () => {
	return (
		<Box
			sx={{
				fontSize: 'var(--fs-text-lg)',
			}}
		>
			<PageTitle align="center" title="Privacy Policy" />
			<Text
				align="center"
				component="p"
				mb={0}
				mt={8}
				sx={{
					fontWeight: 'var(--fw-medium)' as 'normal',
				}}
			>
				Your privacy is important to us at Culinary. We respect your privacy
				regarding any information we may collect from you across our website.
			</Text>
			<Text align="right" my="lg">
				Last updated:{' '}
				<Text
					component="span"
					sx={{ fontWeight: 'var(--fw-semibold)' as 'bold' }}
				></Text>
			</Text>
		</Box>
	)
}

export default PrivacyPolicyPage
