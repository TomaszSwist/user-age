import React from 'react';

import NewUserForm from './components/NewUserForm/NewUserForm';

import styles from './App.module.css'

function App() {

  // const [usersList, setUsersList] = useState('')

  const handleAddUser = () => {

  }

  return (
    <div>
      <section className={styles.form}>
      <NewUserForm onAddUser={handleAddUser}/>
      </section>
      
    </div>
  );
}

export default App;
