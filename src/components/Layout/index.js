import Header from '../Header';
import Footer from '../Footer';
import './index.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Background />
            <div className='app_main'>
                <Outlet />
            <Footer />
            </div>
            <div className='app_header'>
                <Header />
            </div>
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
            <Line rotation={'90deg'} padU={'3px'} padL={'-20vh'} delay={'15s'}  />
            <Line padU={'20vh'} delay={'2s'}  />
            <Line rotation={'45deg'} delay={'7s'}  />
            <Line rotation={'90deg'} padU={'3px'} padL={'40vh'} delay={'11s'}  />
        </div>
    )
}

export default Layout