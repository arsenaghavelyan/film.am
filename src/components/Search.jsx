import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch } from '../store/slices/search'
import { API_KEY, API_URL } from '../lib';
import FilmForm from './FilmForm';
import { Link } from 'react-router-dom';
import { handleFilmID } from '../store/slices/filmID';
import { selectMode } from '../store/slices/mode';

export default function Search() {
  const search = useSelector(selectSearch)
  const [searchResult, setSearchResult] = useState([])
  const [setError] = useState(null)
  // console.log(searchResult);

  const mode = useSelector(selectMode)
  useEffect(() => {
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    }).then((res) => {
      setSearchResult(res.results)
    }).catch((err) => {
      setError(err.message);
    });
  }, [])

  const dispatch = useDispatch()
  function handleCLick(id) {
    dispatch(handleFilmID({
      id: id
    }))
  }
  return (
    <div className={`flex flex-wrap  gap-[50px] justify-evenly ${mode ? 'bg-gray-200' : 'bg-[#151617]'} `}>
      {
        searchResult.map((el) => {
          return (
            <div key={Math.random()} onClick={() => handleCLick(el.id)}>
              <Link to={"/aboutFilm"} key={Math.random()}>
                <FilmForm data={el} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
