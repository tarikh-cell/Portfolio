import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return(
        <footer>
            {/* <table className='contact'>
                <tr><td>Call</td> <td>Email</td></tr>
                <tr><td>+4474535425871</td> <td>tarikhmukhtar@gmail.com</td></tr>
            </table> */}
            <section>
                While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.<br />
                Copyright 2022 © HS, Inc.<br /><br />
            </section>
            <nav>
                <a href="/">Privacy Policy</a> | <a href="/">Security</a> | <a href="/">Website Information</a> 
            </nav>
        </footer>
    )
}

export default Footer;