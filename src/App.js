import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler (uName, uAge) {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });

  }

  return (
    <div className='App'>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
