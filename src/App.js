import React, { useState } from 'react'

import styles from './App.module.css'

import NewUserForm from './components/NewUserForm/NewUserForm'
import UserList from './components/UserList/UserList'
import ModalInvalidUser from './components/Modal/ModalInvalidUser'

function App() {
	const [usersList, setUsersList] = useState([{ id: 2, username: 'Andrzej', age: '35' }])
	const [invalidUser, setInvalidUser] = useState(false)

	const handleAddUser = newUser => {
		setUsersList(prevState => {
			let newState = [...prevState]
			newState.unshift(newUser)
			return newState
		})
	}

	const handleInvalidUser = (value) => {
    setInvalidUser(value)
    console.log(invalidUser);
  }

	return (
		<div>
			<section className={styles.form}>
				<NewUserForm onAddUser={handleAddUser} onInvalidUser={handleInvalidUser} />
			</section>
			<section className={styles.list}>
				<UserList usersList={usersList} />
			</section>
      <section className={styles.modal}>
      <ModalInvalidUser />
      </section>
		</div>
	)
}

export default App
