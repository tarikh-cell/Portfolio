import './index.css';
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import linkedin from '../../assets/images/linkedin.png' 
import play from '../../assets/images/play.png'
const Footer = () => {
    return(
        <div className='footer'> 
            <div className='footer-list'>
                <a href='https://github.com/tarikh-cell' target="_blank" rel="noopener noreferrer"><img src={github} alt='github link' className='link-icon' /></a>
                <a href="mailto:tarikhmukhtar@gmail.com"><img src={gmail} alt='gmail link' className='link-icon' /></a>
                <a href='https://www.linkedin.com/in/tarikh-mukhtar-9baa7720a/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin link' className='link-icon' /></a>
                <a href='https://play.google.com/store/apps/developer?id=Tarikh+Mukhtar' target="_blank" rel="noopener noreferrer"><img src={play} alt='google play link' className='link-icon' /></a>
            </div>
        </div>
    )
}


export default Footer;