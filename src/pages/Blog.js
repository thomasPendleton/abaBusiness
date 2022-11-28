import React from 'react'
import styled from 'styled-components'

const Blog = () => {
  document.title = 'blog'

  return (
    <Wrapper>
      <h1>Blog</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 170px auto;
  text-align: center;

  height: 60vh;
  @media screen and (min-width: 905px) {
    margin: 155px auto;

  }
  //Remove height

`


export default Blog