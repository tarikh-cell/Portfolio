import './index.css'
import code from '../../assets/images/code.png'

const About = () => {

    return(
        <div className='container'>
            <h1 className='section-title'>About Me</h1>  
            <div className='outer-grid'>
                <div className='grid about'>
                    <img src={code} className='logs' alt='Code' />
                </div>
                <div className='grid about-text'> 
                    <p>A BSc Computer Science graduate from Queen Mary University of London, with a background as a Software Engineer experienced in coding Google Play apps, websites, and 
games. I am currently looking for a graduate scheme to help launch my career.</p>
                    <img src={require('../../assets/images/QM.png')} className='logoq' alt='Queen Mary' />
                </div>
            </div>
        </div>
    )
}

export default About