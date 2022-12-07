import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img 
                onClick={() => history.push("/")}
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt=''
            />
            <img 
                onClick={() => history.push("/profile")}
                className='nav_avatar'
                src='https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755'
                alt=''
            />
            
        
        </div>
    </div>
  )
}

export default Nav