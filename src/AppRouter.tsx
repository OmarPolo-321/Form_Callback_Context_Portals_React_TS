import { /*BrowserRouter,*/ Navigate, Route } from "react-router-dom"
import { Login } from "./PublicDomRoutes/loging"
import { PrivateGuard } from "./ProtectGuard/PrivateGuard"
import { PrivateRouter } from "./PrivateDomRoutes/PrivateRouter"
import { CustomForm, RoutesWithNotFound } from "./Components"

/* 
Si esto es algo que afecta a toda la aplicación entonces debe ir en la Raiz en el rout de la aplicación

*/

//Usaremos el Guard para las urls privadas
export const AppRouter = () => {
    return (

        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={"/login"} />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/formulario" element={<CustomForm />} ></Route>
            <Route element={<PrivateGuard />}>
                <Route path="/private/*" element={<PrivateRouter />} ></Route>
            </Route>
        </RoutesWithNotFound>

    )
}
/*Dentro del BrowserRouter estamos quitando el Routes 
y solo RoutesWithNotFound por que ya lo tiene el RoutesWithNotFound el Routes y ahi estamos englobando en caso sea error en la ruta
*/