import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import cv_data from './cv.json'

const Cv = () => {

    return (
        <div className='cv-wrapper'>
            <div className='top-wrapper'>
                <FontAwesomeIcon icon={faGraduationCap} className='hat' /> 
                <h1 className='page-title' style={{color: '#fff'}}>CV</h1>
                <a href='./TarikhMukhtarCV.pdf' download><FontAwesomeIcon icon={faDownload} /></a>
            </div>
            {
                cv_data.data.map((data, index) => {
                    return <Section props={data} key={index} />
                })
            }
        </div>
    )
}

const Section = ({ props }) => {

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
               {props.technical ? <div className='card-languages'>
                    {props.technical.map((code, index) => {
                        return <p className='technical' key={index}>{code}</p>
                    })}
                </div>: null}
            </div>
        </div>
    )
}

export default Cv;