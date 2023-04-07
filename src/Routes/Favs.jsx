import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from 'react'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Favs = () => {

  const { theme } = useContext(ContextGlobal);
  const [favsItems, setFavsItems] = useState([]);

  useEffect(()=>{
    let favsString = localStorage.getItem("favs");
    let favs = JSON.parse(favsString);    
    if(favs == null){
      favs = [];
    }    
    setFavsItems(favs);    
  }, []);
  
  return (
    <>
      <div className={theme}>
      <h1>Dentists Favs</h1>
       {/* este componente debe consumir los destacados del localStorage */}
      {favsItems.length===0
      ? <p className='p_descriptor'> No favs yet, go home and select some dentists </p>
      : <p className='p_descriptor'> These are your favorite dentists </p>}
      <div className="card-grid">       
        {/* Deberan renderizar una Card por cada uno de ellos */}                
        {favsItems?.map(user=>
          <Card
            name={user.name}
            username={user.username}
            id={user.id}
            key={user.id}
            atFavs={true}
            setFavsItems={setFavsItems}
            >
          </Card>
        )}        
      </div>
      </div>
    </>
  );
};

export default Favs;
