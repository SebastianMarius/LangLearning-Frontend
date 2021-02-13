import React from 'react';
import { useState, useEffect } from 'react';
import '../../src/Ceseseu2.css';
import koreanLang from '../imagesRandomSentence/koreanLang.png';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBAnimation,
} from 'mdbreact';
import KoreanFlag from '../imagesRandomSentence/koreanFlag.jpg';

function ShowRandomSentences() {
    const [fethData, setfetchData] = useState('');
    const [RotateButton, setRotateButton] = useState(false);
    const [ButtonOnLoad, setButtonOnLoad] = useState(false);

    const FetchIt = () => {
        fetch('http://localhost:8080/words/randomSentenceBeginner')
            .then((response) => response.json())
            .then(setfetchData)
            .then(console.log(fethData));
        setRotateButton(true);
        setButtonOnLoad(false);
        buttonAnimation();
    };

    function buttonAnimation() {
        const timer = setTimeout(() => {
            setRotateButton(false);
            setButtonOnLoad(true);
            console.log('in useefect');
        }, 2000);
    }

    return (
        <>
            <div className='bg' />
            <div className='buttonRandomS'>Random</div>

            <div id='apppage'>
                <MDBView className=''>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient '>
                        <MDBContainer className='ChangePotitionText'>
                            <MDBRow>
                                <MDBCol
                                    md='6'
                                    className='white-text text-center text-md-left mt-xl-5 mb-5'>
                                    <MDBAnimation type='fadeInLeft' delay='.3s'>
                                        <h1 className='h1-responsive font-weight-bold mt-sm-5 onPhotoText'>
                                            Scroll down and start to learn
                                            something new!
                                        </h1>
                                        <hr className='hr-light' />
                                        <h6 className='mb-4 onPhotoText randomSentenceText'>
                                            If you feel like some words are
                                            missing, please do not hesitate to
                                            use feedback section
                                        </h6>
                                    </MDBAnimation>
                                </MDBCol>

                                <MDBCol md='6' xl='5' className='mt-xl-5'>
                                    <MDBAnimation
                                        type='fadeInRight'
                                        delay='.3s'></MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>

            <button
                onClick={FetchIt}
                className={
                    +RotateButton
                        ? 'buttonAfterClick buttonSearch'
                        : 'testButon buttonSearch'
                }
                style={{
                    backgroundImage: `url(${KoreanFlag})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}></button>

            {fethData && ButtonOnLoad ? (
                <div>
                    <div>
                        <div className='WordsHeader'>
                            <div>Korean word: {fethData.koword}</div>
                            <div>
                                English translation:{' '}
                                {fethData.kowordTranslation}
                            </div>
                        </div>
                        <div className='KoreanSentences'>
                            <div>
                                {' '}
                                First sentence: {fethData.korfirstSentence}{' '}
                            </div>
                            <div>
                                {' '}
                                Second sentence: {fethData.kosecondSentence}
                            </div>
                            <div>
                                Third sentence: {fethData.kothirdSentence}
                            </div>

                            {/* <h1>{props.fetchu}</h1> */}
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default ShowRandomSentences;
