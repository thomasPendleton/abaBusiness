import React from "react"
import styled from "styled-components"
const BoardCertified = () => {
  return (
    <Wrapper>
      <h2>Board Certified Behavior Analysts For Autism In Children</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 50px 0;
  margin: 50px 0;
  background-color: #ffefaa;
  h2 {
    font-family: Raleway, Arial, Tahoma, sans-serif;
    text-size-adjust: 100%;
    color: rgb(1,11,35);
    font-weight: 300;
    font-size: 1.8rem;
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (min-width: 905px) {
   h2{
    font-size: 2.2rem;
   } 

  }
`
export default BoardCertified
