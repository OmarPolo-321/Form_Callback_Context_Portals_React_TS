import { createContext, useContext } from "react";

interface GlobalContextType {
  value: string | null
  setValue: React.Dispatch<React.SetStateAction<string | null>>
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => { }
})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  // if (!context.value && context.value !== 0) {
  //   throw new Error("GlobalContext must be used within a GlobalContextProvider")
  // }
  if (context === undefined) {
  throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}
