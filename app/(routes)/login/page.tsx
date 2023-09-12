'use client'

import React from 'react'
import { Flex } from '@mantine/core'

import { LoginForm } from '@/components'

const LoginPage = () => {
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			sx={{
				height: '100%',
			}}
		>
			<LoginForm />
		</Flex>
	)
}

export default LoginPage
