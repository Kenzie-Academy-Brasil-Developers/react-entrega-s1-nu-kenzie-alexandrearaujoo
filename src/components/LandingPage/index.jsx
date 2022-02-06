import Button from "../Button"
import './styles.css'
import logoPage from './landingPage.svg'
import logoNuKenzie from './NuKenzie.svg'


const LandingPage = ({startSection}) => {

    return (
        <div className="sectionLandingPage">
            <section className="sectionStart">
                <figure>
                    <img src={logoNuKenzie} alt="" />
                </figure>
                <h2 className="TitleLanding">Centralize o controle das suas financias</h2>
                <span className="spanLanding">de forma rapida e segura</span>
                <Button onClick={startSection} className="startSection">Iniciar</Button>
            </section>
            <figure className="LogoPage">
                <img src={logoPage} alt="" />
            </figure>
        </div>    
    )
}

export default LandingPage