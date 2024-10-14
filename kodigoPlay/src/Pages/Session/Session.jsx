import { RegisterFormComponent } from '../Components/RegisterLoginFormComponent';
import { LoginFormComponent } from '../Components/LoginFormComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export const Session = () => {
    //el primero es variable y luego la funcion con la que modificamos la variable
    const [typeForm,setTypeForm] = useState("login");
    

    return (
        <>
        <Link to="/">Regresar</Link>
        <h1>Manejo de sesion</h1>
        {/* Renderizado Condicional */}
        <button onClick={() => {setTypeForm('login')}}>Iniciar Sesion</button>
        <button onClick={() => {setTypeForm('signup')}}>Registrarse</button>
        {typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent/>}
        </>
    )
}
