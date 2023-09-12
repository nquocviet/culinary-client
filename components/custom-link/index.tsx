import { ReactNode } from 'react'
import { rem, Text } from '@mantine/core'
import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
	children: ReactNode
	leading?: ReactNode
	trailing?: ReactNode
	className?: string
}

const CustomLink = ({
	href,
	children,
	leading,
	trailing,
	className,
}: CustomLinkProps) => {
	return (
		<Text
			component={Link}
			href={href}
			className={className}
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: rem(12),
				fontWeight: 'var(--fw-medium)' as 'normal',
				color: 'var(--gray-800)',
				textDecoration: 'none',
				'&:hover': {
					textDecoration: 'underline',
				},
			}}
		>
			{leading && leading}
			{children}
			{trailing && trailing}
		</Text>
	)
}

export default CustomLink
