import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Footer from '@components/footer'
import PostNav from '@components/post_nav'
import { Container, Section } from '@styles/layout'
import { Title, Paragraph } from '@styles/content'
import { BackButton } from '@styles/components'

export default function PostLayout(props){
  return (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <PostNav type="post" />
    <Section>
      <Container>
        <Title>{props.title}</Title>
        <img style={{height: "350px"}} src={props.image} />
        <Paragraph>
          <div dangerouslySetInnerHTML={{__html:props.content}}/>
        </Paragraph>
      </Container>
    </Section>
  </>
  )
}
