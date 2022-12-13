import React from 'react'
import styled from 'styled-components'
import SingleBlog from "../components/SingleBlog"
import { blogData } from "../assets/blogData/blogData"
import image from "../assets/blog1.png"
import { Link } from "react-router-dom"
import { BsClockHistory } from "react-icons/bs"

const Blog = () => {
  document.title = "blog"
  return (
    <Wrapper>
      <h1>Blog</h1>
      <div className="blog-container">
        {blogData.map((blog) => {
          const { id, headline, preview, author, date, timeToRead, image } = blog
          return (
            <BlogWrapper key={id}>
              <div className="image-wrapper">
                <img src={image} alt={headline} />
              </div>
              <div className="content">
                <div className="">
                  <h3>{headline}</h3>
                </div>
                <div className="">
                  <p>
                    {preview} ...<Link to="..">Read More</Link>
                  </p>
                </div>

                <div className="">
                  <p className="author">{author}</p>
                  <small>
                    {date}
                    <BsClockHistory className="clock-icon" /> {timeToRead} min
                    read
                  </small>
                </div>
              </div>
            </BlogWrapper>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: Raleway, Arial, Tahoma, sans-serif;
  margin: 170px auto;
  text-align: center;
  width: clamp(300px, 90%, 1200px);
  h1{
    color: var(--purple)
  }
  .blog-container {
    display: grid;
    grid-gap: 15px;
  }

  @media screen and (min-width: 700px) {
    .blog-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1323px) {
    .blog-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 905px) {
    margin: 155px auto;
  }
`

const BlogWrapper = styled.section`
  /* margin: 20px auto; */
  background-color: #f5f5f5;
  border-radius: 10px;
  object-fit: cover;
  text-align: start;
  box-shadow: 4px 4px 10px 0px rgba(37, 47, 63, 0.5);
  /* padding-bottom: 10px; */

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    min-height: 230px;
  }
  

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 95%;
    height: 185px;
    margin: 10px auto;
    p {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
    a {
      cursor: pointer;
      color: var(--black);
      text-decoration: underline;
      &:hover {
        filter: brightness(1%);
        font-weight: 600;
      }
    }
    small {
      display: flex;
      align-items: center;
    }
    .author {
      /* margin: 10px 0; */
    }
    .clock-icon {
      padding: 0;
      margin: 0px 5px 0 10px;
    }
  }
  @media screen and (min-width: 700px) {
    .content {
      height: 230px;
    }
  }
`

export default Blog