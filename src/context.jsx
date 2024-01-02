import React,{useContext,useState} from "react";




const AppContext=React.createContext();


const AppProvider=({children})=>{
  const [isModel,setModel]=useState(false)
  const [isSideBar,setSideBar]=useState(false)

  const openModel=()=>{
    setModel(true)
    console.log("hello");

  }

  const closeModel=()=>{
    setModel(false)
  }

  const openSideBar=()=>{
    setSideBar(true)
    console.log("hello");
  }

  const closeSideBar=()=>{
    setSideBar(false)
  }
  return <AppContext.Provider value={{isModel,isSideBar,closeModel,openModel,openSideBar,closeSideBar}}>
{children}
  </AppContext.Provider>
}

const useglobalContextProvider=()=> useContext(AppContext);

export {useglobalContextProvider,AppProvider}