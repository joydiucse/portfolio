import React, { useState } from 'react'
import Container from '../../components/common/Container.jsx'
import { Image } from '../../utils/Global.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {image} from "../../utils/media.js";
import { Dialog, DialogContent, IconButton } from '@mui/material'
import {ReactIcon} from "../common/Icons.jsx";

const testimonials = [
  {
    name: 'Nusrat Easmin',
    role: 'Business Analyst',
    company: '',
    statement: 'Joynal quickly understands requirements and delivers scalable, efficient solutions. He’s reliable, communicative, and always strives for excellence. Working with him has been a great experience.',
    avatar: image('/testimonials/nusrat-easmin.jpg'),
    color: 'bg-yellow-400'
  },
  {
    name: 'Moshahed Alam',
    role: 'Principal Software Engineer',
    statement: 'He writes clean, efficient code and solves problems fast. I’m truly pleased with his contributions.',
    avatar: image('/testimonials/moshahed-alam.jpg'),
    color: 'bg-emerald-500'
  },
  {
    name: 'Tahmid Hossen',
    role: 'Founder & CTO',
    company: 'Web Amex',
    statement: 'Dependable and technically strong—Joynal consistently improves our system. I’m very satisfied with his work.',
    avatar: image('/testimonials/tahmid-hossain.jpg'),
    color: 'bg-rose-500'
  },
  {
    name: 'Rafiqul Islam',
    role: 'Principal Software Engineer',
    company: '',
    statement: 'Joynal brings deep technical knowledge and strong ownership. He builds secure, optimized applications and collaborates effectively with the team.',
    avatar: image('/testimonials/rafiqul-islam.jpg'),
    color: 'bg-rose-500'
  }
]

function Testimonials() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const handleOpen = (t) => { setSelected(t); setOpen(true) }
  const handleClose = () => setOpen(false)
  return (
    <div className={'bg-primary-xlight'}>
      <Container className="py-12" id="testimonials">
        <h3 className="text-2xl font-bold mb-3 text-center">People talk about me</h3>
        <p className="text-center text-gray-600 mb-6">I got a job that was in accordance with the story of the world</p>
        <style>{`
          .testimonial-card, .testimonial-card-avater { transition: transform .35s ease, box-shadow .35s ease; }
          .swiper-slide-active .testimonial-card-avater { transform: translateY(-40px); box-shadow: 0 16px 28px rgba(0,0,0,.08); }
          .swiper-slide-active .testimonial-card { transform: translateY(-40px); box-shadow: 0 16px 28px rgba(0,0,0,.08); }
          .swiper-pagination-bullet { width: 10px; height: 10px; background-color: #009966; transition: transform .3s ease, background-color .3s ease; }
          .swiper-pagination-bullet-active { transform: scale(1.25); background-color: #009966; }
          .swiper-pagination { transform: translateY(-32px); }
        `}</style>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          centeredSlides={true}
          breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="pt-20 pb-12 px-1">
              <div className="relative overflow-visible">
                <div className="testimonial-card-avater absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                  <div className={`size-12 rounded-full ${t.color} grid place-items-center ring-4 ring-white drop-shadow-md`}></div>
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image src={t.avatar} className="size-12 object-cover rounded-full"/>
                  </div>
                </div>
                <div className="testimonial-card relative z-10 bg-white dark:bg-gray-900 px-8 rounded-3xl ring-1 ring-gray-200 dark:ring-0 pt-10 text-center h-48 flex flex-col justify-between cursor-pointer" onClick={() => handleOpen(t)}>
                  <div className="grow pb-2 fcc">
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-5">{t.statement}</p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-800 py-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{t.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">{t.role}</div>
                    {t?.company && (
                        <div className="text-sm text-gray-600 dark:text-gray-500 font-medium">{t?.company}</div>
                    )}
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{ className: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl shadow-xl' }}
          slotProps={{ backdrop: { className: 'bg-black/40 dark:bg-black/60 backdrop-blur-sm' } }}
        >
          <DialogContent className="relative p-6">
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 inline-flex items-center justify-center size-8 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ReactIcon name={'close'} className="text-gray-700 dark:text-gray-300" />
            </button>
            <div className="fc gap-4">
              <div className="w-48 fce">
                <Image src={selected?.avatar} className="size-16 object-cover rounded-full ring-2 ring-gray-200 dark:ring-gray-700" />
              </div>
              <div className="col-span-3">
                <div className="fc gap-3">
                  <div className="">
                    <span className="inline-flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 p-1 rotate-3">
                      <ReactIcon name={'quote'} className="text-4xl text-primary/70 dark:text-primary/80" />
                    </span>
                  </div>
                  <div className="">
                    <p className="font-semibold">{selected?.name}</p>
                    <p className="text-xsm text-gray-600 dark:text-gray-400">{selected?.role} {selected?.company && <span>• {selected?.company}</span>}</p>
                  </div>
                </div>

                <div className="mt-2 ml-5 pl-3 py-2 border-l border-gray-400 border-dashed relative">
                  <div className="fcc absolute -left-1 -bottom-2">
                    <div className={`size-2 rounded-full bg-gray-400 `}></div>
                  </div>
                  <p className="text-sm text-gray-800 dark:text-gray-200">{selected?.statement}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  )
}

export default Testimonials
