import React from 'react'

import User from './User'

import Card from '../UI/Card'

const UserList = props => {
	console.log(props.usersList)

	return (
		<Card>
			<ul>
				{props.usersList.map(user => (
					<User key={user.id} username={user.username} age={user.age} />
				))}
			</ul>
		</Card>
	)
}

export default UserList
