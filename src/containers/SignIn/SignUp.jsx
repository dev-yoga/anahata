import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import { signUp } from '../../actions/userActions';

export default function SignUp() {
  return (
    <>
      <main>
        <UserForm buttonText="Sign Up" submitAction={signUp}></UserForm>
      </main>
    </>
  );
}