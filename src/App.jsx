import React from 'react'
import HeaderOybek from './components/HeaderOybek'
import SectionOybek from './components/SectionOybek'
import Section2Oybek from './components/Section2Oybek'
import Section3Oybek from './components/Section3Oybek'
import Section4Oybek from './components/Section4Oybek'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section5Oybek from './components/Section5Oybek'
import FooterOybek from './components/FooterOybek'

const App = () => {
  return (
    <div>
        <ToastContainer position="top-right" autoClose={3000} />
      <div>
        <HeaderOybek />
        <SectionOybek />
        <Section2Oybek />
        <Section3Oybek />
        <Section4Oybek />
        <Section5Oybek />
        <FooterOybek />
      </div>
    </div>
  )
}

export default App
