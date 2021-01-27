import React from 'react';
import { useState } from 'react';

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
            <div>Random</div>
            <button onClick={FetchIt}>Click me</button>
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
