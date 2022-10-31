import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from './Nav'
import PlansScreen from './PlansScreen'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)

    console.log(user.email)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit profile</h1>
            <div className='profileScreen_info'>
                <img 
                    src='https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755' 
                    alt=''
                />
                <div className='profileScreen_details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen_plans'>
                        <h3 >Plans</h3>
                        <PlansScreen />
                        <button 
                            onClick={() => auth.signOut()} 
                            className='profileScreen_signOut'
                        >
                            Sign Out
                        </button>
                    </div>

                </div> 
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen