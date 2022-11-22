import axios from 'axios'
import { useEffect,useState } from 'react'
export default function useNoris(name) {
    const [noris, setNoris] = useState('')

    useEffect(() => {
        const getNoris = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`)
            // console.log(data)
            setNoris(data)
        }

        getNoris().then((r) => r)
    }, [name])

    return noris
}
