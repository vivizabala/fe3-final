import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { theme } = useContext(ContextGlobal);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const userId = useParams().id;
  const [data, setData] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users/"+userId;
  useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, [url]);

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}      
      <div className={theme}>      
      <h1> Detailed information </h1>
      <div className='detailed__info-container'>
        <h3>{data?.name}</h3>      
        <p>👤 Username: {data?.name}</p> 
        <p>📧 Email: {data?.email}</p> 
        <p>📱 Phone: {data?.phone}</p> 
        <p>🌍 Website: {data?.website}</p>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}      
      </div>
    </>
  )
}

export default Detail

/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
*/