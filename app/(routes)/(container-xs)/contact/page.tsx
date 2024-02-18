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
			align="center"
			direction="column"
			justify="center"
			sx={{
				height: '100%',
			}}
		>
			<Box component="form" w="100%" onSubmit={handleSubmit(onSubmit)}>
				<Flex align="stretch" direction="column" gap={24} w="100%">
					<Flex align="center" direction="column" gap={4}>
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
						<Text align="center" component="p" my={0}>
							We&apos;d love to hear from you. Please fill out this form.
						</Text>
					</Flex>
					<Grid gutter={16}>
						<Grid.Col span={6}>
							<TextInput
								control={control}
								label="First name"
								name="firstName"
								placeholder="Your first name"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								control={control}
								label="Last name"
								name="lastName"
								placeholder="Your last name"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<TextInput
								control={control}
								label="Email"
								name="email"
								placeholder="example@gmail.com"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<Textarea
								control={control}
								label="Message"
								minRows={4}
								name="message"
								placeholder="Leave us a message"
								size="md"
								required
							/>
						</Grid.Col>
						<Grid.Col>
							<CheckboxGroup control={control} label="Services" name="services">
								<Grid gutter={12} mt={4}>
									<Grid.Col span={6}>
										<Checkbox label="Media socials" value="media_socials" />
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox
											label="Strategy & consulting"
											value="strategy_consulting"
										/>
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox label="SEO & Marketing" value="seo_marketing" />
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox
											label="Content creation"
											value="content_creation"
										/>
									</Grid.Col>
									<Grid.Col span={6}>
										<Checkbox label="Other" value="other" />
									</Grid.Col>
								</Grid>
							</CheckboxGroup>
						</Grid.Col>
					</Grid>
					<Button
						color="primary"
						leftIcon={<PaperPlaneRight size={20} />}
						size="md"
						type="submit"
					>
						Send message
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
}

export default ContactPage
