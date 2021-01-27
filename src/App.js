import './App.css';

import { useState, useEffect } from 'react';

import NavbarFunction from './pages/NavBarAndSearchSentence';
import ShowSentenceByWord from '../src/pages/SentencesByWord';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowRandomSentences from './pages/RandomSentences';
import SendEmail from './pages/SendEmail';
import HomePage from '../src/pages/Home';

import { Nav } from 'react-bootstrap';

function MyControlledInput() {}

function App(props) {
    return (
        // <div>
        //     <MyControlledInput />
        //     <HomePage />
        // </div>

        <Router>
            <div className='App'>
                <NavbarFunction />
                <Route
                    path='/SearchByWord'
                    component={ShowSentenceByWord}
                    exact
                />
                <Route
                    path='/GiveMeSentences'
                    component={ShowRandomSentences}
                    exact
                />
                <Route path='/SendEmail' component={SendEmail} exact />
                <Route path='/Home' component={HomePage} exact />
            </div>
        </Router>
    );
}
export default App;
