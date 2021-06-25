import React from 'react';
import UsersList from './UsersList';

const Users = (props) => {
    
    return(
        <div>
            <UsersList items={props.items}/>
        </div>
    );

};

export default Users;