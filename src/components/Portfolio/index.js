import './index.css'
import portfolioData from "./data.json";

const Portfolio = () => {
        return (
            <div className='site-container'>
                <h1 className='page-title'>Projects</h1>
                <div className='portfolio-container'>
                    {
                        portfolioData.portfolio.map((port, index) => {
                            return(
                                <a className='portfolio-card' href={port.url} key={index} target="_blank" rel="noopener noreferrer">
                                    <img src={port.cover} className="portfolio-image" alt="img" />
                                    <div className='card-content'>
                                        <p className='card-title'>{port.title}</p>
                                        <p className='card-description'>{port.description}</p>
                                        <div className='card-languages'>
                                            {port.language.map((code, index) => {
                                                return <p className='card-language' key={index}>{code}</p>
                                            })}
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default Portfolio;