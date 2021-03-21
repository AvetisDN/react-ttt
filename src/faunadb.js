import faunadb from 'faunadb'
import {nanoid} from 'nanoid'

const q = faunadb.query

const secret = process.env.FAUNADB_SERVER_KEY ? process.env.FAUNADB_SERVER_KEY : process.env.REACT_APP_FAUNADB_CLIENT_KEY
const client = new faunadb.Client({secret})

const getRoom = (roomID) => client.query( q.Get(q.Match(q.Index('room_by_id'), roomID)) )
const checkRoomExist = (roomID) => {
    return getRoom(roomID)
        .then((res) => {
            return client.query( q.Exists(q.Ref(q.Collection('Rooms'), res.ref.value.id)) )
        })
}
const createRoom = (userID, profilePic) => {
    const id = nanoid()
    const cells = JSON.stringify(Array(9).fill(null))
    return client.query(
        q.Create(
            q.Collection('Rooms'),
            {
                data: {
                    id,
                    cells,
                    players: [{id: userID, profilePic}]
                }
            }
        )
    )
}
const updateBoard = (roomID, cells) => {
    return getRoom(roomID)
    .then((res) => {
        return client.query(
            q.Update(res.ref, {
                data: {
                    cells,
                }
            })
        ).then((res) => res.data.cells)
    })
}
const updateTeam = (roomID, team, userID) => {
    return getRoom(roomID)
    .then((res) => {
        return client.query(
            q.Update(res.ref, {
                data: {
                    [team]: userID
                }
            })
        ).then((res) => res.data)
    })
}

export {getRoom,checkRoomExist,createRoom,updateBoard,updateTeam}