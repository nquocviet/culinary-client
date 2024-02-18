import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Textarea as MantineTextarea,
	TextareaProps as MantineTextareaProps,
} from '@mantine/core'

interface TextareaProps<T extends FieldValues> extends MantineTextareaProps {
	control: Control<T>
	name: Path<T>
}

const Textarea = <T extends FieldValues>({
	control,
	name,
	...props
}: TextareaProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineTextarea
					{...field}
					{...props}
					error={error?.message}
					value={field.value ?? ''}
				/>
			)}
		/>
	)
}

export default Textarea
