import React from "react";
import memePng from "../Images/meme.png.jpg";

/**
 * Header component that renders the top section of the Meme Generator app.
 * Includes an image, title, and project description.
 * 
 * @component
 * @returns {JSX.Element} A header section containing an image, title, and project description.
 */
export default function Header() {
    return (
        <header className="header">
            <img 
                src={memePng} 
                className="header--image" 
                alt="Meme Generator logo" 
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}
