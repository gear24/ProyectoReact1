import { RegisterFormComponent } from '../Components/RegisterLoginFormComponent';
import { LoginFormComponent } from '../Components/LoginFormComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../MicroComponents/MainContainer';


export const Session = () => {
    //el primero es variable y luego la funcion con la que modificamos la variable
    
    

    return (
        <>
        {/* <Link to="/">Regresar</Link>
        <h1>Manejo de sesion</h1> */}
        {/* Renderizado Condicional */}
        <MainContainer>
        
        {/* <button onClick={() => {setTypeForm('login')}}>Iniciar Sesion</button>
        <button onClick={() => {setTypeForm('signup')}}>Registrarse</button> */}
        {/*
        <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('login');}}>Lo mismo pero distinto</a>
        {typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent/>*/}
        </MainContainer>
        </>
    )
}
