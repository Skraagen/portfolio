import '../styles/globals.css'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Raleway";
  }

  body {
    background: #181818;
  }
`

const theme = {
  colors: {
    primary: '#FFFFFF',
  },
  sizes: {
    title: '2rem',
  },
  bp: {
    xs: "(max-width: 600px)",
    sm: "(max-width: 800px)",
    lg: "(max-width: 1240px)",
    tablet: "(max-width: ${size.tablet})",
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
