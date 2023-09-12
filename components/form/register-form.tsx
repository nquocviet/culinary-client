import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, rem, Text, Title } from '@mantine/core'

import { Checkbox, CustomLink, PasswordInput, TextInput } from '@/components'
import { ROUTES } from '@/config/routes'

interface RegisterFormProps {
	onChangeMode?: () => void
}

const RegisterForm = ({ onChangeMode }: RegisterFormProps) => {
	const { control, handleSubmit } = useForm()

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<Flex
			direction="column"
			align="stretch"
			gap={32}
			sx={{
				width: '100%',
				maxWidth: rem(400),
			}}
		>
			<Flex direction="column" align="center" gap={4}>
				<Title
					order={2}
					sx={{
						fontFamily: 'var(--ff-merriweather)',
						fontSize: 'var(--fs-display-sm)',
						fontWeight: 'var(--fw-semibold)' as 'normal',
					}}
				>
					Getting started
				</Title>
				<Text align="center">
					Create an account to continue and connect with the people.
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" align="stretch" gap={16}>
					<TextInput
						name="email"
						control={control}
						size="md"
						placeholder="Email address"
					/>
					<TextInput
						name="username"
						control={control}
						size="md"
						placeholder="Username"
					/>
					<PasswordInput
						name="password"
						control={control}
						size="md"
						placeholder="Password"
					/>
					<Flex justify="space-between" align="stretch" gap={16}>
						<Checkbox
							name="acceptTerms"
							control={control}
							label={
								<>
									I accept the{' '}
									<a
										href={ROUTES.TERMS_OF_SERVICE}
										className="custom-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Terms of Service
									</a>{' '}
									and{' '}
									<a
										href={ROUTES.PRIVACY_POLICY}
										className="custom-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Privacy Policy
									</a>
								</>
							}
						/>
					</Flex>
					<Button type="submit" color="dark" variant="filled" size="md">
						Register
					</Button>
					<Text align="center">
						Already have an account?{' '}
						{onChangeMode ? (
							<span className="custom-link" onClick={onChangeMode}>
								Sign in
							</span>
						) : (
							<CustomLink href={ROUTES.LOGIN} colored>
								Sign in
							</CustomLink>
						)}
					</Text>
				</Flex>
			</form>
		</Flex>
	)
}

export default RegisterForm
