import React from 'react'
import { useContext } from 'react';
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <>
      <div className={'contact__container '+theme}>
        <h1>Want to know more?</h1>
        <p className='p_descriptor'>Send us your questions and we will contact you</p>
        <Form/>
      </div>
    </>
  )
}

export default Contact