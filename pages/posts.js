import Footer from '@components/footer'
import Link from 'next/link'
import Head from 'next/head'
import DefaultLayout from '@components/default'
import { Container, Column, Grid } from '@styles/layout.js'
import { Card, Button } from '@styles/components.js'
import { getConfig, getAllPosts } from '@api'




export default function Home(props) {
  return (
    <>
      <Head>
        <title>Skraagen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid>
          {props.posts.map(function(post, idx){
            return (
              <Link href={'/posts/'+post.slug}>
                <Column>
                  <Card key={idx} style={{backgroundImage: "url(" + post.image + ")"}}>
                    <h3>{post.title}</h3>
                  </Card>
                </Column>
              </Link>
            )
          })}
        </Grid>
        <Link href='/'><Button>Home</Button></Link>
      </Container>
      <Footer />
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
