import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            try {
            const { data } = await axios('http://jsonplaceholder.typicode.com/users')
            setUsers(data)
            } catch (error) {
                console.log(error.message);
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
                    {users.length ? (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>{user.name} ({user.username})</li>
                            ))}
                        </ol>
                    ) : (
                        <div> Tidak ada User</div>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    )
}
