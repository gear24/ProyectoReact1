import KodigoMusic2 from "../assets/img/KodigoMusic2.jpg";
import { useState, useContext } from 'react';
import { RegisterFormComponent } from '../Pages/Components/RegisterLoginFormComponent';
import { LoginFormComponent } from '../Pages/Components/LoginFormComponent';
import { UserContext } from '../Context/UserDataContext';
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Config";
import { useNavigate } from "react-router-dom";

const MainContainer = ({ children }) => {
  const [typeForm, setTypeForm] = useState(null); // Inicializado en null
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Función para cerrar sesión
  const logout = () => {
    signOut(auth).then(() => {
      alert("Sesion cerrada");
      setUser(null);
      navigate("/");
    }).catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
  };

  const goHome = () => {
    setTypeForm(null); // Limpiar el formulario al ir a Home
    navigate("/");
  };

  return (
    
      <div className="responsive max">

        <nav className="left l m scroll">
          <header><img className="circle" src={KodigoMusic2} alt="Kodigo Music" /></header>

          <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }}><i>home</i><label>Início</label></a>
          <a><i>explore</i><label>Explora</label></a>
          <a><i>Category</i><label>Categorias</label></a>

          {user ? (
            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i>logout</i><label>Cerrar sesión</label></a>
          ) : (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('signup'); }}><i>person</i><label>Crea tu cuenta</label></a>
              <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('login'); }}><i>login</i><label>Ingresa</label></a>
            </>
          )}
        </nav>

        <nav className="bottom s">
          <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }}><i>home</i><label>Início</label></a>
          <a><i>explore</i><label>Explora</label></a>
          <a><i>Category</i><label>Categorias</label></a>
          {user ? (
            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i>logout</i><label>Cerrar sesión</label></a>
          ) : (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('signup'); }}><i>person</i><label>Crea tu cuenta</label></a>
              <a href="#" onClick={(e) => { e.preventDefault(); setTypeForm('login'); }}><i>login</i><label>Ingresa</label></a>
            </>
          )}
        </nav>

        {/* Mostrar el formulario solo si se selecciona explícitamente */}
        {!user && typeForm === "login" && <LoginFormComponent />}
        {!user && typeForm === "signup" && <RegisterFormComponent />}

        {/* Mostrar el contenido solo si NO se ha seleccionado un formulario */}
        {/* {!typeForm && children} */}
        {user ? (
            children // Solo mostrar el contenido si el usuario está autenticado
            ) : (
            !typeForm && children
            )}
      </div>

  );
};

export default MainContainer;