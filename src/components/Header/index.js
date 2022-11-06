import './index.css';
import { NavLink } from 'react-router-dom'
const Header = () => {
    return(
        <div className='top'> 
            <h2 className='logo'>Portfolio.</h2>

            <nav>
                <NavLink exact="true" activeclassname="active" className="link" to="/">
                    About
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link" to="/cv">
                    CV
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link" to="/portfolio">
                    Projects
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link" to="/contact">
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}
export default Header;