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
			<PageTitle align="center" title="Terms & Conditions" />
			<Text
				align="center"
				component="p"
				mb={0}
				mt={8}
				sx={{
					fontWeight: 'var(--fw-medium)' as 'normal',
				}}
			>
				By accessing our website, you are agreeing to be bound by these terms of
				service, and agree that you are responsible for compliance with any
				applicable local laws.
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
