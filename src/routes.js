import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from './AuthContext'

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuth, user} = useAuth()
    return(
        <Route {...rest} render={props => isAuth 
            ? <Component isAuth={isAuth} user={user} {...props}/>
            : <Redirect to='/'/> 
        }
        />
    )
}

export const PublicRoute = ({component: Component, ...rest}) => {
    const {isAuth} = useAuth()
    return(
        <Route {...rest} render={props => (
                isAuth ? <Redirect to='/home' /> : <Component {...props} />
            )
        }
        />
    )
}