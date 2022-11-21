import PlaceContentCenter from './components/PlaceContentCenter'
import { useEffect, useState } from 'react'
import Input from './components/Input'

export default function App() {
    const [name, setName] = useState('')

    // selalu di render setiap ada perubahan
    useEffect(() => {
        console.log('selalu di render!!!')
    })

    // di render atau di panggil hanya di saat pertama saja
    useEffect(() => {
        console.log('first render')
    },[])

    return (
        <PlaceContentCenter>
            <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
        </PlaceContentCenter>
    )
}
