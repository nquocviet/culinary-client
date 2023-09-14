'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Checkbox, Flex, Grid, Text, Title } from '@mantine/core'
import { PaperPlaneRight } from '@phosphor-icons/react'

import { CheckboxGroup, Textarea, TextInput } from '@/components'

const ContactPage = () => {
	const { control, handleSubmit } = useForm()

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			sx={{
				height: '100%',
			}}
		>
			<Box component="form" onSubmit={handleSubmit(onSubmit)} w="100%">
				<Flex direction="column" align="stretch" gap={24} w="100%">
					<Flex direction="column" align="center" gap={4}>
						<Title
							order={2}
							sx={{
								fontFamily: 'var(--ff-merriweather)',
								fontSize: 'var(--fs-display-sm)',
								fontWeight: 'var(--fw-semibold)' as 'normal',
							}}
						>
							Get In Touch
						</Title>
						<Text align="center">
							We&apos;d love to hear from you. Please fill out this form.
						</Text>
					</Flex>
					<Grid gutter={16}>
						<Grid.Col span={6}>
							<TextInput
								name="firstName"
								control={control}
								label="First name"
								placeholder="Your first name"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="lastName"
								control={control}
								label="Last name"
								placeholder="Your last name"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<TextInput
								name="email"
								control={control}
								label="Email"
								placeholder="example@gmail.com"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<Textarea
								name="message"
								control={control}
								label="Message"
								placeholder="Leave us a message"
								size="md"
								minRows={4}
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<CheckboxGroup name="services" control={control} label="Services">
								<Grid mt={4} gutter={12}>
									<Grid.Col span={6}>
										<Checkbox value="media_socials" label="Media socials" />
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox
											value="strategy_consulting"
											label="Strategy & consulting"
										/>
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox value="seo_marketing" label="SEO & Marketing" />
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox
											value="content_creation"
											label="Content creation"
										/>
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox value="other" label="Other" />
									</Grid.Col>
								</Grid>
							</CheckboxGroup>
						</Grid.Col>
					</Grid>
					<Button
						color="primary"
						type="submit"
						size="md"
						leftIcon={<PaperPlaneRight size={20} />}
					>
						Send message
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
}

export default ContactPage
