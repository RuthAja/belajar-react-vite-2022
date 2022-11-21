import Button from './components/Button'
import Card from './components/Card'

function App() {
    // const type = 'submit'
    // const onClick = () => console.log('hai ion')
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            {/* <div className='flex gap-x-2'> */}
            {/* <Button {...{ type, onClick }} className='bg-blue-600'>
                    <IconBrandFacebook />
                    Daftar
                </Button>
                <Button type='button' onClick={() => console.log('Hai Ruth')} className='bg-pink-500'>
                    <IconBrandTwitter />
                    Masuk
                </Button>
                <Button type='reset' onClick={() => console.log('Hai Ruth')} className='bg-black'>
                    <IconBrandGithub />
                    Masuk
                </Button> */}
            <div className='max-w-md w-full  '>
                <Card>
                    <Card.Tittle>Hai Ion</Card.Tittle>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea, at eveniet minus illo atque dolore quae ratione iste
                        consequatur, cum exercitationem nobis eaque. Dolor incidunt reiciendis omnis consequatur quis.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Daftar</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
        // </div>
    )
}

export default App
