import Head from 'next/head'
import Footer from '@components/footer'
import HeroFigure from '@components/fig'
import FeaturedPosts from '@components/featured'
import ContactForm from '@components/contact_form'
import styles from '@styles/front.module.css'
import Link from 'next/link'
import { Button, Card } from '@styles/components'
import { Title, Paragraph } from '@styles/content'
import { Container, Column, Grid, Section } from '@styles/layout'
import { getConfig, getFeaturedPosts } from '@api'


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

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Skraagen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section key="home" ref={refs['home']} id={styles.hero}>
        <div id={styles.hero_inner}>
            <HeroFigure></HeroFigure>
            <img src="/logo.png" className={styles.logo} />
        </div>
        <nav>
          <ul>
            {sections.reverse().map(item => (
              <li key={item.id}><a onClick={() => handleClick(item.id)}>{item.title}</a></li>
            ))}
          </ul>
        </nav>
        <a onClick={() => handleClick("portfolio")} id={styles.hero_description}>
          <img src="icons/arrow-down-outline.svg" alt="Down-arrow" />
        </a>
      </Section>

      <Section key="portfolio" ref={refs['portfolio']} id={styles.work}>
        <Container>
          <Title>My work</Title>
          <Paragraph>I create a large variety of brand designs, <br/>with additional competence in front-end webdesign.</Paragraph>
          <FeaturedPosts>
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
          </FeaturedPosts>
        </Container>
      </Section>

      <Section key="about" ref={refs['about']} id={styles.about}>
        <Container>
          <Grid>
            <div className={styles.about_text}>
              <Title>About me</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non fringilla mauris. Aliquam dapibus mauris eget lacus iaculis commodo vitae ut lorem. Donec posuere porttitor diam, pretium consequat lectus lobortis a. Donec pharetra nibh at feugiat vulputate. Nulla scelerisque ipsum quis ipsum blandit vulputate.</Paragraph>
              <Button>My Story</Button>
            </div>
            <div className={styles.about_img}>
              <img src={'/profile.png'} />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section key="contact" ref={refs['contact']} className={styles.contact}>
        <Container>
          <Grid>
            <Title>Contact</Title>
            <ContactForm />
          </Grid>
        </Container>
      </Section>

      <Footer></Footer>
    </>
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
