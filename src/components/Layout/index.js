import Header from '../Header';
import Footer from '../Footer';
import './index.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Header />
            <div className='page'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout