import React, {ReactNode, useState, useEffect, createContext} from 'react'

import Themes from '../styles/themes.json'

interface SliderButtonProviderProps {
    children: ReactNode;
}

interface SliderButtonContextData {
    theme: ThemeData;
    colors: ColorData;
    toggleTheme: (params)=>void;
}

interface ColorData {
    "someTexts": string;
    "header": string;
    "body": string;
    "cards": string;
    "cardsTotal": string;
    "toogle": string;
    "table": string;
}

interface ThemeData {
    position: string;
    bg: string;
    name: string;
}

export const SliderButtonContext = createContext({} as SliderButtonContextData)

export const SliderButtonContextProvider = ({children}: SliderButtonProviderProps) => {
    const themes = {
        light:{
            position: '0',
            bg: '#5f5c5c',
            name: 'light'
        },
        dark:{
            position: '1.85rem',
            bg: '#2a2a2a',
            name: 'dark'
        },
        rocket:{
            position: '3.7rem',
            bg: '#6705b8',
            name: 'rocket'
        }
    }

    const [theme, setTheme] = useState(themes.light)

    const [colors, setColors]= useState<ColorData>(Themes[0].colors)
    
    const toggleTheme = event => {
        const targetto = event.target.id
        let {light, dark, rocket} = themes
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


  useEffect(()=>{
    switch(theme.name) {
      case 'light':
        setColors(Themes[0].colors)
        break
      case 'dark':
        setColors(Themes[1].colors)
        break
      case 'rocket':
        setColors(Themes[2].colors)
        break
      default:
        alert('404 - No such theme')
        break
    }
  }, [theme])

    return (
        <SliderButtonContext.Provider value={{
            theme,
            colors,
            toggleTheme
        }}>
            {children}
        </SliderButtonContext.Provider>
    )
}