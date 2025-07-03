import './index.css'
import qualify from './quali.json'
import ge from '../../assets/images/GE.jpg'
import jp from '../../assets/images/JP.jpg'
import ss from '../../assets/images/SS.jpg'
import an from '../../assets/images/angular.jpg'
import aw from '../../assets/images/aws.jpg'
import gh from '../../assets/images/github.jpg'
import ja from '../../assets/images/java.jpg'
import no from '../../assets/images/nodejs.jpg'

let arr = [ge, jp, ss, no, aw, an, gh, ja]

const Qualifications = () => {
        return (
            <div className='qualifications-container'>
                <h1 className='qualification-title'>Qualifications</h1>
                <div>
                    <div className='certificates'>               
                        {qualify.data.map((data, index) => 
                            <Display props={data} img={arr[index]} key={index} />
                        )}
                    </div>
                </div>
            </div>
        )
}

const Display = ({ props, img }) => {
    return (
        <div className='cert'>
            <img src={img} alt={props.alt} className='cert-img' />
            <div className='cert-content'>
                {props.name}
            </div>
            <p className='cert-text'>{props.descr}</p>
        </div>
    )
}

export default Qualifications;