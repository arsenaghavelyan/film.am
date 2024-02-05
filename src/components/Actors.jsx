import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilmID } from '../store/slices/filmID'
import { API_KEY, photos, API_URL } from '../lib'

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { selectMode } from '../store/slices/mode';

export default function Actors() {
    const id = useSelector(selectFilmID)
    const [actorRes, setActorRes] = useState([])
    const [setError] = useState(null)

    const mode = useSelector(selectMode)
    useEffect(() => {
        fetch(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}`).then((response) => {
            // return response.json()
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        }).then((res) => {
            // console.log(res);
            setActorRes(res.cast)
        }).catch((err) => {
            setError(err.massage)
        })
    }, [])
    // console.log(actorRes[0]);
    return (
        <div>
            {actorRes.length == 0 ? "" : <span className={`${mode ? '' : 'text-white'} text-[55px] flex justify-center`}  >Actors</span>}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                className='w-[300px] mt-[15px]'
                effect={"cube"}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >

                {
                    actorRes.map((el) => {
                        return (
                            <SwiperSlide key={Math.random()}>
                                {
                                    el.profile_path == null ? <img src="no-image.png" /> :
                                        <img src={`${photos}${el.profile_path}`} className=' h-[500px] object-cover' alt="" />
                                }
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div>
    )
}
