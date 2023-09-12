import { ReactNode } from 'react'
import { Text, TextProps } from '@mantine/core'
import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
	children: ReactNode
	colored?: boolean
	className?: string
	textProps?: TextProps
}

const CustomLink = ({
	href,
	children,
	colored,
	className,
	textProps,
	...props
}: CustomLinkProps) => {
	return (
		<Text
			component={Link}
			href={href}
			className={className}
			{...props}
			{...textProps}
			sx={{
				color: colored ? 'var(--blue-600)' : 'var(--gray-800)',
				textDecoration: 'none',
				'&:hover': {
					textDecoration: 'underline',
				},
				...textProps?.sx,
			}}
		>
			{children}
		</Text>
	)
}

export default CustomLink
