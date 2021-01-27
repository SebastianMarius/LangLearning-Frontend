import React from 'react';
import { useState } from 'react';

function ShowSentenceByWord() {
    const [sentence, setSentence] = useState('');
    const [fetchu, setFetchu] = useState('');

    const FetchData = () => {
        fetch(`http://localhost:8080/words/showSentences?word=` + sentence)
            .then((response) => response.json())
            .then(setFetchu)
            .then(console.log(fetchu));
    };

    const OnChangerr = (e) => {
        setSentence(e.target.value);
    };

    return (
        <>
            <input type='text' name='name' onChange={OnChangerr} />
            <button
                type='submit'
                value={sentence}
                name='text'
                onClick={FetchData}>
                Click to search for sentences
            </button>

            {fetchu ? (
                <>
                    <h1> {fetchu.korfirstSentence} </h1>
                    <h1>{fetchu.kosecondSentence}</h1>
                    <h1>{fetchu.kothirdSentence}</h1>
                    <h1>{fetchu.kowordTranslation}</h1>
                    <h1>{fetchu.kowordId}</h1>
                </>
            ) : (
                // <h1> {fetchu.kosecondSentence}  </h1>

                <h1></h1>
            )}
        </>
    );
}

export default ShowSentenceByWord;
