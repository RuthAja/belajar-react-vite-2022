import PlaceContentCenter from './components/PlaceContentCenter'
import { useEffect, useState } from 'react'

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('http://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
        }
    // then(r => r) untuk membersihkan
    getUsers().then((r) => r)
    }, [])

    return <PlaceContentCenter></PlaceContentCenter>
}
