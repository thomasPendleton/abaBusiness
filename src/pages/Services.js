import React from 'react'
import styled from "styled-components"

const Services = () => {
  return (
    <Wrapper>
      <div className="services-header">
        <h1>Our Services</h1>
        <h2>
          Learn more about the autism services in Orange County California
        </h2>
        <p>We provide at Acuity Behavior Solutions</p>
      </div>

      <div className="service-type-container">
        <div className="service one">
          <h3>Assessment</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/icon1-1.png"
            alt=""
          />
          <p>
            Assessment guides our intervention. Our comprehensive assessments
            cover a wide range of areas with a specific focus in areas of
            difficulty for individuals with autism. Communication, social, and
            behavioral skills are a common focus. Assessment of behaviors at
            Acuity Behavior Solutions includes a functional behavior assessment.
            This is crucial to intervention, and a definite best practice.
          </p>
          <button className="btn">See More</button>
        </div>
        <div className="service two">
          <h3>Assessment</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/icon2.png"
            alt=""
          />
          <p>
            Direct service includes home and community based behavioral
            intervention services provided by a qualified associate, and
            supervised by a BCBA (Board Certified Behavior Analyst). Direct ABA
            intervention includes skill teaching and implementation of
            strategies to reduce inappropriate behavior. Behavior
            Interventionists are trained in behavior management, skill teaching,
            DTT, NET, and many other methodologies to ensure quality of
            services.
          </p>
          <button className="btn">See More</button>
        </div>
        <div className="service three">
          <h3>Assessment</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/home_toy_iconbox1.png"
            alt=""
          />
          <p>
            Supervision is provided by a BCBA, a Board Certified Behavior
            Analyst, who is trained in supervision of cases. Supervision
            includes modeling, teaching, feedback, and data analysis.
            Supervisors at Acuity Behavior Solutions provide individualized
            programs for each client, and modify programs/skills being taught in
            order to maximize skill teaching.
          </p>
          <button className="btn">See More</button>
        </div>
        <div className="service four">
          <h3>Assessment</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/fam-1.png"
            alt=""
          />
          <p>
            Parent consultation provides parents with the tools and skills to
            implement the techniques and strategies of ABA on their own. Our
            parent training curriculum is adaptable for parents/caregivers at
            any level.
          </p>
          <button className="btn">See More</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  color: #852ebd;
  .services-header {
    margin: 0 auto;
    text-align: center;
    width: clamp(300px, 50%, 600px);
    font-family: Raleway, Arial, Helvetica, sans-serif;
    h1 {
      /* color: purple; */
      font-weight: 500;
    }
  }

  .one {
    background-color: yellow;
  }
  .two {
    background-color: purple;
  }
  .three {
    background-color: green;
  }
  .four {
    background-color: lightblue;
  }
  .service-type-container {
    .service {
      border: 2px solid red;
      padding: 20px 10px;
    }

    img {
      max-width: 50%;
    }
  }
  @media screen and (min-width: 500px) {
    .service-type-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default Services