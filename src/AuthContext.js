import { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase'
import Loading from './components/Loading'

export const AuthContext = createContext()

export const AuthProvider = ({children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const isAuth = !!user

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })
    }, [])

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }

    if (loading) return <Loading/>

    return (
        <AuthContext.Provider value={{user, isAuth, handleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
export default AuthContext