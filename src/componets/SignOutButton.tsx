import React from 'react'
import { auth, provider } from '../lib/firebase';

const SignOutButton = () => {

  return (
    <>
      <button onClick={() => auth.signOut()}>
        <p>サインアウト</p>
      </button>
    </>
  )
}

export default SignOutButton