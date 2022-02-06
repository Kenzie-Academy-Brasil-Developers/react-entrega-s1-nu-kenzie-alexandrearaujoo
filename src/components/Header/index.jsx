import './styles.css'
import logo from './NuKenzie.png'
import Button from '../Button'

const Header = ({landingPage}) => {

    return (
        <header>
            <div>
                <img src={logo} alt="Logo Nu Kenzie" />
            </div>
            <Button className='btn_inicio' onClick={landingPage}> Inicio </Button>
        </header>
    )
}

export default Header