import React from 'react';
import { useHistory } from 'react-router-dom';
import store from '../../store';
import Pose from '../../components/Pose/Pose';
import styles from './Home.css';

export default function Home() {
  const history = useHistory();
  const user = store.getState().user;

  // checks if you're logged in or not; if logged in go to home, if not go to sign up
  if(user === null) {
    history.push('/signup');
  }


  return (
    <>
      <div className={styles.main}>
        <Pose />
      </div>
    </>
  );
}
