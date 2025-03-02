import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

/**
 * App component that serves as the main entry point for the Meme Generator app.
 * It renders the Header and Meme components.
 * 
 * @component
 * @returns {JSX.Element} The main structure of the app containing the Header and Meme components.
 */
export default function App() {
    return (
        <div>
            {/* Render the Header component*/}
            <Header />
            
            {/* Render the Meme component*/}
            <Meme />
        </div>
    );
}
