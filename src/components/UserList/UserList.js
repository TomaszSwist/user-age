import React from 'react'

import User from './User'

// import styles from './UserList.module.css'

const UserList = props => {
	console.log(props.usersList)

	return (
		<ul>
			{props.usersList.map(user => (
				<User key={user.id} username={user.username} age={user.age} />
			))}
		</ul>
	)
}

export default UserList
