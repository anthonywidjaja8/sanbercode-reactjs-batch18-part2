import React, { useState, createContext } from "react"

export const NavbarThemeContext = createContext([])

export const NavbarThemeProvider = props => {
    const [isLightTheme, setIsLightTheme] = useState(0)
    const [backgroundTheme, setBackgroundTheme] = useState("#eeeedd")
    const [colorTheme, setColorTheme] = useState("#333333")

    return (
        <NavbarThemeContext.Provider value={[
            isLightTheme, 
            setIsLightTheme, 
            backgroundTheme, 
            setBackgroundTheme,
            colorTheme,
            setColorTheme]}>
            {props.children}
        </NavbarThemeContext.Provider>
    )
}