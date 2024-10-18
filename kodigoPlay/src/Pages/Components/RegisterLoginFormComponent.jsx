import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, app } from '../../Firebase/Config';
import Button from "../../MicroComponents/Button";
import InputFieldWithIcon from "../../MicroComponents/InputFieldWithIcon";
import styles from "../../assets/CSS/LoginFormComponent.module.css";
import { useContext } from "react";
import { UserContext } from "../../Context/UserDataContext";
import { useNavigate } from "react-router-dom";

export const RegisterFormComponent = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useContext(UserContext); //pa que hagamos el update del user
    const navigate = useNavigate();

    const onsubmitForm = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {                
                const user = userCredential.user;
                console.log(user);                
                setUser(user);                
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                alert("Error al crear cuenta: " + error.message);
            });
    };

    return (
        <article className="large padding center-align border">
            <h1>¿Nuevo por acá? ¡Crea tu cuenta!</h1>
            <form onSubmit={handleSubmit(onsubmitForm)}>
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
                <InputFieldWithIcon
                    label="Confirme su clave de acceso"
                    id="password2"
                    type="password"
                    icon="visibility"
                    register={register}
                />
                <Button label="Crear cuenta" className={styles.buttonLogin} type="submit" />
            </form>
        </article>
    );
};
