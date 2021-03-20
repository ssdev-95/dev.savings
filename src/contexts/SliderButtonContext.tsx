import React, {ReactNode, useState, createContext} from 'react'

interface SliderButtonProviderProps {
    children: ReactNode;
}

interface SliderButtonContextData {
    theme: ThemeData;
    toggleTheme: (params)=>void;
}

interface ThemeData {
    position: string;
    bg: string;
    name: string;
}

export const SliderButtonContext = createContext({} as SliderButtonContextData)

export const SliderButtonContextProvider = ({children}: SliderButtonProviderProps) => {
    const swiftch = {
        light:{
            position: '0',
            bg: '#5f5c5c',
            name: 'light'
        },
        dark:{
            position: '1.85rem',
            bg: '#2a2a2a',
            name: 'light'
        },
        rocket:{
            position: '3.7rem',
            bg: '#6705b8',
            name: 'rocket'
        }
    }

    const [theme, setTheme] = useState(swiftch.light)
    
    const toggleTheme = event => {
        const targetto = event.target.id
        let {light, dark, rocket} = swiftch
        switch(targetto) {
            case 'default':
                setTheme(light)
                break
            case 'dark':
                setTheme(dark)
                break
            case 'rocket':
                setTheme(rocket)
                break
            default:
                console.log('404: No such theme found')
                break
        }
    }

    return (
        <SliderButtonContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </SliderButtonContext.Provider>
    )
}