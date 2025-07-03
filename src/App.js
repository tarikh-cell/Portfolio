import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Qualifications from './components/Qualifications';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/qualifications" element={<Qualifications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;