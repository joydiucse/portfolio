import React from 'react'
import Container from '../../components/common/Container.jsx'
import { Image } from '../../utils/Global.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  { name: 'John Allendale', role: 'Creative manager', quote: 'A complete search of the internet has found the mostsearch of the internet has found the most search of the internet has found the most popular phrase on the web has found the most popular phrase on the web', avatar: 'https://i.pravatar.cc/80?img=12', color: 'bg-yellow-400' },
  { name: 'Ava Thompson', role: 'Product lead', quote: 'I got a job that was in accordance with the story of the world', avatar: 'https://i.pravatar.cc/80?img=32', color: 'bg-emerald-500' },
  { name: 'Michael Chen', role: 'CTO', quote: 'Clean design and fast delivery. Great collaboration throughout.', avatar: 'https://i.pravatar.cc/80?img=3', color: 'bg-rose-500' },
  { name: 'Michael Chen', role: 'CTO', quote: 'Clean design and fast delivery. Great collaboration throughout.', avatar: 'https://i.pravatar.cc/80?img=3', color: 'bg-rose-500' },
  { name: 'Michael Chen', role: 'CTO', quote: 'Clean design and fast delivery. Great collaboration throughout.', avatar: 'https://i.pravatar.cc/80?img=3', color: 'bg-rose-500' },
]

function Testimonials() {
  return (
    <div className={'bg-primary-xlight'}>
      <Container className="py-12">
        <h3 className="text-2xl font-bold mb-3 text-center">People talk about me</h3>
        <p className="text-center text-gray-600 mb-6">I got a job that was in accordance with the story of the world</p>
        <style>{`
          .testimonial-card, .testimonial-card-avater { transition: transform .35s ease, box-shadow .35s ease; }
          .swiper-slide-active .testimonial-card-avater { transform: translateY(-40px); box-shadow: 0 16px 28px rgba(0,0,0,.08); }
          .swiper-slide-active .testimonial-card { transform: translateY(-40px); box-shadow: 0 16px 28px rgba(0,0,0,.08); }
          .swiper-pagination-bullet { width: 10px; height: 10px; transition: transform .3s ease, background-color .3s ease; }
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
                    <Image src={t.avatar} className="size-12 object-cover rounded-full" />
                  </div>
                </div>
                <div className="testimonial-card relative z-10 bg-white px-8 rounded-3xl ring-1 ring-gray-200 pt-10 text-center h-48 flex flex-col justify-between">
                  <div className="grow pb-2 fcc">
                    <p className="text-gray-700 text-sm line-clamp-5">{t.quote}</p>
                  </div>
                  <div className="border-t border-gray-100 py-3">
                    <div className="text-sm font-semibold text-gray-600">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}

export default Testimonials
