import './styles.css'
import logo from './NuKenzie.png'
import Button from '../Button'

const Header = () => {

    return (
        <header>
            <div>
                <img src={logo} alt="Logo Nu Kenzie" />
            </div>
            <Button className='btn_inicio'> Inicio </Button>
        </header>
    )
}

export default Header