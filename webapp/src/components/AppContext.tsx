import React, { createContext, useContext, useState, ReactNode, ComponentType } from "react"
import { Tab } from "./constants"

interface AppContextProps {
    tab: string | null
    setTab: React.Dispatch<React.SetStateAction<Tab>>
}

const AppContext = createContext({} as AppContextProps)

const AppContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [tab, setTab] = useState<Tab>(Tab.HOME)

    return <AppContext.Provider value={{ tab, setTab }}>{children}</AppContext.Provider>
}

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider")
    }
    return context
}

export function appContextWrapper<P>(Component: ComponentType<P>): ComponentType<P> {
    const Wrapper: React.FC<P> = (props) => (
        <AppContextProvider>
            <Component {...props} />
        </AppContextProvider>
    )

    return Wrapper
}
