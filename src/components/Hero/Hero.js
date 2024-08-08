import RicardoImage from '../../assets/RicardoFerreira.jpg';
import './hero.css';


const Hero = () => {

    return (
        <div className="container" id="hero">
            <div className="hero-container">
                <div className="hero-profile">
                    <img className="hero-img" alt='Ricardo Ferreira Ferreira' src={RicardoImage} />
                    <div className="hero-content">
                        <div className="hero-headline">
                            Ricardo Ferreira Ferreira
                        </div>
                        <div className="hero-text">
                            Software Engineer
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;