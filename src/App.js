import React, { useState } from 'react';

import NewUser from './Components/NewUser';
import Users from './Components/Users';

function App() {
  
  const startingUsers = [
    {
      id: "1",
      name: "John",
      age: "28",
    },
  ];

  const [users, setUsers] = useState(startingUsers);
  
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      const returned = [...prevUsers, user];
      return returned;
    });
  }

  return (
    <div>
      <NewUser onPassUsers = {addUserHandler}/>
      <Users items={users}/>
    </div>
  );
}

export default App;
