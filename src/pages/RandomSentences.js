import React from 'react';
import { useState } from 'react';
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
    const FetchIt = () => {
        fetch('http://localhost:8080/words/randomSentenceBeginner')
            .then((response) => response.json())
            .then(setfetchData)
            .then(console.log(fethData));
    };

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
                                        <h6 className='mb-4 onPhotoText'>
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

            <button className='buttonRandomS' onClick={FetchIt}>
                Click meS
            </button>

            {fethData ? (
                <div>
                    <h1>{fethData.kothirdSentence}</h1>
                    <h1>{fethData.kowordTranslation}</h1>
                    <h1>{fethData.koword}</h1>
                    <h1>{fethData.korfirstSentence}</h1>
                    <h1>{fethData.korfirstSentence}</h1>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default ShowRandomSentences;
