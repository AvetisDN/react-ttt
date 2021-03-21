import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {checkRoomExist} from "../faunadb";

const JoinGame = () => {
    const history = useHistory()
    const [roomID, setRoomID] = useState('')

    const handleOnChangeRoomID = (e) => setRoomID(e.target.value)

    const handleJoinGame = (e) => {
        e.preventDefault()

        if(roomID.trim() === '') return

        checkRoomExist(roomID)
            .then((res) => {
                if (res) history.push(`/room/${roomID}`)
                else alert("Room doesn't exist")
            })

    }

    return (
        <div className='join-game-page'>
            <div className="form-container">
                <form>
                    <div>
                        <label htmlFor="roomID">Room ID:</label>
                        <input type='text' name='roomID' id='roomID' value={roomID} onChange={handleOnChangeRoomID} />
                    </div>
                    <button className="button-primary" onClick={handleJoinGame}>
                        Join Room
                    </button>
                </form>
            </div>
        </div>
    )

}

export default JoinGame