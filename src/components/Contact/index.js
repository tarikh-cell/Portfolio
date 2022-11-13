import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    return(
        <div>
            <br></br>
            <h1>Contact Me</h1>
            <div className='contact-wrapper'>
                <div className='contact-card'>
                    <FontAwesomeIcon icon={faPhone} className='contact-circle' />
                    <p><p className='cool-text'>Phone:</p><br/> +447435425871</p>
                </div>
                <div className='contact-card'>
                    <FontAwesomeIcon icon={faEnvelope} className='contact-circle' />
                    <p><p className='cool-text'>Email:</p><br/> tarikhmukhtar@gmail.com</p>
                </div>
                <div className='contact-card'>
                    <FontAwesomeIcon icon={faGithub} className='contact-circle' />
                    <p><p className='cool-text'>Github:</p><br/> <a href='https://github.com/tarikh-cell'>tarikh-cell</a></p>
                </div>
                <div className='contact-card'>
                    <FontAwesomeIcon icon={faLinkedin} className='contact-circle' />
                    <p><p className='cool-text'>LinkedIn: </p><br/><a href='https://www.linkedin.com/in/tarikh-mukhtar-9baa7720a/'>Tarikh Mukhtar</a></p>
                </div>
                <div className='contact-card'>
                    <FontAwesomeIcon icon={faGooglePlay} className='contact-circle' />
                    <p><p className='cool-text'>GooglePlay: </p><br/><a href='https://play.google.com/store/apps/developer?id=Tarikh+Mukhtar'>Tarikh Mukhtar</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;