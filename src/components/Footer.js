import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>Acuity Behavior Solutions</p>
      <small>
        © 2022 Acuity Behavior Solutions treats patients in Orange County
        (Anaheim, Orange, Long Beach, Costa Mesa, Garden Grove, Huntington
        Beach, Irvine, Laguna Hills, Lake Forest, Mission Viejo, Dana Point,
        Tustin, Fullerton, Buena Park and Santa Ana), in Los Angeles County
        (Bellflower, Burbank, Carson, Compton, Gardena, Hollywood, Inglewood,
        Los Angeles, Malibu, Pasadena and Pomona) and in Riverside County | All
        Rights Reserved.
      </small>
      
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  background-color: #aaf2d4;
  border-top: 1px solid grey;
  border-bottom: 7px solid #8d00ea;
  padding: 0 20px 20px;
  small{
  }
`
export default Footer
