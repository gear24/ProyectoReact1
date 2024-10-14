import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth,app } from '../../Firebase/Config';



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
            <div>
                <form onSubmit={handleSubmit(onsubmitForm)}>
                    <label>Email</label>
                    <input type="text" id="email" placeholder="example@mail.com" {...register('email')} />
                    <label>Password</label>
                    <input type="text" id="password" placeholder="Enter u r password" {...register('password')} />
                    <label>Confirm your password</label>
                    <input type="text" id="password2" placeholder="Confirm password" {...register('password2')} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

