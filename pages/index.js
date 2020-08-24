import Head from 'next/head'
import Footer from '@includes/footer'
import styles from '../styles/front.module.css'
import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

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

      <section key="home" ref={refs['home']} className={styles.hero}>
        <div className={styles.hero_nav}>
          <ul>
            {sections.reverse().map(item => (
              <li key={item.id}><a onClick={() => handleClick(item.id)}>{item.title}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.hero_inner}>
          <img className={styles.logo} src="/logo.png" />
        </div>
      </section>

      <section key="portfolio" ref={refs['portfolio']} className={styles.work}>
        <div className={styles.container}>
          <h1 className={styles.title}>My work</h1>
          <p className={styles.description}>I create a large variety of brand designs, <br/>with additional competence in front-end webdesign.</p>
          <div className={styles.grid}>
            <DefaultLayout title={props.title} description={props.description}>
              {props.posts.map(function(post, idx){
                return (
                  <Link href={'/posts/'+post.slug}>
                      <a key={idx} className={styles.card} style={{backgroundImage: "url(" + post.image + ")"}}>
                        <h3>{post.title}</h3>
                      </a>
                  </Link>
                )
              })}
            </DefaultLayout>
          </div>
        </div>
      </section>

      <section key="about" ref={refs['about']} className={styles.about}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.about_text}>
              <h1 className={styles.title}>About me</h1>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non fringilla mauris. Aliquam dapibus mauris eget lacus iaculis commodo vitae ut lorem. Donec posuere porttitor diam, pretium consequat lectus lobortis a. Donec pharetra nibh at feugiat vulputate. Nulla scelerisque ipsum quis ipsum blandit vulputate.</p>
            </div>
            <div className={styles.about_img}>
              <img src={'/profile.png'} />
            </div>
          </div>
        </div>
      </section>

      <section key="contact" ref={refs['contact']} className={styles.contact}>
        <div className={styles.container}>
        <div className={styles.grid}>
          <h1 className={styles.title}>Contact</h1>
          <form class="contact_form validate_form">

    				<div class="wrap_input rs1_wrap_input validate_input" data-validate="Name is required">
    					<span class="label_input">Your Name</span>
    					<input class="input" type="text" name="name" placeholder="Enter your name"/>
    					<span class="focus_input"></span>
    				</div>

    				<div class="wrap_input rs1_wrap_input validate_input" data-validate="Valid email is required: ex@abc.xyz">
    					<span class="label_input">Email</span>
    					<input class="input" type="text" name="email" placeholder="Enter your email addess"/>
    					<span class="focus_input"></span>
    				</div>

    				<div class="wrap_input validate_input" data-validate="Message is required">
    					<span class="label_input">Message</span>
    					<textarea class="input" name="message" placeholder="Your message here..."></textarea>
    					<span class="focus_input"></span>
    				</div>

    				<div class="container_contact_form_btn">
    					<button class="contact_form_btn">
    						<span>
    							Submit
    						</span>
    					</button>
    				</div>
    			</form>
        </div>
        </div>
      </section>

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
