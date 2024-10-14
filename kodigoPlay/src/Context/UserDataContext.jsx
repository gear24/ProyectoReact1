import {createContext, useState} from 'react';

//Crear el contexto
export const UserContext = createContext(null);

//Crear mi proveedor? Distribuye info (el valor que le demos)

export const MyProvider = ({children}) => {
    const [user,setUser] = useState(null);


    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}