import React from 'react';
import PortfolioAppBar from './components/PortfolioAppBar';
import PortfolioMainLayout from './components/PortfolioMainLayout';

function App() {
    return (
        <React.Fragment>
            <PortfolioAppBar />
            <PortfolioMainLayout />
        </React.Fragment>
    );
}

export default App;
