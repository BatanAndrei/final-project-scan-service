import './App.css';
import Theheader from './components/theheader/Theheader';
import { Routes, Route } from 'react-router-dom';
import HomePageComponent from '../src/pages/homePageComponent/HomePageComponent';
import TariffPageComponent from '../src/pages/tariffPageComponent/TariffPageComponent';
import FaqPageComponent from '../src/pages/faqPageComponent/FaqPageComponemt';
import Thefooter from '../src/components/thefooter/Thefooter';
import AuthPageComponent from '../src/pages/authPageComponent/AuthPageComponent';

function App() {
    return (
        <div className="app">
            <Theheader />
            <main className="main">
                <Routes>
                    <Route path='/' element={<HomePageComponent />} />
                    <Route path='/rate' element={<TariffPageComponent />} />
                    <Route path='/faq' element={<FaqPageComponent />} />
                    <Route path='/auth' element={<AuthPageComponent />} />
                </Routes>
            </main>
            <Thefooter />
        </div>
    );
}

export default App;
