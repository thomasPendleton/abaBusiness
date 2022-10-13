import React from 'react'
import styled from 'styled-components'
import Twitter from '../assets/twitter-n.png'
import Facebook from '../assets/facebook-n.png'
import Pinterest from '../assets/pinterest-n.png'
import Instagram from '../assets/instagram-n.png'


const FollowUs = () => {
  return (
    <Wrapper>
        <h3>Follow Us On Social Media</h3>
        <a href="https://www.facebook.com/acuitybehaviorsolutions/" target='_blank' rel="noreferrer" className='social-link'><img src={Facebook} alt="facebook link" /></a>
        <a href="https://twitter.com/AcuityABA" target='_blank' rel="noreferrer" className='social-link'><img src={Twitter} alt="twitter link" /></a>
        <a href="https://www.instagram.com/AcuityABA/" target='_blank' rel="noreferrer" className='social-link'><img src={Instagram} alt="instagram link" /></a>
        <a href="https://www.pinterest.com/acuitybehavior/" target='_blank' rel="noreferrer" className='social-link'><img src={Pinterest} alt="pinterest link" /></a>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align: center;
font-family: Raleway, Arial,sans-serif;
font-size: 1.4rem;
margin: 30px auto;
color: var(--black);
h3{
    margin: 20px auto;
}
.social-link{
    max-width: 100px;
    margin: 0 10px ;
    transition: filter 400ms ease;
    img{
        width: 50px;
    }
    &:hover{
        filter: drop-shadow(2px 2px 3px rgba(0,0,0, 0.5))
    }
}
@media screen and (min-width: 500px) {
    font-size: 2rem;

}
`
export default FollowUs