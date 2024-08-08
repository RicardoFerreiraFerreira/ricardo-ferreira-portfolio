import RicardoAligator from '../../assets/RicardoAligator.jpg';
import './about.css'

const About = () => {
    
    return (
        <div className="container" id="about">
            <div>
                <h1>
                    About Me
                </h1>
            </div>
            <div className="about-info-container">
                <p className="about-info">
                    He has participated in multiple large-scale projects and collaborated with international teams based in Argentina, Brazil,
                    Canada, United States, and Japan.<br /><br />
                    He is passionate about IT, dynamic, and proactive, and easily adapts to any situation and recognized for producing quality work.
                </p>
                <div className="hero-container">
                    <div className="hero-profile">
                        <img className="hero-img" alt='Hobby' src={RicardoAligator} />
                    </div>
                </div>
            </div>
        </div>
    )
    /*return (
        <div id="about" className="container container-specific">
            <h1>About Me</h1>
            <div className="about-info">
                <p className="about-desc">sum dolor sit amet consectetur adipisicing elit. Excepturi suscipit quidem ullam voluptates repellendus explicabo placeat, expedita ratione saepe eaque dolorum sed deleniti, odit numquam, nostrum tempore quos corrupti rem.</p>
                <div className="body-container">
                    <div className="body-profile">
                        <img className="body-img" alt='avatar' src={ricardoAligator} />
                    </div>
                </div>
            </div>
        </div>
    )*/
}

export default About;