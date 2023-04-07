import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialTheme = "light";

export const initialState = {theme: initialTheme, data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  /** Related to data from API */
  const [data, setData] = useState(null);
  const  fetchData = async () => {   
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);  
  const memoizedData = useMemo(() => data, [data]);

   /** Related to theme management */
  const [theme, setTheme] = useState(initialTheme);
  const changeTheme = () =>{
    setTheme(theme === "light" ? "dark" :  "light");    
    console.log("cambio de tema, ahora es: " + theme);
  }

  /** Payload building for shared context */
  const payload = {
    theme, changeTheme, data:memoizedData,  
  };

  return (
    <ContextGlobal.Provider value={payload}>
      {children}
    </ContextGlobal.Provider>
  );
};
