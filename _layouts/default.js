import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'

export default function DefaultLayout(props){
    return (
      <>
        {props.children}
      </>
    )
}
