import React from "react"
import styled from "styled-components"
// import "./index.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Hero = () => {
  return (
    <Wrapper className="hero-section">
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
              <h4>Acuity Behavior Solutions</h4>
              <h1>
                Dedicated to Helping <br /> Both Parents and Children
              </h1>
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
            <div className="slide-info-container">
              <img
                src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider2/slide2icon.png"
                alt="logo"
              />
              <h4>Acuity Behavior Solutions</h4>
              <h1>ABA Therapy</h1>
              <h3>
                Provides a lifetime of benefits for
                <br />
                children with Autism Spectrum Disorder.{" "}
              </h3>
              <div className="button">
                <button className="contact-us">Learn More</button>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <article className="slide">
            <img
              className="slide-image"
              style={{objectPosition:'right'}}
              src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider/cache/1f265d182127b19577bbd310360a5a46/homepage-slides-FAQ.jpg"
              alt="banner"
            />
            <div className="slide-info-container">
              <img
                src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/slider2/slide3icon.png"
                alt="logo"
              />
              <h4>LEARNING THROUGH PLAY</h4>
              <h1>FAQ about ABA</h1>
              <h3>
                Questions about ABA?
                <br />
                Our FAQ is a great place to start!
              </h3>
              <div className="button">
                <button className="contact-us">Learn More</button>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .swiper-container {
    height: 600px;
    text-align: center;
    cursor: grab;
  }
  .slide-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: center;
    filter: brightness(40%);
  }
  .slide {
    position: relative;
  }

  .slide-info-container {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 90%;
    transform: translatex(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    h1 {
      font-weight: 700;
      font-size: 2rem;
      text-align: center;
      font-family: "Libre Baskerville", "Ariel";
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 0.9rem;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.64);
      /* width: 75%; */
    }
    h4 {
      margin: 0.5rem 0;
    }
    img {
      height: 100px;
      width: 100px;
      margin: 0 auto;
    }
  }

  .contact-us {
    background-color: rgb(55, 189, 60, 0.84);
    font-weight: 700;
    font-size: 1rem;
    margin-top: 40px;
    padding: 20px;
    border-radius: 99px;
    border: none;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
  }
  .contact-us:hover {
    background-color: rgb(55, 189, 60);
  }

  .swiper-slide {
    height: 600px;
  }

  div.swiper-button-prev,
  div.swiper-button-next {
    color: var(--color-primary-transparent);
  }

  span.swiper-pagination-bullet-active {
    background-color: var(--color-primary);
  }
  @media screen and (min-width: 600px) {
    .slide-info-container {
      h1 {
        font-weight: 700;
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.1rem;
      }
    }
  }
  @media screen and (min-width: 906px) {
    .slide-info-container {
      h1 {
        font-weight: 700;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1.1rem;
      }
      .contact-us {
        margin-top: 1rem;
      }
    }
  }
`
export default Hero
