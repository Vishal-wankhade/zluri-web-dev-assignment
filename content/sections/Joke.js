import React, { useState, useEffect } from 'react';

function Joke() {
    const [data, setData] = useState("");
    const [joke, setJoke] = useState("");

    useEffect(() => {
        generateJoke();
    }, []); 

    function generateJoke() {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json()) // Use response.json() instead of res.JSON()
        .then(data => {
            setData(data);
            setJoke(data.joke);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    }

    return (
        <div className="joke-wrap">
            <p className="joke">{joke}</p>
            <button onClick={generateJoke} className='joke-btn'>Next Joke</button>
        </div>
    );
}

export default Joke;
