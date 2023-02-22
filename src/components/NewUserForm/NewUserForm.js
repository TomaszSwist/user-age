import React from 'react'

import styles from './NewUserForm.module.css'

const NewUserForm = props => {
	
    // const addUser = () => {}

	return (
		// <form onSubmit={addUser}>
        <form>
			<div clsssName={`${styles['form-control']}`}>
				<label>Username</label>
                <input type="text" />
                <label>Age (in years)</label>
                <input type="number" />
			</div>
		</form>
	)
}

export default NewUserForm
