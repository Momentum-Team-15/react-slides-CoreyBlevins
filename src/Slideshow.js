import './App.css'
import { useState } from 'react';
import { filmData } from './film-data.js';

const Slideshow = () => {
    let [slide, setSlide] = useState(0);
    const [film, setFilm] = useState(filmData[slide]);
    return (
  
      <section>
        <div className="slide">
        <div className="title">
          <h1>{film.title}</h1>
        </div>
        <div className="info">
          <img className="image" src={film.image} alt="movie cover" />
          <div className="description">
            <h3>{film.original_title}</h3>
            <h6>{film.release_date}</h6>
            <p>{film.description}</p>
          </div>
        </div>
        </div>
        <div className="buttons">
          <button className="btn" disabled={slide === 0 ? true : false}
            onClick={() => { setFilm(filmData[slide -= 1]); setSlide(slide) }}>◀️ Previous</button>
          <button className="btn" disabled={slide === filmData.length - 1 ? true : false}
            onClick={() => { setFilm(filmData[slide += 1]); setSlide(slide) }}>Next ▶️</button>
          <button className="btn" disabled={slide === 0 ? true : false}
            onClick={() => { setFilm(filmData[slide = 0]); setSlide(slide) }}>↪️ Start Over</button>
        </div>
      </section >
    )};
  
  export default Slideshow
  