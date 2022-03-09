import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout(props) {
  const {children} = props
  return (
      <>
        <Header/>
          {children}
        <Footer/>
    </>
  )
}
