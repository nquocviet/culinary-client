import React, { ReactNode } from 'react'
import {
	Button,
	Modal as MantineModal,
	ModalBaseHeaderProps,
	ModalBaseProps,
	rem,
} from '@mantine/core'

import { ModalAction } from '@/components'

export type ModalOpenedProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

interface ModalProps
	extends Omit<ModalBaseProps, '__staticSelector' | 'title'> {
	title?: string | ReactNode
	centered?: boolean
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelText?: string
	confirmText?: string
	rightActionSection?: ReactNode
	headerProps?: ModalBaseHeaderProps
	onCancel?: () => void
	onConfirm?: () => void
}

const Modal = ({
	title,
	children,
	opened,
	centered,
	closeOnConfirm = false,
	closeOnCancel = true,
	cancelText,
	confirmText,
	rightActionSection,
	headerProps,
	onClose,
	onCancel,
	onConfirm,
	...rest
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...rest}
			opened={opened}
			onClose={onClose}
			centered={centered ?? true}
			transitionProps={{
				transition: 'fade',
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			}}
			lockScroll
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header
					px={24}
					pt={24}
					pb={0}
					sx={{ zIndex: 1000 }}
					{...headerProps}
				>
					<MantineModal.Title
						sx={{
							width: '100%',
							fontSize: 'var(--fs-display-xs)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
							fontFamily: 'var(--ff-merriweather)',
						}}
					>
						{title}
					</MantineModal.Title>
					<MantineModal.CloseButton
						size="lg"
						iconSize={24}
						sx={{
							marginTop: rem(-4),
							marginRight: rem(-12),
						}}
					/>
				</MantineModal.Header>
				<MantineModal.Body p={24}>{children}</MantineModal.Body>
				{(cancelText || confirmText) && (
					<MantineModal.Header
						sx={{
							zIndex: 1000,
							top: 'unset',
							bottom: 0,
							paddingTop: 0,
							paddingLeft: 0,
							paddingRight: 0,
						}}
					>
						<ModalAction bordered>
							{rightActionSection && (
								<div style={{ marginRight: 'auto' }}>{rightActionSection}</div>
							)}
							{cancelText && (
								<Button
									size="md"
									color="gray"
									variant="outline"
									onClick={() => {
										if (closeOnCancel) {
											onClose()
										}
										onCancel?.()
									}}
								>
									{cancelText}
								</Button>
							)}
							{confirmText && (
								<Button
									size="md"
									color="primary"
									onClick={() => {
										if (closeOnConfirm) {
											onClose()
										}
										onConfirm?.()
									}}
								>
									{confirmText}
								</Button>
							)}
						</ModalAction>
					</MantineModal.Header>
				)}
			</MantineModal.Content>
		</MantineModal.Root>
	)
}

export default Modal
