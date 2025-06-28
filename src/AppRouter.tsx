import { BrowserRouter, Navigate, Route} from "react-router-dom"
import { Login } from "./PublicDomRoutes/loging"
import { PrivateGuard } from "./ProtectGuard/PrivateGuard"
import { PrivateRouter } from "./PrivateDomRoutes/PrivateRouter"
import { RoutesWithNotFound } from "./Components"

/* 
Si esto es algo que afecta a toda la aplicación entonces debe ir en la Raiz en el rout de la aplicación

*/

//Usaremos el Guard para las urls privadas
export const AppRouter =()=>{
    return(
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={"/login"}/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                <Route element={<PrivateGuard/>}>
                    <Route path="/private/*" element={<PrivateRouter/>} ></Route>
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}
/*Dentro del BrowserRouter estamos quitando el Routes 
y solo RoutesWithNotFound por que ya lo tiene el RoutesWithNotFound el Routes y ahi estamos englobando en caso sea error en la ruta
*/