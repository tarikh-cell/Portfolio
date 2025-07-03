import './index.css';
import { NavLink } from 'react-router-dom'
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import linkedin from '../../assets/images/linkedin.png' 
import play from '../../assets/images/play.png'
const Header = () => {
    return(
        <div className='top'> 
            <Intro />
            <h2 className='logo'>Software Engineer</h2>
            

            <nav>
                <NavLink exact="true" activeclassname="active" className="link" to="/">
                    CV
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link" to="/portfolio">
                    Projects
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link" to="/qualifications">
                    Qualifications
                </NavLink>
            </nav>

            <div className='link-list-icon'>
                <a href='https://github.com/tarikh-cell' target="_blank" rel="noopener noreferrer"><img src={github} alt='github link' className='link-icon' /></a>
                <a href="mailto:tarikhmukhtar@gmail.com"><img src={gmail} alt='gmail link' className='link-icon' /></a>
                <a href='https://www.linkedin.com/in/tarikh-mukhtar-9baa7720a/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin link' className='link-icon' /></a>
                <a href='https://play.google.com/store/apps/developer?id=Tarikh+Mukhtar' target="_blank" rel="noopener noreferrer"><img src={play} alt='google play link' className='link-icon' /></a>
            </div>
        </div>
    )
}

const Intro = () => {
    const WelcomeMessage = ["Tarikh","Mukhtar"]
    return(
        <>
            <div className='grid'>
                <>
                    {
                        WelcomeMessage.map((word, index) => {
                            return <h1 key={index} className='text-animate'>{word}</h1>
                        })
                    }
                </>
            </div>
        </>
    )
}
export default Header;