import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import firebase from '../firebase'

const Navbar = () => {
    const {isAuth, handleSignIn} = useAuth()
    const handleSignOut = () => firebase.auth().signOut()

    return (
        <nav className='navbar'>
            <Link to='/'>Tic Tac Toe 0.1-beta</Link>
            <div>
                {
                    isAuth ? (
                        <button onClick={handleSignOut}>Sign Out</button>
                    ) : (
                        <button onClick={handleSignIn}>Sign In</button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar