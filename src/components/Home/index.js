import './index.css'
import Skills from './skills';
import About from './about';
import Experience from './experiences';

const Home = () => {
    return(
        <div>     
            <div className="intro home-page container">
                <Background />
                <Intro />
            </div>

            <About />
            <Skills />
            <Experience />
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

const Background = () => {
    return(
        <div>
            <Line rotation={'90deg'} padU={'3px'} padL={'20vh'} delay={'15s'}  />
            <Line padU={'20vh'} delay={'2s'}  />
            <Line rotation={'45deg'} delay={'7s'}  />
        </div>
    )
}

const Intro = () => {
    const WelcomeMessage = ["I'm","Tarikh","Mukhtar"]
    return(
        <>
            <div className='grid'>
                <>
                    <h1 className='text-animate'>Hi,</h1><br />
                    {
                        WelcomeMessage.map((word, index) => {
                            return <h1 key={index} className='text-animate'>{word}</h1>
                        })
                    }
                </>
                <div className='title'>
                    <div className='wrapper'>
                        <div className='item'>Software Engineer</div>
                        <div className='item'>UI/UX Design</div>
                        <div className='item'>Web Developer</div>
                    </div>
                </div>
                <a href="/contact" className='flat-button'>Contact Me</a>
            </div>
                
            <div className='grid'>
                <img src={require('./me.jpg')} className='me' alt='Me' />
            </div>
        </>
    )
}

export default Home