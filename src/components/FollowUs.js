import React from 'react'
import styled from 'styled-components'

const FollowUs = () => {
  return (
    <Wrapper>
        <h3>Follow Us On Social Media</h3>
        <a href="https://www.facebook.com/acuitybehaviorsolutions/" target='_blank' rel="noreferrer" className='social-link'><img src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/facebook-n.png" alt="" /></a>
        <a href="https://twitter.com/AcuityABA" target='_blank' rel="noreferrer" className='social-link'><img src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/twitter-n.png" alt="" /></a>
        <a href="https://www.instagram.com/AcuityABA/" target='_blank' rel="noreferrer" className='social-link'><img src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/instagram-n.png" alt="" /></a>
        <a href="https://www.pinterest.com/acuitybehavior/" target='_blank' rel="noreferrer" className='social-link'><img src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/pinterest-n.png" alt="" /></a>
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