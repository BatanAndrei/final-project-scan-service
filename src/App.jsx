import './App.css';
import Theheader from './components/theheader/Theheader';
import { Routes, Route, Link } from 'react-router-dom';
import HomePageComponent from '../src/pages/homePageComponent/HomePageComponent';
import TariffPageComponent from '../src/pages/tariffPageComponent/TariffPageComponent';
import FaqPageComponent from '../src/pages/faqPageComponent/FaqPageComponemt';

function App() {
    return (
        <div className="app">
            <Theheader />
            <main className="main">
                <Routes>
                    <Route path='/' element={<HomePageComponent />} />
                    <Route path='/rate' element={<TariffPageComponent />} />
                    <Route path='/faq' element={<FaqPageComponent />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
