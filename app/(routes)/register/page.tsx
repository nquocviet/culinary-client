'use client'

import React from 'react'
import { Flex } from '@mantine/core'

import { RegisterForm } from '@/components'

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
			<RegisterForm />
		</Flex>
	)
}

export default LoginPage
