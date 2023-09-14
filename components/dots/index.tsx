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
	size?: number
	color?: DotsColors
	children?: ReactNode
	className?: string
}

const dotsColors = {
	primary: '--primary-700',
	gray: '--gray-500',
	black: '--gray-900',
	blue: '--blue-500',
	red: '--red-600',
	yellow: '--yellow-500',
	green: '--green-500',
}

const Dots = ({
	size = 6,
	color = 'black',
	children,
	className,
	...props
}: DotsProps) => {
	return (
		<Text
			component="span"
			className={className}
			sx={{
				display: 'inline-block',
				flexShrink: 0,
				borderRadius: '50%',
				backgroundColor: `var(${dotsColors[color]})`,
				width: rem(size),
				height: rem(size),
			}}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Dots
