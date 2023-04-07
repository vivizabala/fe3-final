import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from "../Components/utils/global.context";
const Footer = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <footer className={theme}>                
        <img src="./images/DH.png" alt='DH-logo' />
        <div className='footer_icons-container'>
          <img src="./images/ico-facebook.png" alt="" />
          <img src="./images/ico-instagram.png" alt="" />
          <img src="./images/ico-tiktok.png" alt="" />
          <img src="./images/ico-whatsapp.png" alt="" />
        </div>
    </footer>
  )
}

export default Footer
