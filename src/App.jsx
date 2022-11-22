import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getUsers() {
            setLoading(true)
            try {
                // by default await axios get('link')
                const { data } = await axios('http://jsonplaceholder.typicode.com/users')
                setUsers(data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(false)
            }
        }
        // then(r => r) untuk membersihkan
        getUsers().then((r) => r)
    }, [])

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Tittle>Users: {users.length}</Card.Tittle>
                <Card.Body>
                    {loading ? (
                        <div>Loading....</div>
                    ) : (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>
                                    {user.name} ({user.username})
                                </li>
                            ))}
                        </ol>
                    )}
                    {/* {users.length ? (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>
                                    {user.name} ({user.username})
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div> Tidak ada User</div>
                    )} */}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    )
}
