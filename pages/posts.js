import Footer from '@components/footer'
import Link from 'next/link'
import Head from 'next/head'
import DefaultLayout from '@components/default'
import { Container, Column, Grid, Section } from '@styles/layout.js'
import { Card, BackButton } from '@styles/components.js'
import { Title, Paragraph } from '@styles/content.js'
import { getConfig, getAllPosts } from '@api/index'
import Router from 'next/router'
import PostNav from '@components/post_nav'
import Fade from "react-reveal"


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Skraagen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostNav type="all" />
      <Section>
        <Container>
        <Fade>
          <Grid left>
            {props.posts.map(function(post, idx){
              return (
                <Link href={'/posts/'+post.slug}>
                  <Column small>
                    <Card small key={idx} style={{backgroundImage: "url(" + post.image + ")"}}>
                      <h3>{post.title}</h3>
                    </Card>
                  </Column>
                </Link>
              )
            })}
          </Grid>
          </Fade>
        </Container>
      </Section>
      <Footer></Footer>
    </>
  )
}

export async function getStaticProps(){
    const config = await getConfig()
    const allPosts = await getAllPosts()

    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}
