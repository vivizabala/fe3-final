import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { data, theme } = useContext(ContextGlobal);

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data?.map(user=>
          <Card name={user.name} username={user.username} id={user.id} key={user.id} ></Card>
        )}       
      </div>
    </main>
  )
}

export default Home