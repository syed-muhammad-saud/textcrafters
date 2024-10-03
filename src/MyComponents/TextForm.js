import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState('black');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared!", "warning");
    };

    const handleCapitalizeClick = () => {
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
        props.showAlert("Converted to Capitalized!", "success");
    };

    // const handleSentenceClick = () => {
    //     let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    //     setText(newText);
    //     props.showAlert("Converted to Sentence case!", "success");
    // };

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text reversed!", "success");
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleColorClick = () => {
        const randomColor = getRandomColor();
        setTextColor(randomColor);
        props.showAlert('Text color changed in preview', "success");
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    };

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        className="form-control mt-3"
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                            borderColor: props.mode === 'dark' ? 'white' : 'black'
                        }}
                    ></textarea>
                </div>
                {/* Button arrangement */}
                <div className="d-flex flex-wrap justify-content-start">
                    <button className="btn btn-primary me-3 mb-2" onClick={handleUpClick}>
                        Uppercase
                    </button>
                    <button className="btn btn-primary me-3 mb-2" onClick={handleLoClick}>
                        Lowercase
                    </button>
                    <button className="btn btn-primary me-3 mb-2" onClick={handleCapitalizeClick}>
                        Capitalize
                    </button>
                    {/* <button className="btn btn-primary me-3 mb-2" onClick={handleSentenceClick}>
                        Sentence Case
                    </button> */}
                    <button className="btn btn-primary me-3 mb-2" onClick={handleReverseClick}>
                        Reverse Text
                    </button>
                    <button className="btn btn-primary me-3 mb-2" onClick={handleClearClick}>
                        Clear Text
                    </button>
                    <button className="btn btn-primary me-3 mb-2" onClick={handleColorClick}>
                        Change Color
                    </button>
                    <button className="btn btn-primary me-3 mb-2" onClick={handleCopyClick}>
                        Copy Text
                    </button>
                </div>
            </div>

            <div className="container mt-4">
                <h1>Your text Summary</h1>
                <h5>
                    <b>{text.split(/\s+/).filter((element) => element.length !== 0).length}</b> words and{' '}
                    <b>{text.length}</b> characters
                </h5>
                <h5>
                    Average <b>{(0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)}</b>{' '}
                    minutes required to read this text
                </h5>
            </div>

            <div className='container mt-4'>
                <h2>Preview</h2>
                <p style={{ color: textColor }}>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    );
}


