import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Testbutton from './Testbutton';
import poza from './images/test1.jpg';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

function MyControlledInput() {
    const [value, setValue] = useState('');
    const [data, setData] = useState('');
    const [altaData, setAltaData] = useState('');

    const onChangeHandler = (e) => {
        setAltaData(e.target.value);
    };

    const onChange = (event) => {
        setValue(event.target.value);
    };

    function ShowSentenceByWord() {
        fetch(`http://localhost:8080/words/showSentences?word=` + altaData)
            .then((response) => response.json())
            .then(setData)
            .then(console.log(altaData));
    }
    return (
        <>
            <div>Input value: {value}</div>
            <input
                type='text'
                name='name'
                onChange={onChangeHandler}
                value={altaData}
            />
            <button onClick={ShowSentenceByWord}>Activate Lasers</button>

            {data ? (
                <div>
                    <h1>{data.kowordId}</h1>
                    <h1>{data.kowordTranslation} </h1>
                    <h1>{data.korfirstSentence}</h1>
                    <h1>{data.kosecondSentence}</h1>
                    <h1>{data.kothirdSentence}</h1>
                </div>
            ) : (
                <div>ssss</div>
            )}
        </>
    );
}

// function Test(props) {
//     const [title, setTitle] = useState('s');

//     console.log(title);

//     return (
//         <form>
//             <label>
//                 Name:
//                 <input
//                     type='text'
//                     name='name'
//                     onChange={(event) => setTitle(event.target.value)}
//                 />
//             </label>
//             <input type='submit' value='Submit' />
//         </form>
//     );
// }

function App(props) {
    return (
        <div>
            <MyControlledInput />
        </div>
    );
}
export default App;
