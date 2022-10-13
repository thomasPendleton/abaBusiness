import React from 'react'
import styled from 'styled-components'

const Blog = () => {
  return (
    <Wrapper>
      <h1>Blog</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 125px auto;
  text-align: center;
  width: clamp(200px, 50%, 600px);
  //Remove height
  height: calc(100vh - 21rem);

`


export default Blog