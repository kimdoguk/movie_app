import React from "react";
import { Link } from "react-router-dom";
import PropTyeps from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link 
                to={{
                    pathname : `/movie/${id}`,
                    state : {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{ title }</h3>
                    <h5 className="movie__year">{ year }</h5>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => (
                            <li key={index} className="genres_genre">
                                { genres }
                            </li> 
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.PropTyeps = {
    id : PropTyeps.number.isRequired,
    year : PropTyeps.number.isRequired,
    title : PropTyeps.string.isRequired,
    summary : PropTyeps.string.isRequired,
    poster : PropTyeps.string.isRequired,
    genres : PropTyeps.arrayOf(PropTyeps.string).isRequired
};

export default Movie;