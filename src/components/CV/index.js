import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Cv = () => {

    const Info = () => {
        return(
            <>
                While working on Companion I gained a plethora of skills and experiences. 
                I dealt with ethical and legal issues like user location, asynchronous storage, and permissions.
                <ul>
                    <li>Used React Native and Expo CLI to create a Website and Native Android Application.</li>
                    <li>Created a Cloud Database using Django and hosted on OpenShift.</li>
                    <li>Hosted website using FireBase.</li>
                </ul>
            </>
        )
    }

    return (
        <div className='cv-wrapper'>
            <div className='top-wrapper'>
                <FontAwesomeIcon icon={faGraduationCap} className='hat' /> 
                <h1 style={{color: '#fff'}}>CV</h1>
                <a href='./TarikhMukhtarCV.pdf' download><FontAwesomeIcon icon={faDownload} /></a>
            </div>
            <Section title={'About Me'} header={'Personal Profile'} content={'A Computer Science graduate, with a background as a Software Engineer experienced in coding Google Play apps, websites, and games. I am currently looking for a graduate scheme to help launch my career.'} />
            <Section title={'Technical Skills'} header={'Coding Languages'} content={'Python, Java, PHP, HTML, CSS, JavaScript, C, React JS'} />
            <Section header={'Technologies/Frameworks'} content={'Dataiku, Git, Django, OpenShift, Expo'} />
            <Section title={'Experience'} time={'2021'} header={'More Life Home | Software Engineer'} content={'More life home is an environmentally friendly focused non-profit organisation. I was responsible for the development and design of the company website; I also worked to optimise the website for maximum user experience and engagement. I steered decisions around the development of priorities and campaigns, as well as contributing to the websites blog posts.'} />
            <Section title={'Education'} time={'2019-2022'} header={'Queen Mary University of London'} content={'BSc Computer Science: First Class Honours'} />
            <Section title={'Projects'} header={'Companion'} content={<Info />} />
            <Section header={'FDM - Scheduling App'} content={"As part of my Software Engineering group project, I worked as part of a team to create a desktop app using Java and Java FX. The module involved several client meetings where we got the opportunity to give presentations, create prototypes, and gain insights into a career as a Software Engineer."} />
        </div>
    )
}

const Section = (props) => {
    return(
        <div className='section'>
            <div className='heading'>
                {props.title ? <div className='head-text'> {props.title} </div> : null}
            </div>
            <div className='content'>
                <div className='header'>
                    <div className='head'>
                        {props.header}
                    </div>
                    {props.time ? <div className='time'> {props.time} </div> : null}
                </div>
                <div className='text'>
                    {props.content}
               </div>
            </div>
        </div>
    )
}

export default Cv;