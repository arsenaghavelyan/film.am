import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSearch } from '../store/slices/search'
import { handleMode, selectMode } from '../store/slices/mode'

export default function Header() {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useDispatch()
    const mode = useSelector(selectMode)
    function handleClick() {
        dispatch(handleMode({
            boolean:!mode
        }))
    }
    return (
        <div className={` ${mode ? 'bg-gray-300' : 'bg-[#2a292b]'}  transition-all duration-200 p-2 flex justify-around items-center`}>
            <Link to={''} >
                <div>
                    <img src="logo.jpg" className='w-[90px] cursor-pointer' />
                </div>
            </Link>
            <div>
                <div className="bg-[#2f3640] h-[40px] rounded-full flex">

                    <input className="bg-transparent outline-none text-white text-base w-[210px]" type="text" placeholder="Search"
                        onChange={(e) => setInputVal(e.target.value)}
                        value={inputVal} />
                    <Link to={'search'}>

                        <button className="float-right w-[40px] h-[40px] rounded-full bg-[#2f3640] flex  justify-center items-center"
                            onClick={() => {
                                dispatch(handleSearch({ search: inputVal }))
                                setInputVal('')
                            }} >

                            &#128269;

                        </button>
                    </Link>
                </div>

            </div>
            <div>
                <div onClick={() => handleClick()} className='transition-all duration-200'>
                    <img src={mode ? 'dark-mode.webp' : 'light-mode.webp'}  className= 'w-[76px]' />
                </div>
            </div>
        </div>
    )
}
