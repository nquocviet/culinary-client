import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Text, Title } from '@mantine/core'

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
		<Flex align="stretch" direction="column" gap={32} w="100%">
			<Flex align="center" direction="column" gap={4}>
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
				<Text align="center" component="p" my={0}>
					Welcome back, you&apos;ve been missed!
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex align="stretch" direction="column" gap={16}>
					<TextInput
						control={control}
						name="username"
						placeholder="Username or email address"
						size="md"
					/>
					<PasswordInput
						control={control}
						name="password"
						placeholder="Password"
						size="md"
					/>
					<Flex align="stretch" gap={16} justify="space-between">
						<Checkbox control={control} label="Remember me" name="remember" />
						<CustomLink
							href={ROUTES.RESET_PASSWORD}
							textProps={{
								sx: { fontSize: 'var(--fs-text-sm)' },
							}}
						>
							Forgot password?
						</CustomLink>
					</Flex>
					<Button color="dark" size="md" type="submit" variant="filled">
						Login
					</Button>
					<Text align="center" component="p" my={0}>
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
