import { Navigate, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { RoutesWithNotFound } from "../Components"

export const PrivateRouter =()=>{
    return(
        // Aqui ya son los /private/ 
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/dashboard"/>} ></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/admin" element={<Dashboard/>} ></Route>
            <Route path="/stock" element={<Dashboard/>} ></Route>
        </RoutesWithNotFound>
    )
}