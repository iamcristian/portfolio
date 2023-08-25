/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("EN")

  return (
    <GlobalContext.Provider
      value={{
        theme, setTheme,
        language, setLanguage
      }}>
      {children}
      </GlobalContext.Provider>
    )
}

export default GlobalStateContext