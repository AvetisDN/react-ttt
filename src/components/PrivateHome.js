import {useHistory} from 'react-router-dom'

const PrivateHome = () => {
    const history = useHistory()
    return (
        <div className='home-private-page'>
            <div className="container">
                <button className="button-primary" onClick={() => history.push('/join-game')}>
                    Join Game
                </button>
                <button className="button-secondary" onClick={() => history.push('/create-game')}>
                    Create Game
                </button>
            </div>
        </div>
    )
}

export default PrivateHome