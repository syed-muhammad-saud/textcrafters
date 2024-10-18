import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState('black'); // State for text color

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Count Words
    const countWords = (text) => {
        return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    };

    // Count Characters
    const countCharacters = (text) => {
        return text.length;
    };

    // Palindrome Checker
    const handlePalindromeCheck = () => {
        let cleanText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        let reversedText = cleanText.split('').reverse().join('');
        if (cleanText === reversedText) {
            props.showAlert('This text is a palindrome!', 'success');
        } else {
            props.showAlert('This text is not a palindrome.', 'warning');
        }
    };

    // Count Sentences
    const handleSentenceCount = () => {
        let sentences = text.split(/[.!?]/).filter((sentence) => sentence.trim() !== '');
        props.showAlert(`The text contains ${sentences.length} sentence(s).`, 'info');
    };

    // Change Text Color
    const handleChangeColor = () => {
        const color = prompt('Enter a color (name or hex):');
        setTextColor(color);
        props.showAlert('Text color changed!', 'success');
    };

    // Change Text Font Style (Bold, Italic, Underline)
    const handleBold = () => {
        setText(`<strong>${text}</strong>`);
        props.showAlert('Text made bold!', 'success');
    };

    const handleItalic = () => {
        setText(`<em>${text}</em>`);
        props.showAlert('Text italicized!', 'success');
    };

    const handleUnderline = () => {
        setText(`<u>${text}</u>`);
        props.showAlert('Text underlined!', 'success');
    };

    // Convert Text to Uppercase
    const handleUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('Text converted to uppercase!', 'success');
    };

    // Convert Text to Lowercase
    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert('Text converted to lowercase!', 'success');
    };

    // Change Text to Title Case
    const handleTitleCase = () => {
        setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
        props.showAlert('Text converted to title case!', 'success');
    };

    // Replace a Word
    const handleReplaceWord = () => {
        const wordToReplace = prompt('Enter the word you want to replace:');
        const newWord = prompt('Enter the new word:');
        setText(text.replace(new RegExp(wordToReplace, 'gi'), newWord));
        props.showAlert(`Replaced '${wordToReplace}' with '${newWord}'!`, 'success');
    };

    // Randomize Word Order
    const handleRandomizeWordOrder = () => {
        setText(text.split(' ').sort(() => Math.random() - 0.5).join(' '));
        props.showAlert('Words randomized!', 'success');
    };

    // Clear Text
    const handleClearText = () => {
        setText('');
        props.showAlert('Text cleared!', 'success');
    };

    // Save Text to Local Storage
    const handleSaveToLocalStorage = () => {
        localStorage.setItem('savedText', text);
        props.showAlert('Text saved to local storage!', 'success');
    };

    // Sort Words by Length
    const handleSortByLength = () => {
        let newText = text.split(' ').sort((a, b) => a.length - b.length).join(' ');
        setText(newText);
        props.showAlert('Words sorted by length!', 'success');
    };

    // Remove Vowels
    const handleRemoveVowels = () => {
        setText(text.replace(/[aeiouAEIOU]/g, ''));
        props.showAlert('Vowels removed!', 'info');
    };

    // Remove Consonants
    const handleRemoveConsonants = () => {
        setText(text.replace(/[^aeiouAEIOU]/g, ''));
        props.showAlert('Consonants removed!', 'info');
    };

    // Remove Extra Spaces
    const handleRemoveExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert('Extra spaces removed!', 'success');
    };

    // Duplicate Text
    const handleDuplicateText = () => {
        setText(text + ' ' + text);
        props.showAlert('Text duplicated!', 'success');
    };

    // Word Frequency Counter
    const handleWordFrequency = () => {
        let wordCounts = {};
        text.split(' ').forEach(word => {
            word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
            if (wordCounts[word]) {
                wordCounts[word]++;
            } else {
                wordCounts[word] = 1;
            }
        });
        let mostUsedWord = Object.keys(wordCounts).reduce((a, b) => wordCounts[a] > wordCounts[b] ? a : b);
        props.showAlert(`Most used word: '${mostUsedWord}' with ${wordCounts[mostUsedWord]} occurrences.`, 'info');
    };

    // Highlight Specific Word
    const handleHighlightWord = () => {
        let wordToHighlight = prompt('Enter the word to highlight:');
        let newText = text.replace(new RegExp(wordToHighlight, 'gi'), match => `<mark>${match}</mark>`);
        setText(newText);
        props.showAlert(`Word '${wordToHighlight}' highlighted!`, 'success');
    };

    // New Functionality: Reverse Text
    const handleReverseText = () => {
        setText(text.split('').reverse().join(''));
        props.showAlert('Text reversed!', 'success');
    };

    // New Functionality: Extract Links
    const handleExtractLinks = () => {
        const linkRegex = /https?:\/\/[^\s]+/g;
        const links = text.match(linkRegex) || [];
        alert(`Extracted Links: ${links.join(', ')}`);
    };

    // New Functionality: Remove Duplicates
    const handleRemoveDuplicates = () => {
        const words = text.split(' ');
        const uniqueWords = Array.from(new Set(words)).join(' ');
        setText(uniqueWords);
        props.showAlert('Duplicate words removed!', 'success');
    };

    // New Functionality: Extract Emails
    const handleExtractEmails = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const emails = text.match(emailRegex) || [];
        alert(`Extracted Emails: ${emails.join(', ')}`);
    };

    return (
        <>
            <div className="container d-flex flex-column flex-lg-row">
                {/* Input Section */}
                <div className="flex-grow-1 me-lg-2" style={{ flex: '1 1 50%' }}>
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
                            width: '100%',
                        }}
                    ></textarea>

                    {/* Word and Character Count */}
                    <div className="mb-3">
                        <h5>Word Count: {countWords(text)}</h5>
                        <h5>Character Count: {countCharacters(text)}</h5>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex flex-wrap justify-content-start">
                        {[
                            { label: 'Bold', handler: handleBold },
                            { label: 'Italic', handler: handleItalic },
                            { label: 'Underline', handler: handleUnderline },
                            { label: 'To Uppercase', handler: handleUppercase },
                            { label: 'To Lowercase', handler: handleLowercase },
                            { label: 'To Title Case', handler: handleTitleCase },
                            { label: 'Replace Word', handler: handleReplaceWord },
                            { label: 'Clear Text', handler: handleClearText },
                            { label: 'Randomize Words', handler: handleRandomizeWordOrder },
                            { label: 'Palindrome Check', handler: handlePalindromeCheck },
                            { label: 'Count Sentences', handler: handleSentenceCount },
                            { label: 'Sort by Length', handler: handleSortByLength },
                            { label: 'Remove Extra Spaces', handler: handleRemoveExtraSpaces },
                            { label: 'Change Text Color', handler: handleChangeColor },
                            { label: 'Save to Local Storage', handler: handleSaveToLocalStorage },
                            { label: 'Remove Vowels', handler: handleRemoveVowels },
                            { label: 'Remove Consonants', handler: handleRemoveConsonants },
                            { label: 'Duplicate Text', handler: handleDuplicateText },
                            { label: 'Highlight Word', handler: handleHighlightWord },
                            { label: 'Reverse Text', handler: handleReverseText },
                            { label: 'Extract Links', handler: handleExtractLinks },
                            { label: 'Extract Emails', handler: handleExtractEmails },
                            { label: 'Remove Duplicates', handler: handleRemoveDuplicates },
                            { label: 'Word Frequency', handler: handleWordFrequency },
                        ].map((button, index) => (
                            <button
                                key={index}
                                className="btn btn-primary m-1"
                                onClick={button.handler}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Preview Section */}
                <div className="flex-grow-1 mt-3 mt-lg-0" style={{ flex: '1 1 50%' }}>
                    <h1>Preview</h1>
                    <div
                        id="preview"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                            color: textColor,
                            border: '1px solid #ccc',
                            padding: '10px',
                            height: '300px',
                            overflowY: 'scroll',
                            borderRadius: '5px',
                        }}
                        dangerouslySetInnerHTML={{ __html: text }}
                    ></div>
                </div>
            </div>
        </>
    );
}
