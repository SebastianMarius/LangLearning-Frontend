import React from 'react';
import SentencesByWord from './SentencesByWord';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavbarFunction(props) {
    const [sentence, setSentence] = useState('');
    // const [fetchu, setFetchu] = useState('');
    // const [cantFind, setCantFind] = useState('');
    let history = useHistory();

    const FetchData = () => {
        fetch(`http://localhost:8080/words/showSentences?word=` + sentence)
            .then((response) => response.json())
            .then(props.setFetchuu)
            .then(console.log(props.fetchu))
            .then(props.setCantFindd(''))
            .then((window.location.href = '/Home#yourAnchorTag'))

            .catch(function (error) {
                console.log('mergi');
                props.setCantFindd("We can't find the word in our database");

                window.location.href = '/Home#yourAnchorTag';
            });
        // history.push('/Home', 'yourAnchorTag');
        // window.location.href = '/Home#yourAnchorTag';
        // document.getElementById('yourAnchorTag').scrollIntoView();
    };
    const OnChangerr = (e) => {
        setSentence(e.target.value);
    };

    const HandleKeypress = (e) => {
        if (e.keyCode === 13) {
            FetchData();
        }
    };

    return (
        <>
            <div className='inlineu'>
                <Navbar bg='dark' variant='dark' fixed='top'>
                    <Navbar.Brand href='Home'>LearningVocab</Navbar.Brand>
                    <Nav className='mr-auto'>
                        <Nav.Link href='GiveMeSentences'>
                            Random Sentences
                        </Nav.Link>
                        <Nav.Link href='SendEmail'>
                            Send us your thoughts
                        </Nav.Link>
                        <Nav.Link href='SearchByWord'>Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type='text'
                            placeholder='Search'
                            className='mr-sm-2'
                            onChange={OnChangerr}
                            onKeyDown={HandleKeypress}
                        />
                        <Button variant='outline-info' onClick={FetchData}>
                            Search
                        </Button>
                    </Form>
                </Navbar>
            </div>
        </>
    );
}

function NavBarSearchSentences(props) {
    return (
        <>
            {props.fetchu ? (
                <div>
                    <div className='WordsHeader'>
                        <div>Korean word: {props.fetchu.koword}</div>
                        <div>
                            English translation:{' '}
                            {props.fetchu.kowordTranslation}
                        </div>
                    </div>
                    <div className='KoreanSentences'>
                        <div>
                            {' '}
                            First sentence: {props.fetchu.korfirstSentence}{' '}
                        </div>
                        <div>
                            {' '}
                            Second sentence: {props.fetchu.kosecondSentence}
                        </div>
                        <div>
                            Third sentence: {props.fetchu.kothirdSentence}
                        </div>

                        {/* <h1>{props.fetchu}</h1> */}
                    </div>
                </div>
            ) : (
                // <h1> {fetchu.kosecondSentence}  </h1>

                <div>
                    <h1 className='someSpace'>{props.cantFind}</h1>
                    {console.log('NU EXISTA FETCH')}
                </div>
            )}
        </>
    );
}

export { NavBarSearchSentences };
