import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import Button from "../../MicroComponents/Button";
import InputFieldWithIcon from "../../MicroComponents/InputFieldWithIcon";
import styles from "../../assets/CSS/LoginFormComponent.module.css";
import { auth } from "../../Firebase/Config";
import { useContext } from "react";
import { UserContext } from "../../Context/UserDataContext";

export const LoginFormComponent = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useContext(UserContext);

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user); // update pal contexto
                alert("Inicio de sesión con éxito");
                // si pones la redireccion aca da problema
            })
            .catch((error) => {
                console.error(error);
                alert("Error al iniciar sesión: " + error.message);
            });
    };

    return (
        <>  
        
            <article className="large padding center-align border">
            <h1>¡Bienvenido de vuelta!, inicia sesión</h1>
                <form onSubmit={handleSubmit(onSubmit)}>                    
                    <InputFieldWithIcon 
                        label="Digite su correo"                        
                        id="email" 
                        type="email"
                        icon="id_card"
                        register={register}
                    />                
                    <InputFieldWithIcon
                        label="Digite su clave de acceso"
                        id="password"
                        type="password"
                        icon="visibility"
                        register={register}
                    />
                    <Button label="Ingresar" className={styles.buttonLogin} type="submit" />
                </form>
            </article>
        </>
    );
};
