import React from 'react'

import styles from './Modal.module.css'

import Button from './Button'

const Modal = props => {
	const handleCancel = () => {
		props.cancelModal(false)
	}

	return (
		<div className={`${styles.shadow} ${props.className} ${props.invalidUser ? styles.active : ''}`}>
			<div className={styles.modal}>
				<p>{props.errorText}</p>
				<Button onClick={handleCancel}>Cancel</Button>
			</div>
		</div>
	)
}

export default Modal