import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Text, Title } from '@mantine/core'

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
					Getting started
				</Title>
				<Text align="center" component="p" my={0}>
					Create an account to continue and connect with the people.
				</Text>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex align="stretch" direction="column" gap={16}>
					<TextInput
						control={control}
						name="email"
						placeholder="Email address"
						size="md"
					/>
					<TextInput
						control={control}
						name="username"
						placeholder="Username"
						size="md"
					/>
					<PasswordInput
						control={control}
						name="password"
						placeholder="Password"
						size="md"
					/>
					<Flex align="stretch" gap={16} justify="space-between">
						<Checkbox
							control={control}
							label={
								<>
									I accept the{' '}
									<a
										className="custom-link"
										href={ROUTES.TERMS_OF_SERVICE}
										rel="noopener noreferrer"
										target="_blank"
									>
										Terms of Service
									</a>{' '}
									and{' '}
									<a
										className="custom-link"
										href={ROUTES.PRIVACY_POLICY}
										rel="noopener noreferrer"
										target="_blank"
									>
										Privacy Policy
									</a>
								</>
							}
							name="acceptTerms"
						/>
					</Flex>
					<Button color="dark" size="md" type="submit" variant="filled">
						Register
					</Button>
					<Text align="center" component="p" my={0}>
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
