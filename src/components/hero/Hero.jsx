import React from 'react'
import './index.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Hero = () => {
  return (
    <section className="hero-section">
      <Swiper
        className="swiper-container"
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="swiper-slide">
          <article className="slide">
            <img
              className="slide-image"
              src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider/cache/9bb11a16524fb7b3f6865cc60b2b6fd5/contact-us-banner.jpg"
              alt="banner"
            />
            <div className="slide-info-container">
              <img
                src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider2/slide1icon.png"
                alt="logo"
              />
              <h1>Dedicated to Helping Both Parents and Children</h1>
              <h3>
                We love helping families grow happily and healthily together
                <br />
                Call for a free phone consultation today!
              </h3>
              <div className="button">
                <button className="contact-us">Contact Us</button>
              </div>
              
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <article className="slide">
            <img
              className="slide-image"
              src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider/cache/8044d60937106ace32ec8e0e6a2b863c/image2.jpg"
              alt="banner"
            />
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <article className="slide">
            <img
              className="slide-image"
              src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider/cache/1f265d182127b19577bbd310360a5a46/homepage-slides-FAQ.jpg"
              alt="banner"
            />
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
