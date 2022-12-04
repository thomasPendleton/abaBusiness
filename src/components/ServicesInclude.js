import React from "react"
import styled from "styled-components"
import iconbox1 from "../assets/home_toy_iconbox1.png"
import iconbox2 from "../assets/home_toy_iconbox2.png"
import iconbox3 from "../assets/home_toy_iconbox3.png"
import iconbox4 from "../assets/home_toy_iconbox4.png"

const ServicesInclude = () => {


  return (
    <Wrapper>
      <h3>Our Services Include</h3>
      <div className="service-container">
        <div className="service">
          <img src={iconbox1} alt="icon" />
          <h4>Direct ABA Intervention</h4>
          <p>
            Direct ABA intervention includes skill teaching and implementation
            of strategies to reduce inappropriate behavior. Behavior
            Interventionists are trained in behavior management, skill teaching,
            DTT, NET, and many other methodologies to ensure quality of
            services.
          </p>
        </div>
        <div className="service">
          <img src={iconbox2} alt="icon" />
          <h4>Parent Consultation</h4>
          <p>
            Parent consultation provides parents with the tools and skills to
            implement the techniques and strategies of ABA on their own. Our
            parent training curriculum is adaptable for parents/caregivers at
            any level.
          </p>
        </div>
        <div className="service">
          <img src={iconbox3} alt="icon" />
          <h4>Supervision</h4>
          <p>
            Supervision is provided by a BCBA, a Board Certified Behavior
            Analyst, who is trained in the supervision of cases. Supervision
            includes modeling, teaching, feedback, and data analysis.
            Supervisors at Acuity Behavior Solutions provide individualized
            programs for each client and modify programs/skills being taught in
            order to maximize skill teaching.
          </p>
        </div>
        <div className="service">
          <img src={iconbox4} alt="icon" />
          <h4>Assessment</h4>
          <p>
            Assessment guides our intervention. Our comprehensive assessments
            cover a wide range of areas with a specific focus on areas of autism
            in children and difficulty for individuals with autism.
            Communication, social, and behavioral skills are a common focus.
            Assessment of behaviors at Acuity Behavior Solutions includes a
            functional behavior assessment.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: Raleway, Arial, Helvetica, sans-serif;
  margin: 0 auto;
  width: clamp(300px, 90%, 1200px);
  h3 {
    font-size: 2rem;
  }
  .service-container {
    margin: 0 auto;
  }
  @media screen and (min-width: 600px) {
    .service-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 35px;
    }
  }
  @media screen and (min-width: 1000px) {
    .service-container {
      font-size: 1.2rem;
      /* grid-template-columns: 1fr 1fr 1fr 1fr; */
      gap: 50px;
    }
  }
`
export default ServicesInclude
