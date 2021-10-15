import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import { signIn } from '../../actions/userActions';

export default function SignIn() {
  return (
    <>
      <main>
        <UserForm buttonText="Sign In" submitAction={signIn}></UserForm>
      </main>
    </>
  );
}

