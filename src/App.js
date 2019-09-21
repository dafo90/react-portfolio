import React from 'react';
import MainLayout from './components/MainLayout';
import Footer from './components/utils/Footer';
import Header from './components/utils/Header';

function App() {
    return (
        <React.Fragment>
            <Header />
            <MainLayout />
            <Footer />
        </React.Fragment>
    );
}

export default App;
