import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth,app } from '../../Firebase/Config';
import Button from "../../MicroComponents/Button";
import InputFieldWithIcon from "../../MicroComponents/InputFieldWithIcon";
import styles from "../../assets/CSS/LoginFormComponent.module.css";



export const RegisterFormComponent = () => {
    const { register, handleSubmit } = useForm();

    const onsubmitForm = (data) => {
        // e.preventDefault();
        // console.log("Se envio el form");
        // console.log(e)
        // console.log('-----------------')
        // console.log(e.target.password.value)
        console.log(data);


        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.error(error);
                const errorMessage = error.message;
                // ..
            });


    }
    return (
        <>
        
                <article className="large padding center-align border">
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
            </>
    )
}

