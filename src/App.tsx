//import { FormUser } from "./Components/FormUser";
//import { FormUser_ConHookAparte } from "./Components/Form_ConHookAparte/FormUser_ConHookAparte"

//import { FormUser_ConHookAparte } from './Components'
//import {CustomForm} from './Components'
import type { ReactNode } from 'react'
import { Modal } from './Components'
import { useModalContext } from './Components/Modal/useContext/ModalContext'
import './Styles/FormUserStyles.css' 
import { NavLink } from 'react-router-dom'
// import { useGlobalContext } from './UseContext/global.context'

interface Props{
  children:ReactNode
}

function App({children}:Props) {

  const {setIsOpen} = useModalContext()

  const openModal=()=>{
    setIsOpen(true)
  }
  return (
    <>
      {/* FormUser /> */}
      {/* FormUser_ConHookAparte /> */}
      {/* CustomForm /> */}
      <nav>
        <ul>
          <li><NavLink to="/">Login</NavLink> </li>
          <li><NavLink to="/formulario">Formulario</NavLink> </li>
          <li><NavLink to="/private/dashboard">Dashboard</NavLink> </li>
        </ul>
      </nav>
      {children}
      <p>aqui va a ir el Footer</p>
      <Modal>
        <h1>Prueba Modal</h1>
        <p>Del Modal que estamos utilizando</p>
      </Modal>
      <button onClick={openModal}>Habrete Modal</button> 
    </>
    
  )
}


export default App
