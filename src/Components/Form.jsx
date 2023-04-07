import React from "react";
import { useState } from "react";

const Form = (props) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullname, setFullname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // initial values
    setError("Por favor verifique su información nuevamente");
    setSubmitted(false);    
    if(fullname === ""){
      console.log("Error", "Por favor verifique su información nuevamente");
      return
    }

    if(userEmail === ""){
      console.log("Error", "Por favor verifique su información nuevamente");
      return
    }

    if(fullname.length<5){
      console.log("Error", "Debe tener más 5 o más carácteres");
      return
    }

    const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    if(regex.test(userEmail) === false){
      console.log("Error", "El correo no parece válido");
      return
    }

    setError("");
    setMessage(`Gracias ${fullname}, te contactaremos cuando antes vía mail`);
    setSubmitted(true);
    console.log("Ok", "se ha enviado el mensaje");
  }

  const ErrorFeedback= () => {
    return <p className='p_descriptor error'>{error}</p>;
  }
  
  const SuccessFeedback= () => {
    return <p className='p_descriptor'>{message}</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>¿Whats your name?</label>
            <input 
            type="text"
            placeholder="Insert your Fullname"
            value={fullname}
            onChange={((e)=>setFullname(e.target.value))}
            />
            <label>¿Whats your email?</label>
            <input
            type="email"
            placeholder="Insert your email"
            value={userEmail}
            onChange={((e)=>setUserEmail(e.target.value))}
            />
            <button type="submit">Enviar 🚀</button>            
      </form>
      {submitted ? SuccessFeedback() : ErrorFeedback()}      
    </div>
  );
};

export default Form;
