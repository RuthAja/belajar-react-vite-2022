import { IconBrandGithub } from '@tabler/icons'
import Card from './components/Card'
import PlaceContentCenter from './components/PlaceContentCenter'
import Button from './components/Button'
import Input from './components/Input'
import Label from './components/Label'
import { useState } from 'react'

export default function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function submit(event) {
        event.preventDefault()

        console.log(form)
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Tittle>Daftar untuk membuat akun baru</Card.Tittle>
                <form onSubmit={submit}>
                    <Card.Body>
                        <div className={'mb-5 border rounded-lg p-4'}>
                            <p>Name: {form.name || 'nama'}</p>
                            <p>Email: {form.email || 'email'}</p>
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='name' value={'Name'}>
                                Nama
                            </Label>
                            {/* event adalh singkatan dari e yang biasa digunakan untuk lebih cepat saja */}
                            <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='email' value={'Email'}>
                                Email
                            </Label>
                            <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button>
                            <IconBrandGithub /> Daftar
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    )
}
