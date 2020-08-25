import { Container } from '@styles/layout'

export default function Footer(){
    return (
        <footer>
          <Container>
            <img src="/logo_sm.png" />
            <p>&copy; Copyright {(new Date().getFullYear())}. Built by Skraagen</p>
          </Container>
        </footer>
    )
}
