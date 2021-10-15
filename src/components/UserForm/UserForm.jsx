import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import store from '../../store';
import styles from './UserForm.css';

const UserForm = ({ buttonText, submitAction }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    let unsubscribe;

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(submitAction(username, password));
        setUsername('');
        setPassword('');
        setSubmitted(true);
    }

    function handleStateChange() {
        if(!submitted) return;
        if(unsubscribe) unsubscribe();

        setSubmitted(false);
        history.push('/');
    }

    useEffect(() => {
        unsubscribe = store.subscribe(handleStateChange);
      });
      
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                <TextField label="Username" type="text" value={username} onChange={({ target }) => setUsername(target.value)} />            
            </label>
            <label>
                <TextField label="Password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />            
            </label>
        </form>
    );
};

UserForm.propTypes = {
    buttonText: PropTypes.string.isRequired,
    submitAction: PropTypes.func.isRequired,
};

export default UserForm;