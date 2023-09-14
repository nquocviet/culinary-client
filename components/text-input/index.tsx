import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	TextInput as MantineTextInput,
	TextInputProps as MantineTextInputProps,
} from '@mantine/core'

interface TextInputProps<T extends FieldValues> extends MantineTextInputProps {
	control: Control<T>
	name: Path<T>
	textIcon?: string
}

const TextInput = <T extends FieldValues>({
	control,
	name,
	textIcon,
	...props
}: TextInputProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineTextInput
					{...field}
					{...props}
					value={field.value ?? ''}
					error={error?.message}
					{...(textIcon && {
						icon: textIcon,
						iconWidth: 18,
						styles: {
							...props.styles,
							icon: {
								left: 4,
								color: 'var(--gray-400)',
							},
						},
					})}
				/>
			)}
		/>
	)
}

export default TextInput
