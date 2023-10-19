import React, {useState} from "react";
import answers from './answers';

const EightBall = (props) => {
    const [message, setMessage] = useState({msg: "Think of a question", color: "black"});
    const backgroundColor = message.color;
    const textColor = backgroundColor === 'black' ? 'white' : 'black';
    return (
        <>
            <div onClick={() => setMessage(answers[Math.floor(Math.random()*answers.length)])}
            style={{backgroundColor: message.color, color: textColor}}>
                {message.msg}
            </div>
        </>
    )
}

export default EightBall;