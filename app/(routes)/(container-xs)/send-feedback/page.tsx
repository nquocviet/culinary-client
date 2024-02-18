'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Flex, Text, Title } from '@mantine/core'
import { PaperPlaneRight } from '@phosphor-icons/react'

import { DropzoneImage, Textarea } from '@/components'

const SendFeedbackPage = () => {
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
							Send Feedback
						</Title>
						<Text align="center" component="p" my={0}>
							Tell us what&apos;s problem so that we can improve our product.
						</Text>
					</Flex>
					<Textarea
						control={control}
						description="Please don't include any sensitive information"
						label="Describe your issue or suggestion"
						minRows={4}
						name="issue"
						placeholder="Leave us your issue"
						size="md"
						required
					/>
					<DropzoneImage
						label="A screenshot will help us better understand the issue"
						onDrop={() => null}
					/>
					<Button
						color="primary"
						leftIcon={<PaperPlaneRight size={20} />}
						size="md"
						type="submit"
					>
						Send feedback
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
}

export default SendFeedbackPage
