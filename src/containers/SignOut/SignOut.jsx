import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/userActions';

export default function SignOut() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(signOut());
        history.push('/');
    });

    return (
        <>
        </>
    );
};