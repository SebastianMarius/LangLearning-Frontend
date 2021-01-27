import React from 'react';
import SentencesByWord from './SentencesByWord';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavbarFunction() {
    const [sentence, setSentence] = useState('');
    const [fetchu, setFetchu] = useState('');
    const [error, setError] = useState('');
    let history = useHistory();

    const FetchData = () => {
        fetch(`http://localhost:8080/words/showSentences?word=` + sentence)
            .then((response) => response.json())
            .then(setFetchu)
            .then(console.log(fetchu))
            .catch(function (error) {
                console.log('mergi');
                setError("We can't find the word in our database");
            });
        <Redirect from='/GiveMeSentences' to='/Home' />;
        history.push('/home');
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
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='Home'>LearningVocab</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='GiveMeSentences'>Random Sentences</Nav.Link>
                    <Nav.Link href='SendEmail'>Send us your thoughts</Nav.Link>
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

            {fetchu ? (
                <div>
                    <h1> {fetchu.korfirstSentence} </h1>
                    <h1>{fetchu.kosecondSentence}</h1>
                    <h1>{fetchu.kothirdSentence}</h1>
                    <h1>{fetchu.kowordTranslation}</h1>
                    <h1>{fetchu.kowordId}</h1>
                </div>
            ) : (
                // <h1> {fetchu.kosecondSentence}  </h1>

                <h1>{error}</h1>
            )}
        </>
    );
}

export default NavbarFunction;
