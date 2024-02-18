import React, { ReactNode } from 'react'
import { rem, Text } from '@mantine/core'

type DotsColors =
	| 'primary'
	| 'gray'
	| 'black'
	| 'blue'
	| 'red'
	| 'yellow'
	| 'green'

interface DotsProps extends React.HTMLAttributes<HTMLSpanElement> {
	children?: ReactNode
	className?: string
	color?: DotsColors
	size?: number
}

const dotsColors = {
	black: '--gray-900',
	blue: '--blue-500',
	gray: '--gray-500',
	green: '--green-500',
	primary: '--primary-700',
	red: '--red-600',
	yellow: '--yellow-500',
}

const Dots = ({
	children,
	className,
	color = 'black',
	size = 6,
	...props
}: DotsProps) => {
	return (
		<Text
			className={className}
			component="span"
			sx={{
				backgroundColor: `var(${dotsColors[color]})`,
				borderRadius: '50%',
				display: 'inline-block',
				flexShrink: 0,
				height: rem(size),
				width: rem(size),
			}}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Dots
