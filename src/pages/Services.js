import React from 'react'
import styled from "styled-components"
import FollowUs from '../components/FollowUs'

const Services = () => {
  document.title = 'ABA Therapy Services | Acuity Behavior Solutions'

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
            alt="icon"
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
          <h3>Direct ABA Intervention</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/icon2.png"
            alt="icon"
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
          <h3>Supervision</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/home_toy_iconbox1.png"
            alt="icon"
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
          <h3>Parent Consultation</h3>
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/fam-1.png"
            alt="icon"
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
      <FollowUs />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 170px auto;
  text-align: center;

  .services-header {
    margin: 0 auto;
    text-align: center;
    color: #813cc8fa;
    width: clamp(300px, 50%, 600px);
    font-family: Raleway, Arial, Helvetica, sans-serif;
    h1 {
      font-weight: 500;
    }
  }

  .one {
    color: #fff;
    background-color: rgb(133, 61, 181);
  }
  .two {
    color: #222;
    background-color: rgb(255, 230, 23);
    .btn {
      color: #000;
      &:hover {
        color: #222;
      }
    }
  }
  .three {
    color: #fff;
    background-color: rgb(38, 174, 11);
  }
  .four {
    color: #fff;
    background-color: rgb(18, 162, 229);
  }
  .service-type-container {
    margin: 0 auto;
    width: clamp(100px, 100%, 1000px);

    .service {
      background-image: url("https://themes.muffingroup.com/be/toy/wp-content/uploads/2016/02/home_toy_wrap_bg.png");
      background-position: center;
      padding: 20px 10px;
    }

    img {
      max-width: 50%;
    }
  }
  .btn {
    background-color: transparent;
    font-weight: 700;
    padding: 5px;
    border-radius: 99px;
    border: none;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: #d9dddc;
    }
    &:active {
      color: gray;
    }
  }
  @media screen and (min-width: 550px) {
    margin-bottom: 50px;
    .service-type-container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .service {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .btn {
          margin: 10px;
        }
        p {
          height: max(30%, 50%);
        }
        img {
          height: 150px;
          max-width: 90%;
        }
      }
    }
  }
  @media screen and (min-width: 905px) {
    margin: 155px auto;
  }
`
export default Services