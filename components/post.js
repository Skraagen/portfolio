import Head from 'next/head'
import Link from 'next/link'
import Footer from '@components/footer'
import { Container, Section } from '@styles/layout'
import { Title, Paragraph } from '@styles/content'
import { Button } from '@styles/components'

export default function PostLayout(props){
  return (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Container>
      <Section>
        <Title>{props.title}</Title>
        <img style={{width: "100%"}} src={props.image} />
        <Paragraph>
          <div dangerouslySetInnerHTML={{__html:props.content}}/>
          </Paragraph>
        <div><Link href='/'><Button>Home</Button></Link></div>
      </Section>
    </Container>
    <Footer>
    </Footer>
  </>
  )
}
