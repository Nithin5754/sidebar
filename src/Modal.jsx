import React from 'react'
import { useglobalContextProvider } from './context'
const Modal = () => {
  const {isModel,closeModel}=useglobalContextProvider()
  return(
    <div className={`${isModel?'modal-overlay show-modal':'model-overlay'}`}>
      <div className="modal-container">
          <h3>model container</h3>
          <button className="close-modal-btn" onClick={closeModel}>x</button>
      </div>
     
    </div>
  )
}

export default Modal
