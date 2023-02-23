import React, { useState } from 'react'

import styles from './NewUserForm.module.css'

const NewUserForm = props => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')

	const addUser = e => {
		e.preventDefault()
		if (username.trim().length > 0 && age.trim().length > 0) {
			const newUser = {
				id: Math.random(),
				username: username,
				age: age,
			}
			props.onAddUser(newUser)
		} else {
			props.onInvalidUser(true)
		}
	}

	const handleUsernameInput = e => {
		setUsername(e.target.value)
	}

	const handleAgeInput = e => {
		setAge(e.target.value)
	}

	return (
		<form onSubmit={addUser}>
			<div className={styles['form-control']}>
				<label>Username</label>
				<input onChange={handleUsernameInput} value={username} type='text' />
				<label>Age (in years)</label>
				<input onChange={handleAgeInput} value={age} type='number' />
			</div>
			<button type='submit' className={styles.button}>
				Add user
			</button>
		</form>
	)
}

export default NewUserForm
