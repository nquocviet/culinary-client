import { ReactNode } from 'react'
import { Text, TextProps } from '@mantine/core'
import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
	children: ReactNode
	className?: string
	colored?: boolean
	textProps?: TextProps
}

const CustomLink = ({
	children,
	className,
	colored,
	href,
	textProps,
	...props
}: CustomLinkProps) => {
	return (
		<Text
			className={className}
			component={Link}
			href={href}
			{...props}
			{...textProps}
			sx={{
				'&:hover': {
					textDecoration: 'underline',
				},
				color: colored ? 'var(--blue-600)' : 'var(--gray-800)',
				textDecoration: 'none',
				...textProps?.sx,
			}}
		>
			{children}
		</Text>
	)
}

export default CustomLink
