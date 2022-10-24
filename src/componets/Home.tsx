import React from 'react'
import SignInButton from './SignInButton'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../lib/firebase';
import UserInfo from './UserInfo';
import SignOutButton from './SignOutButton';

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ): (
          <SignInButton />
      )}
    </>
  )
}

export default Home