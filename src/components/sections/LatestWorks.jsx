import React from 'react'
import Container from '../../components/common/Container.jsx'
import {latestProjects} from '../../data/data.jsx'
import {Link} from "react-router-dom";
import {ReactIcon} from "../common/Icons.jsx";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function LatestWorks() {
    return (
        <Container className="py-12" id="works">
            <div className="fcb">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold">My Latest Works</h3>
                    <p className="text-sm">Perfect Solution for digital experience</p>
                </div>
                <div className="hidden sm:block">
                    <Link to={'#'} className={'text-sm text-primary font-semibold fc gap-2 hover-border'}>
                        <span>Explore More Works</span> <ReactIcon name={'right-arrow'}/>
                    </Link>
                </div>
            </div>
            <div className="">
                <Swiper
                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {latestProjects.map((item, index) => (
                        <SwiperSlide key={index} className={'py-8'}>
                            <div className={`rounded-3xl p-6 h-[280px] sm:h-[320px] ${item.background} text-white relative overflow-hidden shadow-lg hover:shadow-xl`}>
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute -left-14 -top-14 size-56 rounded-full bg-white/10 blur-xl"></div>
                                    <div className="absolute right-6 top-6 w-40 h-56 rounded-xl bg-white/15"></div>
                                    <div className="absolute right-52 top-10 w-28 h-40 rounded-xl bg-white/10"></div>
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="">
                                        <div className="text-2xl font-bold">{item.title}</div>
                                        <div className="text-sm/5 opacity-90 mt-1">{item.summary}</div>
                                    </div>
                                    <div className="mt-6 fc gap-2 text-xs">
                                        {item.stack.slice(0,4).map((s, i) => (
                                            <span key={i} className="inline-block bg-black/40 rounded px-2 py-1">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </Container>
    )
}

export default LatestWorks
