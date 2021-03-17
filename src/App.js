import {BrowserRouter as Router} from 'react-router-dom'

import AuthContext, {AuthProvider} from './AuthContext'
import {PublicRoute, PrivateRoute} from './routes'

import Navbar from './components/Navbar'
import GameRoom from './components/GameRoom'
import PublicHome from './components/PublicHome'
import PrivateHome from './components/PrivateHome'
import JoinGame from './components/JoinGame'
import CreateGame from './components/CreateGame'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className='app-component'>
          <PublicRoute exact path='/' component={PublicHome} restricted={true} />
          <PrivateRoute path='/home' component={PrivateHome} />
          <PrivateRoute path='/create-game' component={CreateGame} />
          <PrivateRoute path='/join-game' component={JoinGame} />
          <PrivateRoute path='/room/:roomID' component={GameRoom} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
