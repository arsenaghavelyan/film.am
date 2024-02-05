import React from 'react'
import { photos } from '../lib'
import { selectMode } from '../store/slices/mode'
import { useSelector } from 'react-redux'

export default function FilmForm({ data }) {
    // console.log(data);
    const mode = useSelector(selectMode)
    return (
        <div className='mt-5' >
            <div className=''>
                {
                    data.poster_path == null ? <img src="no-image.png" className='h-[340px] w-[270px] object-cover' /> :
                        <img src={`${photos}${data.poster_path}`} className='w-[270px] h-[340px] object-cover' />
                }
            </div>
            <div>
                <p className={`w-[200px] ${mode ? '' : 'text-white'} `}>{data.title}</p>
            </div>
            <div>
                <p className={`${mode ? 'text-red-600' : 'text-red-300'}`}>Date:  {data.release_date}</p>
            </div>
        </div>
    )
}
