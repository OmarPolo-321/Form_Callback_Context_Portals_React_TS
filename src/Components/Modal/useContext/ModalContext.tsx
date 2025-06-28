import { createContext, useContext, useState, type ReactNode } from "react";

// export const ModalContext = createContext<{
//     state: boolean;
//     setState: React.Dispatch<React.SetStateAction<boolean>>;
// }>({
//     state: false,
//     setState: () => null
// })
// 🔹 Tipo del contexto
interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// 🔸 Contexto inicial como undefined para verificación segura
const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (<ModalContext.Provider value={{ isOpen, setIsOpen }} >{children}</ModalContext.Provider>)
}

export const useModalContext = () => {
  const context = useContext(ModalContext)

  //if (!context) {
  if (context === undefined) {
  throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}