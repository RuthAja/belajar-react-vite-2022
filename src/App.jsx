import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import Button from './components/Button'
import { useRef } from 'react'
import Input from './components/Input'

export default function App() {
    const inputRef = useRef(null)

    function handleClick() {
        inputRef.current.focus()
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Tittle>useRef Hook</Card.Tittle>
                <Card.Body>
                    <Input isFocused placeholder={'Email'} className={'border border-slate-400'}></Input>
                    <Input placeholder={'Password'} className={'border border-slate-400'}></Input>
                    <Button onClick={handleClick}>Tick</Button>
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    )
}
