import React from 'react';
import { useState } from 'react';
function SendEmail() {
    const [message, setmessage] = useState('');
    const [email, setEmail] = useState('');

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
    };

    return (
        <div>
            <textarea onChange={OnChangeText} />

            <h1>Enter here your email</h1>
            <input onChange={OnChangeEmail} />
            <button onClick={FetchingFeedback}>Press it </button>
        </div>
    );
}
export default SendEmail;
