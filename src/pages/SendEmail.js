import React from 'react';
import { useState } from 'react';
import { MDBInput } from 'mdbreact';
import pozaAbout from '../imagesRandomSentence/feedback.jpg';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function SendEmail() {
    const [message, setmessage] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);

    const OnChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const OnChangeText = (e) => {
        setmessage(e.target.value);
    };

    const FetchingFeedback = () => {
        fetch(
            'http://localhost:8080/sendemail?email=' +
                email +
                '&textul=' +
                message
        );

        setLoader(true);

        setTimeout(() => {
            alert('Your message was sent with succesfull! :)');
        }, 5000);

        setTimeout(() => {
            setLoader(false);
        }, 4000);
    };

    return (
        <div>
            <div class='oppinion'>
                <span>Y</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
                <span></span>
                <span>O</span>

                <span>P</span>
                <span>I</span>
                <span>N</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>

                <span class='letter'></span>
                <span>M</span>
                <span>A</span>
                <span>T</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
            </div>

            <div className='AboutFeedback'>
                <section
                    id='about'
                    className='aboutFeedbackEmail  border border-white'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6' data-aos='zoom-in'>
                                <img
                                    src={pozaAbout}
                                    className='img-fluid aboutImg'
                                    alt=''
                                />
                            </div>
                            <div
                                className='col-lg-6 d-flex flex-column justify-contents-center'
                                data-aos='fade-left'>
                                <div className='content pt-4 pt-lg-0'>
                                    <h3>
                                        We don't force you to write a ticket or
                                        to give us feedback, but we would
                                        appreciate if you do it
                                    </h3>
                                    <p className='font-italic'></p>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faCheckSquare}
                                                color='green'
                                            />
                                            <i></i>
                                            <i></i>
                                            It helps us continuously update our
                                            site
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faCheckSquare}
                                                color='green'
                                            />
                                            <i></i>
                                            <i></i> We can solve every problem
                                            you have regarding our site
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faCheckSquare}
                                                color='green'
                                            />
                                            <i className='icofont-check-circled'></i>
                                            {'    '}
                                            You can give us suggestions towards
                                            what additions you would like to see
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faCheckSquare}
                                                color='green'
                                            />
                                            <i className='icofont-check-circled'></i>
                                            {'    '}
                                            It motivates us to work harder to
                                            improve the quality of our site
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='Details'>
                <div className='form-group textarea'>
                    <label
                        htmlFor='exampleFormControlTextarea1'
                        className='inputText'>
                        Write below your thoughts and send it to us
                    </label>
                    <textarea
                        onChange={OnChangeText}
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        rows='5'
                    />
                </div>
                <div className='emailUser'>Enter here your email</div>
                <MDBInput className='inputEmail' onChange={OnChangeEmail} />

                {loader ? (
                    <div>
                        <Spinner
                            animation='border'
                            role='status'
                            className='SpinnerFeedback'></Spinner>
                    </div>
                ) : (
                    <div>
                        <Button variant='dark' onClick={FetchingFeedback}>
                            Press it
                        </Button>{' '}
                    </div>
                )}
            </div>
        </div>
    );
}
export default SendEmail;
