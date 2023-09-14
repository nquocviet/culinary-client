'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Checkbox, Flex, Grid, Text, Title } from '@mantine/core'
import { PaperPlaneRight } from '@phosphor-icons/react'

import { CheckboxGroup, DropzoneImage, Textarea, TextInput } from '@/components'

const SendFeedbackPage = () => {
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
							Send Feedback
						</Title>
						<Text align="center">
							Tell us what&apos;s problem so that we can improve our product.
						</Text>
					</Flex>
					<Textarea
						name="issue"
						control={control}
						label="Describe your issue or suggestion"
						placeholder="Leave us your issue"
						description="Please don't include any sensitive information"
						size="md"
						minRows={4}
						required
					/>
					<DropzoneImage
						label="A screenshot will help us better understand the issue"
						onDrop={() => null}
					/>
					<Button
						color="primary"
						type="submit"
						size="md"
						leftIcon={<PaperPlaneRight size={20} />}
					>
						Send feedback
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
}

export default SendFeedbackPage
