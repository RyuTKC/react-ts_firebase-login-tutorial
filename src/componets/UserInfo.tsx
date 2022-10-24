import React from 'react'
import { auth } from '../lib/firebase'

const UserInfo = () =>  {
  const url: string = typeof auth.currentUser?.photoURL === 'string' ? auth.currentUser?.photoURL : "";

  return (
    <>
      <div className='userInfo'>UserInfo</div>
      <img src={url} alt="" />
      <p>{auth.currentUser?.displayName}</p>
    </>
  )
}

export default UserInfo