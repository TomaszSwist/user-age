import React, { useState } from 'react'

import styles from './NewUserForm.module.css'

import Button from '../UI/Button'
import Card from '../UI/Card'

const NewUserForm = props => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')

	const addUser = e => {
		e.preventDefault()
		if (username.trim().length > 0 && age.trim().length > 0) {
			if (+age > 0) {
				const newUser = {
					id: Math.random(),
					username: username,
					age: age,
				}
				props.onAddUser(newUser)
				setUsername('')
				setAge('')
			} else {
				props.onInvalidUser(true, "User age can't be lower than 1")
			}
		} else {
			props.onInvalidUser(true, 'Username and age must be entered.')
		}
	}

	const handleUsernameInput = e => {
		setUsername(e.target.value)
	}

	const handleAgeInput = e => {
		setAge(e.target.value)
	}

	return (
		<Card>
			<form onSubmit={addUser}>
				<div className={styles['form-control']}>
					<label htmlFor='username'>Username</label>
					<input id='username' onChange={handleUsernameInput} value={username} type='text' />
					<label htmlFor='age'>Age (in years)</label>
					<input id='age' onChange={handleAgeInput} value={age} type='number' />
				</div>
				<Button type='submit' className={styles.button}>
					Add user
				</Button>
			</form>
		</Card>
	)
}

export default NewUserForm
