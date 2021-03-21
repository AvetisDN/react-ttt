import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from "../AuthContext"
import {createRoom} from "../faunadb"

const CreateGame = () => {
    const history = useHistory()
    const [roomName, setRootName] = useState('')
    const {user} = useAuth()

    const handleCreateGame = (e) => {
        e.preventDefault()
        if(roomName.trim() === '') return

        createRoom(user.uid, user.photoURL)
            .then((res) => {
                const id = res.data.id
                history.push(`/room/${id}`)
            })
    }

    const handleOnChangeRoomName = (e) => setRootName(e.target.value)

    return (
        <div className='join-game-page'>
            <div className="form-container">
                <form>
                    <div>
                        <label htmlFor="roomName">Room name:</label>
                        <input type='text' name='roomName' id='roomName' value={roomName} onChange={handleOnChangeRoomName} />
                    </div>
                    <button className="button-primary" onClick={handleCreateGame}>
                        Create Game
                    </button>
                </form>
            </div>
        </div>
    )
}
export default CreateGame