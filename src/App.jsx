import PlaceContentCenter from './components/PlaceContentCenter'
import Todo from './components/Todo'
import { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { useRef } from 'react'
import Input from './components/Input'

export default function App() {
    // const [tick, setTick] = useState(0)
    const inputRef = useRef(null)

    function handleClick() {
        inputRef.current.focus()
        // console.log(tick)
        // tick.current = tick.current + 1
        // const nextTick = tick + 1
        // setTick(nextTick)
        // console.log(nextTick)
        // console.log(tick.current);
    }

    return (
        <PlaceContentCenter>
            {/* <Todo /> */}
            <Card>
                <Card.Tittle>useRef Hook</Card.Tittle>
                <Card.Body>
                    <Input isFocused placeholder={'Email'} className={'border border-slate-400'}></Input>
                    <Input placeholder={'Password'} className={'border border-slate-400'}></Input>
                    <Button onClick={handleClick}>Tick</Button>
                </Card.Body>
                {/* <Card.Footer>You clicked {tick.current} times</Card.Footer> */}
            </Card>
        </PlaceContentCenter>
    )
}
