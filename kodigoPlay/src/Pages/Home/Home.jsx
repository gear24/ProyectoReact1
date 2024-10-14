import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserDataContext"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/Config"

export const Home = () => {
  const { user,setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null)
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      {user ?
        <>
          <h1>{user.email}</h1>
          <button onClick={logout}>Cerrar sesion</button>
        </>
        :
        <Link to="/session">iniciar sesion</Link>}

    </>
  )
}
