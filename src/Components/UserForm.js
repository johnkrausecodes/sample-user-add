import React, { useState } from 'react';

import Card from './UI/Card';
import classes from './UserForm.module.css';
import Button from './UI/Button';

const UserForm = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: enteredName,
            age: enteredAge
        }


        props.onSaveUserData(userData);
        setEnteredName('');
        setEnteredAge('');

    };
    return(
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type='text' value={enteredName} onChange={nameChangeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler}/>
                    </div>
                </div>
                <div>
                    <Button type ='submit'>Add User</Button>
                </div>
            </form>
        </Card>
    );
};

export default UserForm;