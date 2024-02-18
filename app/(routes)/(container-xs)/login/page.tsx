'use client'

import React from 'react'
import { Flex } from '@mantine/core'

import { LoginForm } from '@/components'

const LoginPage = () => {
	return (
		<Flex
			align="center"
			direction="column"
			justify="center"
			sx={{
				height: '100%',
			}}
		>
			<LoginForm />
		</Flex>
	)
}

export default LoginPage
