import './index.css'

const About = () => {

    return(
        <div className='container'>
            <h1 className='section-title'>About Me</h1>  
                <Draw />
                <img src={require('../../assets/images/QM.png')} className='qm-logo' alt='Queen Mary' />
        </div>
    )
}

const Draw = () => {
    return(
        <div className='draw-text'>
            <div style={{display: 'flex', padding: '1vh'}}>
                <div style={{border: '1px solid red', borderRadius: '50%', height: '1vh', width: '1vh', margin: '5px'}}></div>
                <div style={{border: '1px solid red', borderRadius: '50%', height: '1vh', width: '1vh', margin: '5px'}}></div>
                <div style={{border: '1px solid red', borderRadius: '50%', height: '1vh', width: '1vh', margin: '5px'}}></div>
            </div>
            <div style={{borderTop: '1px solid red', marginTop: '1vh'}}></div>
            <>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <code className='about-content'>
                        I am a Junior Software Engineer, with an interest in Web Development and UI/UX design. I have experience coding Android apps, Websites and Cloud databases.
                        I have a genuine passion for technology, and enjoy using logic and creativity to solve problems. I am currently looking for a graduate scheme to help launch my career.
                    </code>
                </div>
            </>
        </div>
    )
}

export default About