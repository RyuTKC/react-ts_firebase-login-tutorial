import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../lib/firebase';

const SignInButton = () => {
  const signInWithGoogle = () => { 
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button onClick={signInWithGoogle}>
        <p>グーグルでサインイン</p>
      </button>
    </>
  )
}

export default SignInButton