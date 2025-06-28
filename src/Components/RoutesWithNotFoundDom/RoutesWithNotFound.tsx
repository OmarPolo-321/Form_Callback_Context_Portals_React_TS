import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface Props{
    children:ReactNode
}

export const RoutesWithNotFound = ({children}:Props)=>{
    return(
        <Routes>
            {children}
            <Route path="*" element={<Navigate to="/404"/>} ></Route>
            <Route path="/404" element={<h1>Pagina No encontrar Error 404</h1>} ></Route>
        </Routes>
    )
}