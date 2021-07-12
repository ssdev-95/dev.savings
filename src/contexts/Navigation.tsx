import { createContext, useState } from 'react'
import { ProviderProps, NavigationData } from 'src/@types'

const  NavigationContext = createContext({} as NavigationData)

function NavigationProvider({children}: ProviderProps) {
    const [component, setComponent] = useState(0)

    function goForward() {
        if(component===2) {
            setComponent(0)
            return
        }

        setComponent(component+1)
        return
    }

    function goBackward() {
        if(component===0) {
            setComponent(2)
            return
        }

        setComponent(component-1)
        return
    }

    return (
        <NavigationContext.Provider value={{
            component,
            goForward,
            goBackward
        }}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationContext, NavigationProvider }