import Head from 'next/head'
import Footer from '@components/footer'
import HeroFigure from '@components/fig'
import FeaturedPosts from '@components/featured'
import ContactForm from '@components/contact_form'
import styles from '@styles/front.module.css'
import Link from 'next/link'
import { ForwardButton, Card } from '@styles/components'
import { Title, Paragraph } from '@styles/content'
import { Container, Column, Grid, Section } from '@styles/layout'
import { getConfig, getFeaturedPosts } from '@api/index'
import * as React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "@api/window"
import Fade from "react-reveal"
import Page from 'react-page-loading'

const sections = [{id: 'home', title: 'Home'}, {id: 'portfolio', title: 'Portfolio'}, {id:'about', title: 'About me'}, {id:'contact', title: 'Contact'}];

const refs = sections.reduce((acc, value) => {
  acc[value.id] = React.createRef();
  return acc;
}, {});

const handleClick = id =>
  refs[id].current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

const width = 0;

export default function Home(props) {

  const {windowHeight} = useWindowSize();

  const ParallaxTitle = ({ src, }, prop) => {
    const { scrollY } = useViewportScroll();

    const yRange = [0, windowHeight, windowHeight, windowHeight*2]
    const transformRange = [-100, 0, 0, 0]
    const x = useTransform(scrollY, yRange, transformRange)


    return (
      <div>
        <motion.div style={{ x }}>
          <Title>Some of my work</Title>
          <Paragraph>I'm a graphics designer and front-end developer.</Paragraph>
        </motion.div>
      </div>
    );
  };

  return (
    <Page loader={"bubble"} color={"#A9A9A9"} size={4}>
      <Head>
        <title>Skraagen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section key="home" ref={refs['home']} id={styles.hero}>
        <Fade>
          <div id={styles.hero_inner}>
              <HeroFigure></HeroFigure>
              <img src="/logo.png" className={styles.logo} />
          </div>
        </Fade>
        <nav>
          <Fade top cascade>
            <ul>
              <li key="contact"><a onClick={() => handleClick("contact")}>Contact</a></li>
              <li key="about"><a onClick={() => handleClick("about")}>About me</a></li>
              <li key="portfolio"><a onClick={() => handleClick("portfolio")}>My work</a></li>
              <li key="home"><a onClick={() => handleClick("home")}>Home</a></li>
            </ul>
          </Fade>
        </nav>

        <a onClick={() => handleClick("portfolio")} id={styles.hero_description}>
          <img src="icons/arrow-down-outline.svg" alt="Down-arrow" />
        </a>
      </Section>

      <Section key="portfolio" ref={refs['portfolio']} id="fromPosts">
        <Container>
          <Fade left>
            <Title>Some of my work</Title>
            <Paragraph>I'm a graphics designer and front-end developer.</Paragraph>
          </Fade>
          <Fade bottom>
            <FeaturedPosts>
              {props.posts.map(function(post, idx){
                return (
                  <Link href={'/posts/'+post.slug}>
                    <Column>
                      <Card key={idx} style={{backgroundImage: "url(" + post.image + ")"}}>
                      </Card>
                    </Column>
                  </Link>
                )
              })}
            </FeaturedPosts>
          </Fade>
        </Container>
      </Section>

      <Section key="about" ref={refs['about']}>
        <Container>
          <Grid>
            <Fade left>
            <div className={styles.about_text}>
              <Title>About me</Title>
              <Paragraph>
                I'm a 19-year-old digital enthusiast that strives for perfection. I've loved creating things and finding functional solutions my whole life. My graphic design adventure began when I was 10 years old, starting to create logos and designs for Minecraft communities in Photoshop. Since then I have ventured into other mediums, such as website design, programming, sound production and more.
              </Paragraph>
              <Paragraph>
                I love to improve and learn new things. My strongest skillset currently consists of branding, digital marketing, webdevelopment and graphic design.
              </Paragraph>
            </div>
            </Fade>
            <Fade bottom>
              <div className={styles.about_img}>
                <img src={'/profile.png'} />
              </div>
            </Fade>
          </Grid>
        </Container>
      </Section>

      <Section key="contact" ref={refs['contact']}>
        <Container>
          <Grid style={{textAlign: 'center'}}>
            <Fade left>
            <div className={styles.about_text}>
              <Title>Contact me</Title>
              <Paragraph>
                Do you have an idea that you want to realize? Do you need help creating a solid brand? Feel free to send me an email about any enquiries.
              </Paragraph>
              <Paragraph>
                E-Mail: <a href="mailto: skraagen@hotmail.com">skraagen@hotmail.com</a>
              <br />Location: Trondheim, Norway
              </Paragraph>
            </div>
          </Fade>
          </Grid>
        </Container>
      </Section>

      <Footer></Footer>
    </Page>
  )
}

export async function getStaticProps(){
    const config = await getConfig()
    const allPosts = await getFeaturedPosts()

    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}
