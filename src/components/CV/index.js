import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Cv = () => {

    return (
        <div className='cv-wrapper'>
            <h1>CV</h1>
            <Section title={'About Me'} header={'Personal Profile'} content={'A Computer Science graduate, with a background as a Software Engineer experienced in coding Google Play apps, websites, and games. I am currently looking for a graduate scheme to help launch my career.'} />
            <Section title={'Technical Skills'} header={'Coding Languages'} content={'Python, Java, PHP, HTML, CSS, JavaScript, C, React JS'} />
            <Section header={'Technologies/Frameworks'} content={'Dataiku, Git, Django, OpenShift, Expo'} />
            <Section title={'Experience'} time={'2021'} header={'More Life Home | Software Engineer'} content={'More life home is an environmentally friendly focused non-profit organisation. I was responsible for the development and design of the company website; I also worked to optimise the website for maximum user experience and engagement. I steered decisions around the development of priorities and campaigns, as well as contributing to the websites blog posts.'} />
            <Section title={'Education'} time={'2019-2022'} header={'Queen Mary University of London'} content={'BSc Computer Science: First Class Honours'} />
            <Section title={'Projects'} header={'Companion'} content={'I used React Native and Expo CLI to create a Google Play app, while working on Companion I gained a plethora of skills and experiences. I dealt with ethical and legal issues like user location, asynchronous storage, and permissions. I also gained valuable insights to aspects of software development like app speed, loading times and unexpected user behaviour. Using the React Native framework allowed me to further my knowledge of JavaScript and CSS.'} />
            <Section header={'FDM - Scheduling App'} content={"As part of my Software Engineering group project, I worked as part of a team to create a desktop app using Java and Java FX. The module involved several client meetings where we got the opportunity to present our research, prototype, and gain insights into a career in software engineering. As part of our assignment, we were also tasked with creating UML diagrams, producing functional and non-functional requirements, and using design patterns like the singleton pattern and model-view controller. One of the most valuable skills I gained through this was working as part of a team – discussing ideas, valuing others' opinions, and learning as well as helping others."} />
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
                        <FontAwesomeIcon className='circle' icon={faCircle} />
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