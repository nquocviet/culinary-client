'use client'

import React from 'react'
import { Flex } from '@mantine/core'

import { RegisterForm } from '@/components'

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
			<RegisterForm />
		</Flex>
	)
}

export default LoginPage
