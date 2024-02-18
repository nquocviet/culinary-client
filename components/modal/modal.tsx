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
	onClose: (value?: React.SetStateAction<boolean>) => void
	opened: boolean
}

interface ModalProps
	extends Omit<ModalBaseProps, '__staticSelector' | 'title'> {
	cancelText?: string
	centered?: boolean
	closeOnCancel?: boolean
	closeOnConfirm?: boolean
	confirmText?: string
	headerProps?: ModalBaseHeaderProps
	onCancel?: () => void
	onConfirm?: () => void
	rightActionSection?: ReactNode
	title?: string | ReactNode
}

const Modal = ({
	cancelText,
	centered,
	children,
	closeOnCancel = true,
	closeOnConfirm = false,
	confirmText,
	headerProps,
	onCancel,
	onClose,
	onConfirm,
	opened,
	rightActionSection,
	title,
	...props
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...props}
			centered={centered ?? true}
			opened={opened}
			transitionProps={{
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
				transition: 'fade',
			}}
			lockScroll
			onClose={onClose}
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header
					pb={0}
					pt={24}
					px={24}
					sx={{ zIndex: 1000 }}
					{...headerProps}
				>
					<MantineModal.Title
						sx={{
							fontFamily: 'var(--ff-merriweather)',
							fontSize: 'var(--fs-display-xs)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
							width: '100%',
						}}
					>
						{title}
					</MantineModal.Title>
					<MantineModal.CloseButton
						iconSize={24}
						size="lg"
						sx={{
							marginRight: rem(-12),
							marginTop: rem(-4),
						}}
					/>
				</MantineModal.Header>
				<MantineModal.Body p={24}>{children}</MantineModal.Body>
				{(cancelText || confirmText) && (
					<MantineModal.Header
						sx={{
							bottom: 0,
							paddingLeft: 0,
							paddingRight: 0,
							paddingTop: 0,
							top: 'unset',
							zIndex: 1000,
						}}
					>
						<ModalAction bordered>
							{rightActionSection && (
								<div style={{ marginRight: 'auto' }}>{rightActionSection}</div>
							)}
							{cancelText && (
								<Button
									color="gray"
									size="md"
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
									color="primary"
									size="md"
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
