import { useEffect } from 'react'
import './App.css'
import { API_KEY, API_URL } from './lib'
import { useDispatch, useSelector } from 'react-redux'
import { handlePopular, selectPopular } from './store/slices/popular'
import FilmForm from './components/FilmForm'
import { handleFilmID } from './store/slices/filmID'
import { Link } from 'react-router-dom'
import { selectMode } from './store/slices/mode'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((response) => response.json()).then((res => {
      // console.log(res);
      dispatch(handlePopular({
        popular: res.results
      }))
    }))
  }, [])
  const popular = useSelector(selectPopular)
  // console.log(popular);

  function handleCLick(id) {
    dispatch(handleFilmID({
      id: id
    }))
  }
  const mode = useSelector(selectMode)
  return (
    <div className={`flex flex-wrap  gap-[50px] justify-evenly  transition-all duration-200 ${mode ? 'bg-gray-200' : 'bg-[#151617]'} `}>
      {
        popular.map((el) => {
          return (
            <div key={Math.random()} onClick={() => handleCLick(el.id)} className='cursor-pointer' >
              <Link to={"aboutFilm"} >
                <FilmForm data={el} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
