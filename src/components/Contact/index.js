import './index.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [word, setWord] = useState("Hi, I am Darth");
    const [col, setCol] = useState('black');
    const open = '<'
    const close = '/>'

    return(
        <div>
            {/* <Line rotation={'45deg'} padU={'10px'} delay={'3s'}  /> */}
            {/* <Line rotation={'90deg'} padL={'60vh'} delay={'4s'}  /> */}
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
            <p><p className='cool-text'>Github:</p><br/> <a href='http://www.google.com'>tarikh-cell</a></p>
            </div>
            <div className='contact-card'>
            <FontAwesomeIcon icon={faLinkedin} className='contact-circle' />
            <p><p className='cool-text'>LinkedIn: </p><br/><a href='http://www.google.com'>Tarikh Mukhtar</a></p>
            </div>
            <div className='contact-card'>
            <FontAwesomeIcon icon={faGooglePlay} className='contact-circle' />
            <p><p className='cool-text'>GooglePlay: </p><br/><a href='http://www.google.com'>Tarikh Mukhtar</a></p>
            </div>
            </div>
        </div>
    )
}

const Line = ({rotation, padL, padU, delay}) => {
    return(
        <div className='lines'>
                <div className='line' style={{rotate: rotation, marginLeft: padL, marginTop: padU}}>
                    <div className='streak' style={{animationDelay: delay}}></div>
                </div>  
        </div>
    )
}

export default Contact;