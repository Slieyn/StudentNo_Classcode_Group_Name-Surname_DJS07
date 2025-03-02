import React from "react";

/**
 * Meme component that allows users to create memes by adding top and bottom text
 * to a random meme image fetched from an external API.
 * 
 * @component
 * @returns {JSX.Element} The meme creation form and meme display section.
 */
export default function Meme() {
    // State for meme data (topText, bottomText, randomImage)
    const [meme, setMeme] = React.useState({
        topText: "", // Text for the top part of the meme
        bottomText: "", // Text for the bottom part of the meme
        randomImage: "http://i.imgflip.com/1bij.jpg" // Default meme image URL
    });

    // State for storing all memes fetched from the API
    const [allMemes, setAllMemes] = React.useState([]);

    // Fetch memes data from the Imgflip API when the component mounts
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            // Set all memes in state
            setAllMemes(data.data.memes);
        }
        getMemes(); // Call the async function to fetch memes
    }, []); // Empty dependency array ensures this runs once when the component mounts

    /**
     * Get a random meme image from the fetched list of memes
     * and update the state with the new image URL.
     */
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url; // URL of the randomly selected meme image
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url // Set the random meme image URL in the state
        }));
    }

    /**
     * Handle changes in the input fields (topText and bottomText)
     * by updating the corresponding state value.
     * 
     * @param {React.ChangeEvent} event - The change event from the input field
     */
    function handleChange(event) {
        const { name, value } = event.target; // Get name and value of the input field
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value // Dynamically update the correct text field based on name
        }));
    }

    return (
        <main>
            {/* Meme creation form */}
            <div className="form">
                {/* Input for top text */}
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} // Update state on change
                />
                {/* Input for bottom text */}
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} // Update state on change
                />
                {/* Button to fetch a new meme image */}
                <button 
                    className="form--button"
                    onClick={getMemeImage} // Fetch new meme image when clicked
                >
                    Get a new meme image 🌄
                </button>
            </div>
            
           
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Generated meme" />
                {/* Display top text on the meme */}
                <h2 className="meme--text top">{meme.topText}</h2>
                {/* Display bottom text on the meme */}
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
