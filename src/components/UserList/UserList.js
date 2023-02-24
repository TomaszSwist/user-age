import React from 'react'

import User from './User'

import Card from '../UI/Card'
import styles from './UserList.module.css'

const UserList = props => {
	console.log(props.usersList)

	return (
		<Card>
			<ul className={styles.list}>
				{props.usersList.map(user => (
					<User key={user.id} username={user.username} age={user.age} />
				))}
			</ul>
		</Card>
	)
}

export default UserList
