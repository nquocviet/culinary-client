import { ButtonStylesParams, rem } from '@mantine/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any = {
	Badge: {
		styles: () => ({
			root: {
				textTransform: 'capitalize',
				fontWeight: 'var(--fw-medium)',
			},
		}),
	},
	Button: {
		styles: (theme, params: ButtonStylesParams, { variant, size }) => ({
			root: {
				fontWeight: 'var(--fw-medium)',
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: params.color === 'primary' && variant === 'light'
						? theme.colors.primary[8]
						: undefined,
				borderColor:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.gray[3]
						: undefined,
				backgroundColor:
					params.color === 'gray' && variant === 'default'
						? theme.colors.gray[1]
						: params.color === 'primary' && variant === 'light'
						? theme.colors.primary[3]
						: undefined,
				height: size === 'md' ? rem(40) : undefined,
				'&:hover': {
					backgroundColor:
						params.color === 'primary' && variant === 'light'
							? theme.colors.primary[4]
							: undefined,
				},
			},
			leftIcon: {
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: undefined,
			},
		}),
	},
	Divider: {
		styles: () => ({
			label: {
				'&::after': {
					borderColor: 'var(--gray-200)',
				},
			},
			horizontal: {
				borderColor: 'var(--gray-200)',
			},
			vertical: {
				borderColor: 'var(--gray-300)',
			},
		}),
	},
	Drawer: {
		styles: () => ({
			overlay: {
				backgroundColor: 'rgba(0, 0, 0, 0.25)',
			},
		}),
	},
	Menu: {
		styles: () => ({
			item: {
				'&:hover': {
					backgroundColor: 'var(--gray-50)',
				},
			},
		}),
	},
	NumberInput: {
		styles: (theme, _, { size }) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				height: size === 'md' ? rem(40) : undefined,
				minHeight: size === 'md' ? rem(40) : undefined,
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
	NavLink: {
		styles: () => ({
			root: {
				'&[data-active]': {
					backgroundColor: 'var(--gray-100)',
					color: 'var(--gray-900)',
				},
			},
		}),
	},
	PasswordInput: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&[readonly]:focus-within': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:not([readonly]):focus-within': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
			},
			innerInput: {
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
	RichTextEditor: {
		styles: (theme) => ({
			root: {
				borderColor: theme.colors.gray[3],
				'&:focus-within': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
			},
			toolbar: {
				borderColor: theme.colors.gray[3],
				padding: `${rem(8)} ${rem(14)}`,
			},
			content: {
				'&:has(.is-editor-empty)': {
					height: '1px',
				},
				'& > div': {
					height: '100% !important',
					paddingLeft: `${rem(14)} !important`,
					paddingRight: `${rem(14)} !important`,
				},
				'& .is-editor-empty::before': {
					color: `${theme.colors.gray[4]} !important`,
				},
				'& a': {
					color: theme.colors.blue[5],
				},
			},
			controlsGroup: {
				gap: rem(6),
			},
			control: {
				borderColor: 'transparent',
				height: 'auto',
				borderRadius: `${rem(4)} !important`,
				padding: rem(4),
				'&:hover': {
					backgroundColor: `${theme.colors.gray[0]} !important`,
				},
				'&[data-active]': {
					backgroundColor: theme.colors.primary[3],
					color: theme.colors.primary[8],
					'&:hover': {
						backgroundColor: `${theme.colors.primary[4]} !important`,
					},
				},
			},
			linkEditorExternalControl: {
				'&[data-active]': {
					backgroundColor: theme.colors.primary[3],
					color: theme.colors.primary[8],
					borderColor: theme.colors.primary[6],
					'&:hover': {
						backgroundColor: `${theme.colors.primary[4]} !important`,
					},
				},
			},
		}),
	},
	Select: {
		styles: (theme, _, { size }) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				height: size === 'md' ? rem(40) : undefined,
				minHeight: size === 'md' ? rem(40) : undefined,
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
			},
		}),
	},
	Switch: {
		styles: (theme) => ({
			thumb: {
				borderColor: theme.colors.white,
			},
			track: {
				cursor: 'pointer',
				borderColor: theme.colors.gray[2],
			},
			label: {
				cursor: 'pointer',
			},
		}),
	},
	Textarea: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
	TextInput: {
		styles: (theme, _, { size }) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				height: size === 'md' ? rem(40) : undefined,
				minHeight: size === 'md' ? rem(40) : undefined,
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
}
