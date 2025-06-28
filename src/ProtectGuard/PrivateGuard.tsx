import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = ()=>{

    const token = localStorage.getItem("token")
    //const autenticated = false;
    //return autenticated ? <Outlet/> : <Navigate to="/login" replace/>
    // o tambien preguntar isAdmin -> return isAdmin ? <Outlet/>
    return token ? <Outlet/> : <Navigate to="/login" replace/>
}
// Outlet -> Para que redenrize lo que le digamos si esta autenticated renderiza si no se va al /login
//replace -> Esto remplaza la ruta en su totalidad si hay home/status/test/user todo va a solo /login si no esta el replace solo quitara el ultimo y lo pone /login
