import { type ReactNode, useState } from "react"
import { GlobalContext } from "./global.context"

interface GlobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<string| null>(null)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}
