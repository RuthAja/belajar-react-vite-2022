import PlaceContentCenter from './components/PlaceContentCenter'
import { useEffect, useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'

export default function App() {
    const [name, setName] = useState('')
    const [online, setOnline] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(window.scroll)

    // selalu di render setiap ada perubahan
    useEffect(() => {
        // console.log('selalu di render!!!')
    })

    // di render atau di panggil hanya di saat pertama saja
    useEffect(() => {
        // console.log('first render')
    }, [])

    //ada perubahan jika di Trigger/ Picu
    useEffect(() => {
        // console.log(`I am now ${online ? 'online' : 'offline'}`)
    }, [online])

    // componenWillUnmount | apa yang akan dilakuakn kalau mau di render 
    function updateScrollPosition() {
        const windowScrolling = window.scrollY
        console.log(`window scroll position: ${windowScrolling}`)
        setScrollPosition(windowScrolling)
    }
    // function onKeyDown(e) {

    // }
    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition)
        // window.addEventListener('keydown', function (e) {
        //     console.log(e.code)
        // })
        // window.addEventListener('keydown', onKeyDown)
        // return () => {
        //     window.removeEventListener('keydown', onKeyDown)
        // }
    },[])

    return (
        <div className={'h-[4000px]'}>
            <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Button onClick={() => setOnline((online) => !online)}> Set Online</Button>
        </div>
    )
}
