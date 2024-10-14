import { useState } from 'react';



const MainContainer = ({ children }) => {
    const [typeForm,setTypeForm] = useState("login");
    return (
        <main className="responsive">
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
            {children}
        </main>
    );
};

export default MainContainer;
