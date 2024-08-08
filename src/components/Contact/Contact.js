import './contact.css'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className="container-contact" id="contact">
            <div>
                <h2>
                    Contact
                </h2>
            </div> 
            <div>
                <p className="access-info">Email:  yomtov.rf@gmail.com</p>
                <p className="access-info">Mobile: 438-372-8433</p>
            </div>
            <div>
                <h1>Social Media Links</h1>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com"><i><FaFacebook /></i></a>
                    <a href="https://www.linkedin.com"><i><FaLinkedin /></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;