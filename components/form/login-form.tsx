import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, rem, Text, Title } from '@mantine/core'

import { Checkbox, CustomLink, PasswordInput, TextInput } from '@/components'
import { ROUTES } from '@/config/routes'

interface LoginFormProps {
	onChangeMode?: () => void
}

const LoginForm = ({ onChangeMode }: LoginFormProps) => {
	const { control, handleSubmit } = useForm()

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<Flex direction="column" align="stretch" gap={32} w="100%">
			<Flex direction="column" align="center" gap={4}>
				<Title
					order={2}
					sx={{
						fontFamily: 'var(--ff-merriweather)',
						fontSize: 'var(--fs-display-sm)',
						fontWeight: 'var(--fw-semibold)' as 'normal',
					}}
				>
					Sign in
				</Title>
				<Text align="center">Welcome back, you&apos;ve been missed!</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" align="stretch" gap={16}>
					<TextInput
						name="username"
						control={control}
						size="md"
						placeholder="Username or email address"
					/>
					<PasswordInput
						name="password"
						control={control}
						size="md"
						placeholder="Password"
					/>
					<Flex justify="space-between" align="stretch" gap={16}>
						<Checkbox name="remember" control={control} label="Remember me" />
						<CustomLink
							href={ROUTES.RESET_PASSWORD}
							textProps={{
								sx: { fontSize: 'var(--fs-text-sm)' },
							}}
						>
							Forgot password?
						</CustomLink>
					</Flex>
					<Button type="submit" color="dark" variant="filled" size="md">
						Login
					</Button>
					<Text align="center">
						Don&apos;t have an account yet?{' '}
						{onChangeMode ? (
							<span className="custom-link" onClick={onChangeMode}>
								Sign up
							</span>
						) : (
							<CustomLink href={ROUTES.REGISTER} colored>
								Sign up
							</CustomLink>
						)}
					</Text>
				</Flex>
			</form>
		</Flex>
	)
}

export default LoginForm
