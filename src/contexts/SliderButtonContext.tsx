import React, { useState, useEffect, createContext } from 'react'
import {useCookies} from 'react-cookie'

import Themes from '@/styles/themes.json'

import { SliderButtonContextData, SliderButtonProviderProps, ColorData } from '@/types'

export const SliderButtonContext = createContext({} as SliderButtonContextData)

export const SliderButtonContextProvider = ({children}: SliderButtonProviderProps) => {
    const [cookies, setCookies] = useCookies(['theme', "position"])

    const themes = {
        light:{
            name: 'light'
        },
        dark:{
            name: 'dark'
        },
        rocket:{
            name: 'rocket'
        }
    }

    const [theme, setTheme] = useState(cookies.theme || themes.light)

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
        setCookies('theme', theme)
    }, [theme])

    return (
        <SliderButtonContext.Provider value={{
            colors,
            toggleTheme
        }}>
            {children}
        </SliderButtonContext.Provider>
    )
}