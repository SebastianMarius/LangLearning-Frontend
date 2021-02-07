import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pozika from '../images/telescop.png';
import '../../src/Ceseseu.css';
import pozika2 from '../images/door.png';
import pozika3 from '../images/threeword.png';
import pozaAbout from '../images/learnkorean.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarFunction from '../pages/NavBarAndSearchSentence';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import meme1 from '../images/meme1.png';
import meme2 from '../images/meme2c.jpg';
import meme3 from '../images/meme3c.jpg';
import Typing from 'react-typing-animation';
import Card from 'react-bootstrap/Card';

function TEST() {
    let a = 4;
    return (
        <>
            <p className='testcesese'>TEST {a} </p>
        </>
    );
}

function HomePageSlideShow() {
    return (
        <>
            <div className='slideShow '>
                <Carousel>
                    {/* <div className='letsDoIt'> */}
                    <Carousel.Item interval={1000}>
                        <img
                            className='d-block w-100'
                            width={900}
                            height={500}
                            src={pozika}
                            alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* </div> */}
                    <Carousel.Item interval={1000}>
                        <img
                            className='d-block w-100 '
                            src={pozika2}
                            alt='Third slide'
                            width={100}
                            height={500}
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className='d-block w-100'
                            src={pozika3}
                            alt='Third slide'
                            width={900}
                            height={500}
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

function AboutThisWebsite() {
    return (
        <>
            <section id='about' className='about border border-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6' data-aos='zoom-in'>
                            <img src={pozaAbout} className='img-fluid' alt='' />
                        </div>
                        <div
                            className='col-lg-6 d-flex flex-column justify-contents-center'
                            data-aos='fade-left'>
                            <div className='content pt-4 pt-lg-0'>
                                <h3>For what you can use this website?</h3>
                                <p className='font-italic'>
                                    We just hope that we can help korean
                                    learners to learn vocabulary so please feel
                                    free to use it if you:
                                </p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faCheckSquare}
                                            color='green'
                                        />
                                        <i></i>
                                        <i></i>
                                        Are tired to learn new words from books
                                        and dictionary
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faCheckSquare}
                                            color='green'
                                        />
                                        <i></i>
                                        <i></i> Wanna get some vocabulary (and
                                        not just vocabulary) knowledges in a
                                        funny way
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faCheckSquare}
                                            color='green'
                                        />
                                        <i className='icofont-check-circled'></i>
                                        {'    '}
                                        aici tre sa revin
                                    </li>
                                </ul>
                                <p>aici trebe sa revin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function DontKnowWhatToLearn() {
    const [isLoading, setLoading] = useState(false);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
                window.location.href = '/GiveMeSentences';
            });
        }
    }, [isLoading]);
    const handleClick = () => setLoading(true);

    return (
        <>
            <div className='AboutFirst'>
                <div className='AboutFirstText'>
                    <div className='AboutFirstTextFirstThing'>
                        Want to learn but don't know what?
                    </div>
                    <div className='AboutFirstTextSecondThing'>
                        We also have random words generator :)
                    </div>
                    <div></div>
                    <div className='AboutFirstTextThirdThing'>
                        한국어 공부하면 새 문을 닫을 수도 있어요
                    </div>
                </div>
                <Button
                    variant='warning'
                    className='ButtonRedirectRandom'
                    size='lg'
                    onClick={!isLoading ? handleClick : null}>
                    {isLoading
                        ? 'We will redirect you..'
                        : 'Let s learn smth new'}
                </Button>{' '}
            </div>
        </>
    );
}

function FlipCard() {
    const [isFlipped, setisFlipped] = useState(false);
    const [isFlippedSecond, setIsFlippedSecond] = useState(false);
    const [isFlippedThird, setisFlippedThird] = useState(false);
    const [isFlippedFour, setisFlippedFour] = useState(false);
    const [test, setTest] = useState(false);

    function cardFlip() {
        setisFlipped(!isFlipped);
        setIsFlippedSecond(!isFlippedSecond);
    }

    return (
        <>
            <div id='AllCards'>
                <div className='card FirstCards'>
                    <div className='front frontCard frontCardFirst'>
                        <div className='FirstCardsFrontText'>
                            Don't feel any improvement?
                        </div>
                        <div>
                            {' '}
                            이거 이해할 수 있으면 한국어 잘 할 수 있은가 봐요
                        </div>
                    </div>
                    <div className='back  backCard backCardFirst'>
                        <div>
                            Don't worry, it's something normal that came when
                            you start to learn something new, give yourself
                            time, even a caterpillar need time until it change
                            into a butterfly and start to fly
                        </div>
                    </div>
                </div>

                <div className='card  SecondCards'>
                    <div className='front  frontCard frontCardSecond'>
                        <div className='FirstCardsFrontText'>
                            You feel you don't have any motivation?
                        </div>
                        <div> 공부하면서 동기가 올 거예요.</div>
                    </div>
                    <div className='back  backCard backCardSecond'>
                        <div>
                            It's ok to feel this, usually every normal learning
                            process came with some moments when you feel like
                            "why the heck did I start this?" just take a day off
                            and think about the result that you wanna achieve
                        </div>
                    </div>
                </div>

                <div className='card  ThirdCars'>
                    <div className='front  frontCard frontCardThird'>
                        <div className='FirstCardsFrontText'>
                            Don't know from where you can start to learn?
                        </div>
                        <div> 한국어 공부 시작하세요</div>
                    </div>
                    <div className='back  backCard backCardThird'>
                        <div>
                            This is very simple :) first of all you need to
                            master korean alphabet, after you do that your
                            journey in this language started. There are a lot of
                            learning resources and youtube videoes, good luck!
                        </div>
                    </div>
                </div>

                <div className='card  FourCard '>
                    <div className='front  frontCard frontCardFour'>
                        <div className='FirstCardsFrontText'>
                            You still have some question?
                        </div>
                        <div> 질문이 물어봐요!</div>
                    </div>
                    <div className='back  backCard backCardFour '>
                        <div>
                            Then please don't hesitate to contact us, you can
                            use "Send us your thoughts that it's located on the
                            top of the page and ask us everything or give some
                            suggestions to improve our work
                        </div>
                    </div>
                </div>
            </div>

            <div id='yourAnchorTag'> </div>
        </>
    );
}

const AnimatedTypingComponent = () => {
    const [TypeEffect, setTypeEffect] = useState(false);
    const [FlipMyCard, setFlipMyCard] = useState(false);
    const [TypingTurn, setTypingTurn] = useState(false);
    const [TypingTurnSecond, setTypingTurnSecond] = useState(false);
    const [TypingTurnSecond2, setTypingTurnSecond2] = useState(false);
    const [TypingTurnSecond3, setTypingTurnSecond3] = useState(false);
    const [TypingTurnThid, setTypingTurnThird] = useState(false);
    const [TypingTurnThid2, setTypingTurnThird2] = useState(false);
    const [TypingTurnThid3, setTypingTurnThird3] = useState(false);

    const TypingFirstCardExplications = () => {
        setTypingTurn(!TypingTurn);
    };

    const TypingSecondCardExplication = () => {
        setTypingTurnSecond(!TypingTurnSecond);
    };

    const TypingSecondCardExplication2 = () => {
        setTypingTurnSecond2(!TypingTurnSecond2);
    };

    const TypingSecondCardExplication3 = () => {
        setTypingTurnSecond3(!TypingTurnSecond3);
    };

    const TypingThirdCardExplication = () => {
        setTypingTurnThird(!TypingTurnThid);
    };
    const TypingThirdCardExplication2 = () => {
        setTypingTurnThird2(!TypingTurnThid2);
    };
    const TypingThirdCardExplication3 = () => {
        setTypingTurnThird3(!TypingTurnThid3);
    };

    const AfterTimeEnd = () => {
        const timer = setTimeout(() => {
            console.log('Hello, World!');
            setTypeEffect(true);
        }, 5000);
        return () => clearInterval(timer);
    };

    const SomeTest = () => {
        setFlipMyCard(!FlipCard);
    };

    return (
        <>
            <Typing onAfterType={AfterTimeEnd} startDelay='3000'>
                <div className='LikeMemes '>
                    Because we know that you like memes...
                </div>
                <Typing.Delay ms={1000} />
            </Typing>

            {TypeEffect ? (
                <div>
                    <div class='cardMeme cardMemeFirst'>
                        <div
                            class='frontMemeCard'

                            // onMouseOut={StartThis}>
                        >
                            <Card
                                // border='none'
                                // bg='Light'
                                style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={meme1} />
                                <Card.Body bsPrefix='STILIZAM'>
                                    <Card.Title>
                                        We know how you feel
                                    </Card.Title>
                                    <Card.Text>
                                        Just give yourself time, it takes a lot
                                        of time and effort to be fluent in a new
                                        language
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class='backMemeCard'>
                            <div className='TitleFirstCard'>
                                Glad to see your here!
                            </div>
                            <div className='explainCards'>
                                On every meme card on the back we explain the
                                korean language used in it.{' '}
                            </div>
                            <div className='explainCards'>
                                Hope it will helps you!{' '}
                            </div>
                            <div
                                className='koreanTextFirstCard'
                                onMouseOver={TypingFirstCardExplications}
                                onMouseOut={TypingFirstCardExplications}>
                                화이팅!
                            </div>

                            {TypingTurn ? (
                                <Typing startDelay='100'>
                                    <div className='koreanSlang'>
                                        {' '}
                                        화이팅 = Korean slang, usually express
                                        something similar like "you can do it!/
                                        let's do it!"
                                    </div>
                                    <Typing.Delay ms={1000} />
                                </Typing>
                            ) : (
                                <div>
                                    Go to click on "화이팅" to see it s
                                    explications!
                                </div>
                            )}
                        </div>
                    </div>

                    <div class='cardMeme cardMemeSecond '>
                        <div class='frontMemeCard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={meme2} />
                                <Card.Body bsPrefix='STILIZAM'>
                                    <Card.Title>
                                        Let's start with smth easy
                                    </Card.Title>
                                    <Card.Text>
                                        Now flip the card if you don't
                                        understand this meme
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class='backMemeCard'>
                            <div className='TitleFirstCard'>
                                Some basic words
                            </div>
                            <div className='explainCards alignThis'>
                                The words are:
                            </div>
                            <div className='explainCards alignThis '>
                                {''}
                                <div
                                    className='alignThis'
                                    onMouseOver={TypingThirdCardExplication}
                                    onMouseOut={TypingThirdCardExplication}>
                                    외국인,
                                </div>{' '}
                                <div
                                    className='alignThis'
                                    onMouseOver={TypingThirdCardExplication2}
                                    onMouseOut={TypingThirdCardExplication2}>
                                    한국인,
                                </div>
                                <div
                                    className='explainCards'
                                    onMouseOver={TypingThirdCardExplication3}
                                    onMouseOut={TypingThirdCardExplication3}>
                                    {' '}
                                    안녕하세요{' '}
                                </div>
                            </div>

                            <div className='explicationTime explainWords '>
                                {TypingTurnThid ? (
                                    <div>
                                        <Typing startDelay='100'>
                                            <div className='koreanForeigner'>
                                                {' '}
                                                외국인 = foreigner.
                                            </div>
                                            <Typing.Delay ms={1000} />
                                        </Typing>
                                    </div>
                                ) : (
                                    <div></div>
                                )}

                                {TypingTurnThid2 ? (
                                    <div>
                                        <Typing startDelay='100'>
                                            <div className='koreanKoreanWord'>
                                                한국인 = 한국 (Korea) + 인
                                                (Person) = korean person.
                                            </div>
                                            <Typing.Delay ms={1000} />
                                        </Typing>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                {TypingTurnThid3 ? (
                                    <div>
                                        <Typing startDelay='100'>
                                            <div className='koreanHiWord'>
                                                안녕하세요 = Most basically
                                                korean formal "Hello" that you
                                                can hear in kdramas :)
                                            </div>
                                            <Typing.Delay ms={1000} />
                                        </Typing>
                                    </div>
                                ) : (
                                    <div> </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div class='cardMeme cardMemeThird '>
                        <div class='frontMemeCard middleCard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={meme3} />
                                <Card.Body bsPrefix='STILIZAM'>
                                    <Card.Title>
                                        Let's try a full sentence too
                                    </Card.Title>
                                    <Card.Text>
                                        What are you waiting? flip it!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class='backMemeCard'>
                            <div className='TitleFirstCard'>
                                <div>
                                    I know it's a full sentence but you can do
                                    it!
                                </div>
                                <div className='explicationTimeForMiddleMeme'>
                                    <div className='explainKoreanThird'>
                                        The sentence it's:{' '}
                                        <div
                                            className='alignThis'
                                            onMouseOver={
                                                TypingSecondCardExplication
                                            }
                                            onMouseOut={
                                                TypingSecondCardExplication
                                            }>
                                            저도
                                        </div>{' '}
                                        <div
                                            className='alignThis EnglishLangauge'
                                            onMouseOver={
                                                TypingSecondCardExplication2
                                            }
                                            onMouseOut={
                                                TypingSecondCardExplication2
                                            }>
                                            {' '}
                                            영어{' '}
                                        </div>{' '}
                                        <div
                                            className='alignThis'
                                            onMouseOver={
                                                TypingSecondCardExplication3
                                            }
                                            onMouseOut={
                                                TypingSecondCardExplication3
                                            }>
                                            못해요
                                        </div>
                                    </div>
                                    {TypingTurnSecond ? (
                                        <div>
                                            <Typing startDelay='100'>
                                                <div className='SomeTopSpaceBetweenWoeds thirdMemeCardMeToo'>
                                                    저도 = 저 (Me) + 도 (too) =
                                                    Me too{' '}
                                                </div>
                                                <Typing.Delay ms={1000} />
                                            </Typing>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    {TypingTurnSecond2 ? (
                                        <div>
                                            <Typing startDelay='100'>
                                                <div className='SomeTopSpaceBetweenWoeds thirdMemeCardMeToo'>
                                                    영어 = 영 (America) + 어
                                                    (language) it means english
                                                    language
                                                </div>
                                                <Typing.Delay ms={1000} />
                                            </Typing>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    {TypingTurnSecond3 ? (
                                        <div>
                                            <Typing startDelay='100'>
                                                <div className='SomeTopSpaceBetweenWoeds thirdMemeCardMeToo'>
                                                    못해 it's a grammar
                                                    structure that cames from:
                                                </div>
                                                <Typing.Delay ms={1000} />
                                            </Typing>
                                            <Typing startDelay='7000'>
                                                <div className='SomeTopSpaceBetweenWoeds'>
                                                    못 + 하다 = to do = 못해
                                                    whichs means I can't do{' '}
                                                </div>
                                                <Typing.Delay ms={1000} />
                                            </Typing>
                                            <Typing startDelay='14000'>
                                                <div className='SomeTopSpaceBetweenWoeds'>
                                                    Another example: 못 (Can't)
                                                    + 먹다 (To eat) = 못 먹어 (I
                                                    can't eat){' '}
                                                </div>
                                                <Typing.Delay ms={1000} />
                                            </Typing>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};

function HomePage() {
    return (
        <>
            <HomePageSlideShow />
            <DontKnowWhatToLearn />

            <AboutThisWebsite />
            <FlipCard />
            <AnimatedTypingComponent />
        </>
    );
}

export default HomePage;
