import './App.css';

import { useState, useEffect, Fragment } from 'react';

import NavbarFunction, {
    NavBarSearchSentences,
} from './pages/NavBarAndSearchSentence';
import ShowSentenceByWord from '../src/pages/SentencesByWord';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ShowRandomSentences from './pages/RandomSentences';
import SendEmail from './pages/SendEmail';
import HomePage from '../src/pages/Home';
import Footer from '../src/pages/Footer';

function App(props) {
    const [fetchu, setFetchu] = useState('');
    const [cantFind, setCantFind] = useState('');

    useEffect(() => {
        if (fetchu) {
            setFetchu('');
        }
    }, [cantFind]);

    return (
        // <div>
        //     <MyControlledInput />
        //     <HomePage />
        // </div>

        <Router>
            <div className='App'>
                <NavbarFunction
                    setFetchuu={setFetchu}
                    setCantFindd={setCantFind}
                    fetchu={fetchu}
                />

                <Route exact path='/'>
                    <Redirect to='/Home' />{' '}
                </Route>

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
                <Route
                    path='/Home'
                    render={(props) => (
                        <Fragment>
                            <HomePage />
                            <NavBarSearchSentences
                                fetchu={fetchu}
                                cantFind={cantFind}
                            />
                        </Fragment>
                    )}
                    exact
                />
                <Footer />
            </div>
        </Router>
    );
}
export default App;
