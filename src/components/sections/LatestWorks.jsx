import React from 'react'
import Container from '../../components/common/Container.jsx'
import {latestProjects} from '../../data/data.jsx'
import {Link} from "react-router-dom";
import {ReactIcon} from "../common/Icons.jsx";
import { Image } from '../../utils/Global.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
 

function LatestWorks() {
    return (
        <Container className="py-16" id="works">
            <div className="feb">
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
            <div className="mt-10">
                <Swiper
                    //modules={[Pagination]}
                    //pagination={{ clickable: true }}
                    spaceBetween={16}
                    centeredSlides={false}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                >
                    {latestProjects.map((item) => (
                        <SwiperSlide key={item.title} className={'pt-2 pb-12'}>
                            <div className={`rounded-xl p-4 h-[280px] sm:h-[320px] border border-gray-200 dark:border-gray-800 relative overflow-hidden shadow-lg hover:shadow-xl group`}>
                                {/*<div className="absolute inset-0 z-10 pointer-events-none">
                                    <div className={`absolute -left-14 -top-14 size-56 rounded-full bg-white/10 blur-xl`}></div>
                                    <div className={`absolute right-6 top-6 w-40 h-56 rounded-xl ${item.background} `}></div>
                                    <div className={`absolute right-52 top-10 w-28 h-40 rounded-xl  ${item.background} `}></div>
                                </div>*/}
                                <figure className="absolute top-0 left-0 w-full h-full z-[1]">
                                    <img src={item?.image} className={'image-cover'}/>
                                </figure>
                                <div className="absolute inset-0 z-20 bg-gray-900/70  opacity-0 group-hover:opacity-100 transition-opacity duration-300 fcc">
                                    <div className="fc gap-3">
                                        <Link to={'#'} className="fc flex-col items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg  text-white  hover:bg-gray-950/50">
                                            <ReactIcon name={'info'} className="text-base" />
                                            <span>Details</span>
                                        </Link>
                                        <Link to={item?.live} target="_blank" className="fc flex-col items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg  text-white  hover:bg-gray-950/50">
                                            <ReactIcon name={'arrow-up-right'} />
                                            <span>Live Link</span>
                                        </Link>

                                    </div>
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                    <div>
                                        <div className="text-xl font-bold">{item.title}</div>
                                        <div className="text-xs opacity-90 mt-1">{item.summary}</div>
                                    </div>
                                    <div className="feb">
                                        <div className="mt-6 fc flex-wrap gap-2 text-xs">
                                            {item.stack.slice(0,4).map((s, i) => (
                                                <span key={i} className={`inline-block ${item?.btnBackground || 'bg-primary'} text-white font-medium rounded-sm px-1.5 py-0.5`}>{s}</span>
                                            ))}
                                        </div>
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
