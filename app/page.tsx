import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function HomePage() {

  const user = await currentUser();

  if(!user) {
    return <Guest/> 
  }

  return (
    <div className=''>
      HomePage
    </div>
  )
}

export default HomePage
