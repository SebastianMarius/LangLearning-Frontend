import React from 'react';
import febeu from '../images/facebook.png';
import insta from '../images/instagram.png';
import disc from '../images/discord.png';

const FooterPage = () => {
    return (
        <>
            <footer className='bg-dark text-center text-lg-start Footerul'>
                <div className='container p-4'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>
                                Learning vocabulary{' '}
                            </h5>

                            <p>
                                Welcome to our site, we hope we will can help
                                you somehow in your learning process, korean
                                it's the most beautifull language and also the
                                most easier asian language. Hope you will have
                                fun during your learning process
                            </p>
                        </div>

                        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Explore</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='Home' className='text-light'>
                                        Home page
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='GiveMeSentences'
                                        className='text-light'>
                                        Random Sentences
                                    </a>
                                </li>
                                <li>
                                    <a href='SendEmail' className='text-light'>
                                        Send feedback/question
                                    </a>
                                </li>

                                <li>
                                    <a href='#!' className='text-light'>
                                        Basic learners mistakes
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                            <h5 className='text-uppercase mb-0'>
                                Social media and community
                            </h5>

                            <ul className='list-unstyled  socialMedia'>
                                <li>
                                    <a href='' className='text-light inline '>
                                        <img src={febeu} />
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light inline'>
                                        <img src={insta} />
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light inline'>
                                        <img src={disc} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterPage;
