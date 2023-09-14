import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	Checkbox as MantineCheckbox,
	CheckboxGroupProps as MantineCheckboxGroupProps,
} from '@mantine/core'

interface CheckboxGroupProps<T extends FieldValues>
	extends MantineCheckboxGroupProps {
	control: Control<T>
	name: Path<T>
}

const CheckboxGroup = <T extends FieldValues>({
	control,
	name,
	...props
}: CheckboxGroupProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <MantineCheckbox.Group {...field} {...props} />}
		/>
	)
}

export default CheckboxGroup
