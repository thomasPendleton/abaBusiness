import React from "react"
import styled from "styled-components"
import Logo from "../assets/logo.png"
const Location = () => {
  return (
    <Wrapper>
      <h3>Acuity Behavior Solutions</h3>
      <img src={Logo} alt="acuity logo" />
      <p className="summary">
        We are an experienced group of BCBAs. We are committed to helping
        children grow into functional, happy, healthy adults.
      </p>

      <div className="info-container">
        <article className="business-info">
          <h4>Acuity Behavior Solutions</h4>
          <p>
            <strong>Address: </strong>1820 W. Orangewood Ave., Suite 110, Orange
            , CA, 92868
          </p>
          <p>
            <strong>Telephone: </strong>
            <a href="tel:7146962862">(714) 696-2862</a>
          </p>
          <p>
            <strong>Fax: </strong>
            <a href="fax:714-242-9308">(714) 242-9308</a>
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:info@acuitybehaviorsolutions.com">
              info@acuitybehaviorsolutions.com
            </a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/Acuity+Behavior+Solutions+-+ABA+Therapy+Orange+County/@33.8047943,-117.8824657,13z/data=!4m5!3m4!1s0x0:0x3648f8dc69863d8!8m2!3d33.804509!4d-117.882294?hl=en-US">
              Click here for a map of our location.
            </a>
          </p>
        </article>
        <article className="map">
          <iframe
            title="acuity map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53044.661227019446!2d-117.8824657!3d33.8047943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3648f8dc69863d8!2sAcuity%20Behavior%20Solutions%20-%20ABA%20Therapy%20Orange%20County!5e0!3m2!1sen!2sus!4v1665680216940!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  margin: 50px auto;
  width: 95%;
  .info-container{
    .map{
        height: 450px;
    }
  }
  
  .business-info {
    a {
      color: var(--purple);
    }
  }
  @media screen and (min-width: 905px) {
    h3 {
      color: var(--black);

      font-size: 2rem;
      font-weight: 500;
    }
    .summary {
      font-size: 1.3rem;
      color: var(--black);
    
    margin: auto;
    max-width: 600px;
  
    }
    .info-container {
      margin: 30px auto;
      width: clamp(400px, 100%, 1500px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      .business-info {
        color: var(--black);
        font-size: 1.5rem;
        margin: 0 auto;
        background-color: var(--color-secondary-alt-transparent);
        border-radius: 10px;
        padding: 10px;
        border: 3px solid var(--purple);
        box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
      }
      .map {
        margin: auto 0;
        min-height: 460px;
        max-width: 800px;
        box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
`
export default Location
