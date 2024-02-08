import './App.css';
import Theheader from './components/theheader/Theheader';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePageComponent from '../src/pages/homePageComponent/HomePageComponent';
import TariffPageComponent from '../src/pages/tariffPageComponent/TariffPageComponent';
import FaqPageComponent from '../src/pages/faqPageComponent/FaqPageComponemt';
import Thefooter from '../src/components/thefooter/Thefooter';
import AuthPageComponent from '../src/pages/authPageComponent/AuthPageComponent';
import SearchPageComponent from '../src/pages/searchPageComponent/SearchPageComponent';
import { store, persistor } from '../src/redux/store/store';
import { PersistGate } from 'redux-persist/es/integration/react';


function App() {
    return (
        <div className="app">
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Theheader />
                <main className="main">
                    <Routes>
                        <Route path='/' element={<HomePageComponent />} />
                        <Route path='/rate' element={<TariffPageComponent />} />
                        <Route path='/faq' element={<FaqPageComponent />} />
                        <Route path='/auth' element={<AuthPageComponent />} />
                        <Route path='/search' element={<SearchPageComponent />} />
                    </Routes>
                </main>
                <Thefooter />
            </PersistGate>    
            </Provider>
        </div>
    );
}

export default App;
