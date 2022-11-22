import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import Input from './components/Input'
import useNoris from './hooks/useNoris'
import { useState } from 'react'
import { useRef } from 'react'
import Button from './components/Button'

export default function App() {
    const nameRef = useRef()
    const [name, setName] = useState('Ion')
    //this is hook | memiliki aturan menggunakan nama awalan 'use' baru nama
    const noris = useNoris(name)

    const generateNoris = (e) => {
        e.preventDefault()
        setName(nameRef.current.value)
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Tittle>Huglaa Noris</Card.Tittle>
                <Card.Body>
                    <p className={'mb-4'}>{noris.value}</p>
                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateNoris}> Enter</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    )
}
