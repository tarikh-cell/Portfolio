import './index.css'
import code from '../../assets/images/code.png'

const About = () => {

    return(
        <div className='container'>
            <h1 className='section-title'>About Me</h1>  
                <div className='about-text'> 
                    <p>A BSc Computer Science graduate from Queen Mary University of London, with a background as a Software Engineer experienced in coding Google Play apps, websites, and 
games.  I have a genuine passion for technology and in general, problem solving. I am currently looking for a graduate scheme to help launch my career.</p>
                    <img src={require('../../assets/images/QM.png')} className='qm-logo' alt='Queen Mary' />
                </div>
        </div>
    )
}

export default About