import './index.css'
import ge from '../../assets/images/GE.jpg'
import jp from '../../assets/images/JP.jpg'
import ss from '../../assets/images/SS.jpg'

const Experience = () => {

    return(
        <div className='container'>
            <h1 className='section-title'>Experiences</h1>
            <div>
                <div className='certificates'>               
                    <div className='cert'>
                        <img src={ge} alt='GE-Certificate' className='cert-img' />
                        <div className='cert-content'>
                            G.E Explorer
                        </div>
                        <p className='cert-text'>Used data engineering to combine full-flight engine data and airport location data to create a data lake.</p>
                    </div>
                    <div className='cert'>
                        <img src={jp} alt='JP-Certificate' className='cert-img' />
                        <div className='cert-content'>
                            J.P Morgan
                        </div>
                        <p className='cert-text'>Interfaced with a stock price data feed and set up a system for analysing data.</p>
                    </div>
                    <div className='cert'>
                        <img src={ss} alt='SS-Certificate' className='cert-img' />
                        <div className='cert-content'>
                            Sky Scanner
                        </div>
                        <p className='cert-text'>Developed a fully-functional front-end system using Skyscanner’s Backpack React library.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience