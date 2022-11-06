import { Link } from 'react-router-dom'
import './index.css'
import Skills from './skills';
import About from './about';

const Home = () => {

    const WelcomeMessage = ["I'm","Tarikh","Mukhtar"]
    
    return(
        <div className="container home-page">
            <div className="intro">
                <div className='text-zone grid'>
                    <h1 className='text-animate'>Hi,</h1><br />
                    {
                        WelcomeMessage.map((word, index) => {
                            return <h1 key={index} className='text-animate'>{word}</h1>
                        })
                    }
                    <div className='title'>
                        <div className='wrapper'>
                            <div className='item'>Software Engineer</div>
                            <div className='item'>UI/UX Design</div>
                            <div className='item'>Web Developer</div>
                            <div className='item'>Java Developer</div>
                            <div className='item'>Database</div>
                        </div>
                    </div>
                    <button><Link to="/contact" className='flat-button'>Contact Me</Link></button>
                </div>
                
                <div className='grid'>
                </div>
            </div>
            
            <About />
            <Skills />
        </div>
    )
}

export default Home