import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


function obtainFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function lookIndexForId(id, favs) {
  let index = -1;
    for (let i  = 0 ; i < favs.length ; i++){
      if(favs[i].id === id){
        index = i;
      }
    }
    return index;
}

const Card = ({ name, username, id, atFavs, setFavsItems}) => {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    // obtain items from local storage
    let favs = obtainFromLocalStorage("favs");
    // looking for "this" card id in favs
    let index = lookIndexForId(id, favs);
    // based on looking result, -1 is not found
    if(index === -1){
      // not found: needs to added
      favs.push({name:name, username:username, id:id});
      setIsFav(true);
    }else{
      // found: needs to be remove
      favs.splice(index, 1);
      setIsFav(false);
    }
    // convert and save
    let favsStringified = JSON.stringify(favs);    
    localStorage.setItem("favs", favsStringified);
  }

  const removeFav = ()=>{
    // obtain items from local storage
    let favs = obtainFromLocalStorage("favs");    
    // looking for "this" card id in favs
    let index = lookIndexForId(id, favs);
    // adding state if this card was found
    if(index !== -1){
      favs.splice(index, 1);
      setIsFav(false);
    }
    // convert and save
    let favsStringified = JSON.stringify(favs);    
    localStorage.setItem("favs", favsStringified);
    setFavsItems(favs); // from external view Favs, for re-rendering
  }

  useEffect(()=>{
    // obtain items from local storage
    let favs = obtainFromLocalStorage("favs");    
    // looking for "this" card id in favs
    let index = lookIndexForId(id, favs);
    // adding state if this card was found
    if(index !== -1){    
      setIsFav(true);
    } 
  }, [id, isFav]);

  const FavIcon= () => {
    return <p>REMOVE🌟</p>;
  }
  
  const NonFavIcon= () => {
    return <p>ADD ⭐</p>;
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}        
        <Link to={"/dentist/"+id}>
          <img src="/images/doctor.jpg" alt="imagen usuario"/>
          <div className="card_name"> {name} </div>  
          <div className="card_username"> {username}</div>          
          <div className="card_id"> {id} </div>          
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={atFavs?removeFav:toggleFav} className={`favButton`}>
          {isFav ? <FavIcon/> : <NonFavIcon/>}
        </button>
    </div>
  );
};

export default Card;
