import React from 'react'

// import styles from './UserList'

const User = props => {
	return (
        <li>
            <p>{props.username}</p>
            <p>{props.age}</p>
        </li>
    )
}

export default User
