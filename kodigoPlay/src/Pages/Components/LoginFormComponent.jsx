import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import Button from "../../MicroComponents/Button";
import InputFieldWithIcon from "../../MicroComponents/InputFieldWithIcon"; // Asegúrate de importar esto
import { auth } from "../../Firebase/Config";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../Context/UserDataContext";

export const LoginFormComponent = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    // Renombrada la función a onSubmit para que coincida
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                alert("Inicio de sesión con éxito");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                alert("Error al iniciar sesión: " + error.message);
            });
    };

    return (
        <>
            <div>Login Form</div>
            <div>
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
                    <Button label="Ingresar" className="primary" type="submit" />
                </form>
            </div>
        </>
    );
};
