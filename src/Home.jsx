import React, { useContext } from 'react'
import { useglobalContextProvider } from './context'


const Home = () => {
  const {openModel,openSideBar}=useglobalContextProvider()
  return  <main>
     <button className="sidebar-toggle" onClick={openSideBar}>menu</button>
     <button className="btn" onClick={openModel}>show toggle</button>
  </main>
}

export default Home
