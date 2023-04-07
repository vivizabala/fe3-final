import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { changeTheme, theme } = useContext(ContextGlobal);
  
  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>        
        <li><Link to="/">🏠 Home |</Link></li>
        <li><Link to="/contact">📧 Contact |</Link></li>
        <li><Link to="/favs">🌟 Favs |</Link></li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='button__changeTheme' onClick={()=>changeTheme()}>Change theme {theme === "dark" ? <span>🌞</span> : <span>🌙</span> }</button>
    </nav>
  )
}

export default Navbar