import React from "react";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: "http://i.imgflip.com/1bij.jpg"  
  })

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const data = await response.json()
      setAllMeme(data.data.memes)
    }
    getData()
  })

  const [allMemes, setAllMeme] = useState()

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    setMeme(prevState => ({
      ...prevState,
      randomImg: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
        className="form--input" 
        placeholder="Top-text" 
        type="text"
        name="topText"
        value={meme.topText}
        onChange={handleChange} />
        <input 
        className="form--input" 
        placeholder="Bottom-text" 
        type="text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange} />
        <br />
        <button 
        className="form--button" 
        onClick={getImage}>
        <h4>Get a New Meme Image</h4>
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImg} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
