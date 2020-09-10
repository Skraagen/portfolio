import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Footer from '@components/footer'
import PostNav from '@components/post_nav'
import { Container, Section } from '@styles/layout'
import { Title, Paragraph } from '@styles/content'
import { BackButton } from '@styles/components'
import styled from "styled-components"
import Fade from "react-reveal"
import Page from 'react-page-loading'

const Hero = styled.div `
  width: 100%;
  padding-bottom: 30px;
  height: 30rem;
  display: flex;
  justify-content: center;


  &:after {
    content: "";
    background: ${props => `url(${props.background})`};
    opacity: 0.18;
    left: 0;
    height: 30rem;
    right: 0;
    position: absolute;
    background-size: cover;
    z-index: -1;
    background-color: black;
    background-blend-mode: hard-light;
    background-position: center;
  }
`

const PostSection = styled(Section) `
  & img {
    width: 100%;
    margin-top: 30px;
  }
`

export default function PostLayout(props){
  return (
  <Page loader={"bubble"} color={"#A9A9A9"} size={4}>
    <Head>
      <title>{props.title}</title>
    </Head>
      <PostNav type="post" />
    <Fade>
      <Hero background={props.image}>
        <img style={{height: "350px", "object-fit": "contain", margin: "auto 0", "max-width": "100%"}} src={props.image} />
      </Hero>
    </Fade>
    <PostSection>
      <Container>
        <Title>{props.title}</Title>
        <Paragraph>{props.date}</Paragraph>
        <Paragraph>
          <div dangerouslySetInnerHTML={{__html:props.content}}/>
        </Paragraph>
      </Container>
    </PostSection>
    <Footer></Footer>
  </Page>
  )
}
