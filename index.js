import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    return (
        <div>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />

            <ReactMarkdown children={markdown} />
        </div>
    );
}
function reverseSentence(sentence) {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

// As an illustration, pull names out of the data array
const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Bob', age: 40 }
    ]
];
let names = data.flat().map(item => item.name);
console.log(names); // ['John', 'Jane', 'Bob']
