import React from 'react';
import ErrorModal from './UI/ErrorModal';

import UserForm from './UserForm';

const NewUser = (props) => {

    const saveUserData = (savedUserData) => {
        const userData = {
            ...savedUserData,
            id: Math.random().toString(),
        };
        props.onPassUsers(userData);
        
    };

    return (
        <div>
            <ErrorModal title="An Error Occured!" message="Something went wrong!"/>
            <UserForm onSaveUserData={saveUserData}/>
        </div>
    );

};

export default NewUser;