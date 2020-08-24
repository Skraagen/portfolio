import Head from 'next/head'
import Link from 'next/link'
import Footer from '@includes/footer'

export default function PostLayout(props){
  return (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <article>
      <h1>{props.title}</h1>
      <img src={props.image} />
      <div dangerouslySetInnerHTML={{__html:props.content}}/>
      <div><Link href='/'><a>Home</a></Link></div>
    </article>
    <Footer>
    </Footer>
  </>
  )
}
