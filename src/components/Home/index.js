import './index.css'
import Skills from './skills';
import About from './about';

const Home = () => {
    const WelcomeMessage = ["I'm","Tarikh","Mukhtar"]
    
    return(
        <div>     
            <div className="intro home-page container">
                <Background />
                <div className='text-zone grid'>
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
                            <div className='item'>Java Developer</div>
                            <div className='item'>Database</div>
                        </div>
                    </div>
                    <a href="/contact" className='flat-button'>Contact Me</a>
                </div>
                
                <div className='grid'>
                </div>
            </div>

            <About />
            <Skills />
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
            <Line rotation={'90deg'} delay={'1s'}  />
            <Line delay={'15s'}  />
            <Line rotation={'45deg'} delay={'7s'}  />
        </div>
    )
}

export default Home