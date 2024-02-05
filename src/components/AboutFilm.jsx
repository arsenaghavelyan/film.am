import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectFilmID } from '../store/slices/filmID';
import { API_KEY, API_URL, photos } from '../lib';
import AboutFilmForm from './AboutFilmForm';
import Actors from './Actors';
import { selectMode } from '../store/slices/mode';

export default function AboutFilm() {
    const [aboutFilmResult, setAboutFilmResult] = useState([])
    const id = useSelector(selectFilmID)

    const mode = useSelector(selectMode)
    useEffect(() => {
        fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        }).then((res) => {
            setAboutFilmResult(res)
        })
    }, [])
    
    return (
        <div className={`flex  justify-around items-center p-[27.5px] transition-all duration-200 ${mode ? '' : 'bg-black'}`}>
            <Actors />
            <AboutFilmForm data={aboutFilmResult} />
        </div>
    )
}
