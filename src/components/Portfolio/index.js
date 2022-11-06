import './index.css'
import portfolioData from "./data.json";
import clock from '../../assets/images/clock.png'

const Portfolio = () => {
        return (
            <div className='site-container'>
                <h1 className='page-title'>Projects</h1>
                <div className='portfolio-container'>
                    {
                        portfolioData.portfolio.map((port, index) => {
                            return(
                                <div className='portfolio-card' key={index}>
                                    <img src={port.cover} className="portfolio-image" alt="img" />
                                    <div className='card-content'>
                                        <div className='card-date'>
                                            <img src={clock} style={{width: 14, height: 14, alignSelf: 'center', paddingRight: 5}} alt='clock' /> 
                                            <p style={{paddingRight: 10, alignSelf: 'center', margin: 0}}>24 Aug, 2022</p> 
                                            <p style={{color: 'gray', fontSize: 20, alignSelf: 'center', paddingRight: 10, margin: 0}}>•</p> 
                                            <p style={{color: '#fff', alignSelf: 'center', fontWeight: 'normal', margin: 0}}>{port.language}</p>
                                        </div>
                                        <p className='card-title'>{port.title}</p>
                                        <p className='card-description'>{port.description}</p>
                                    </div>
                                    <a className='btn' href={port.url}>GitHub</a>
                                    <a className='btn' href={port.code}>PreView</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default Portfolio;