import React, { useState } from 'react'

// import styles from './App.module.css'

import NewUserForm from './components/NewUserForm/NewUserForm'
import UserList from './components/UserList/UserList'
import Modal from './components/UI/Modal'

function App() {
	const [usersList, setUsersList] = useState([])
	const [invalidUser, setInvalidUser] = useState(false)
	const [errorText, setErrorText] = useState('')

	const handleAddUser = newUser => {
		setUsersList(prevState => {
			let newState = [...prevState]
			newState.unshift(newUser)
			return newState
		})
	}

	const handleModal = (showModal, errorValue) => {
		setInvalidUser(showModal)
		setErrorText(errorValue)
		console.log(errorText)
	}

	return (
		<div>
			<NewUserForm onAddUser={handleAddUser} onInvalidUser={handleModal} />
			<UserList usersList={usersList} />
			<Modal
				invalidUser={invalidUser}
				cancelModal={handleModal}
				errorText={errorText}
			/>
		</div>
	)
}

export default App
