import React from 'react'

import styles from './ModalInvalidUser.module.css'

import Button from '../UI/Button'

const ModalInvalidUser = props => {
	const handleCancel = () => {
		props.cancelModal(false)
	}

	return (
		<div className={styles.shadow}>
			<div className={styles.modal}>
				<p>{props.errorText}</p>
				<Button onClick={handleCancel}>Cancel</Button>
			</div>
		</div>
	)
}

export default ModalInvalidUser
