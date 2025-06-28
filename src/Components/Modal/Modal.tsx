import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./useContext/ModalContext";
import "./Modal.css"

interface Props{
    children: ReactNode
}
//Crearemos un modal mas generico
/* No es conveniente hacerlo con props y es mejor el uso del contexto
<modal></modal>
<modal></modal>
<modal></modal>

Estos son iguales pero son diferentes instancias que son modales que va a otro y otro.
Deberia haber solo un modal por vez

Para eso mejor usaremos el context
*/

const eventListener = "keydown";
export const Modal = ({children}:Props) => {

    //Para acceder a un referencia del DOM usamos el ref
    const modalRef = useRef<HTMLDivElement>(null)
    const {isOpen , setIsOpen} = useModalContext()

    const closeModal=()=>{ setIsOpen (false)}

    const modalRoot = document.getElementById("modal")

    //Al hacer click en el modal que este no se vaya a cerrar
    const handleContentClick= (e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation()
    }

    useEffect(()=>{
        //Al presionar el escape
        const handleEsc= (e:KeyboardEvent)=>{
            console.log('Tecla presionada:', e.key);
            if(e.key=== "Escape"){
                setIsOpen(false)
            }
        }
        //Si esta abierto le agregamos este evento
        if(isOpen){
            document.addEventListener(eventListener,handleEsc)
        }
        //Si se destruye el modal ya no siga escuchando el evento
        return ()=>{
            document.removeEventListener(eventListener,handleEsc)
        }
    },[setIsOpen,isOpen])

    if(!isOpen || !modalRoot){
        return null
    }//Que pasa si no existe el modal o el isOpen
    
    // CreateProtal(Que queremos renderizar , En donde renderizar)
    
    return createPortal(
        //Hacer clic en overlay lo cierra 
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}> {/*pero como pusimos el e.stopPropagation() en el handleContentClick este no llega al padre */}
                {children}
                <button className="close-button" onClick={closeModal}>Close</button>
            </div>
        </div>
        ,modalRoot)
}