import React, { useState } from 'react'
import { photos } from '../lib'
import { useSelector } from 'react-redux'
import { selectMode } from '../store/slices/mode'

export default function AboutFilmForm({ data }) {
    const [buttonState, setButtonState] = useState(false)
    function handleButtonClick() {
        setButtonState(!buttonState)
    }
    const mode = useSelector(selectMode)
    return (
        <div className='flex'>
            <div className={`p-[20px] border-2 transition-all duration-200 ${mode ? 'border-black' : 'border-white'} `}>
                <span className='text-[32px] font-thin text-blue-400 '>{data.original_title}</span>
                <div className='w-[650px] h-[500px]   border-collapse mt-[30px]  bg-white flex  justify-between'>
                    <div className=' w-[500px] object-cover '>
                        <img src={`${photos}${data.poster_path}`} className='h-[500px]' alt="No photo" />
                    </div>
                    <div className={`flex flex-col justify-between  transition-all duration-200 ${mode ? 'bg-gray-200 pl-[17px]' : ''}`}>
                        <div className='w-[300px] mt-[10px] '>
                            <span className='text-[33px] text-red-600 font-extralight'>About film</span> <br />
                            <span>{data.overview}</span>
                        </div>
                        <div className='mb-[15px]'>
                            <button id="button-82-pushable" className={`${buttonState ? "hidden" : ""}`} role="button" onClick={() => handleButtonClick()}>
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">
                                    More information
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[350px] h-[500px] bg-white mt-[99px] ml-[20px] pl-[17px] transition-all duration-200 ${mode ? 'bg-gray-200 ' : ''} ${buttonState ? "" : "hidden"}`} >
                <h1 className='mt-[15px] text-[20px]'><span className='text-red-500 text-[27px]'>Runtime:</span> {data.runtime} min.</h1>
                <h1 className='mt-[15px] text-[23px]'><span className='text-red-500 text-[27px]'>Language:</span> {data.original_language}</h1>
                <h1 className='mt-[15px] text-[23px]'><span className='text-red-500 text-[27px]'>Release date:</span> {data.release_date}</h1>
                <h1 className='mt-[15px] text-[23px]'><span className='text-red-500 text-[27px]'>Tagline: </span>{data.tagline == "" ? "there is no tagline" : `${data.tagline}`}</h1>
                <h1 className='mt-[15px] text-[23px]'><span className='text-red-500 text-[27px]'>Homepage:</span> <a href={`${data.homepage}`} className='lingTag' target='blank'>Link to homepage</a></h1>
                {data.budget == 0 ? "" : <h1 className='mt-[15px] text-[23px]'><span className='text-red-500 text-[27px]'>Budget:</span> {data.budget}$</h1>}
                <button id="button-82-pushable" className='mt-[30px]' role="button" onClick={() => handleButtonClick()}>
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Back
                    </span>
                </button>
            </div>
        </div>
    )
}
