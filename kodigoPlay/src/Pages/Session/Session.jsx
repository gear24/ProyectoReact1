import { RegisterFormComponent } from '../Components/RegisterLoginFormComponent';
import { LoginFormComponent } from '../Components/LoginFormComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../MicroComponents/MainContainer';


export const Session = () => {
    //el primero es variable y luego la funcion con la que modificamos la variable
    const [typeForm,setTypeForm] = useState("login");
    

    return (
        <>
        <Link to="/">Regresar</Link>
        <h1>Manejo de sesion</h1>
        {/* Renderizado Condicional */}
        <MainContainer>
        <nav class="left m scroll">
                <header><img class="circle" src="KodigoMusic2.jpg" /></header>
                <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('login');}}><i>home</i><label>Início</label></a>
                <a><i>explore</i><label>Explora</label></a>
                <a><i>Category</i><label>Categorias</label></a>
                <a><i>login</i><label>Ingresa</label></a>
                <a><i>person</i><label>Crea tu cuenta</label></a>

            </nav>
            
            <nav class="bottom s">
                <a><i>home</i><label>Início</label></a>
                <a><i>explore</i><label>Explora</label></a>
                <a><i>Category</i><label>Categorias</label></a>
                <a><i>login</i><label>Ingresa</label></a>
                <a><i>person</i><label>Crea tu cuenta</label></a>
            </nav>
        <button onClick={() => {setTypeForm('login')}}>Iniciar Sesion</button>
        <button onClick={() => {setTypeForm('signup')}}>Registrarse</button>
        <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('login');}}>Lo mismo pero distinto</a>
        {typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent/>}
        </MainContainer>
        </>
    )
}
