import './index.css'
import langData from './languages.json'

const Skills = () => {

    return(
        <div className='container'>
            <h1>Skills & Experience</h1>
            <p>I've worked with a range of programming languages and frameworks</p>
            <div className='technologies'>               
                <div className='tech'>
                    {
                        langData.langs.map((lang, index) => {
                            return(
                                <div className='tech-item' key={index}>
                                    <img src={lang.cover} className='log' alt='lama' />
                                    <section>{lang.title}</section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills