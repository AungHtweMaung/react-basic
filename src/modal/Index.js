import React from 'react'
import './Index.css'
import ReactDOM from 'react-dom'

export default function Modal({children, setModal, danger = false}) {

  let className = danger ? 'border-red' : 'border-green'

  return (
    ReactDOM.createPortal
    (
      <div className='modal-component'>
          <div className='modal-backdrop'>
          <div className={`modal ${className}`}>
              <h3>{children}</h3>
              <button onClick={()=>setModal(false)}>Close</button>
          </div>
        </div>
      </div>, document.getElementById('modal'))
  )
}


