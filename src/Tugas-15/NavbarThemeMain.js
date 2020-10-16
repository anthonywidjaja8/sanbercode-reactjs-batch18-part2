import React from "react"
import { NavbarThemeProvider } from "./NavbarThemeContext"
import Routes from "./tugas15"

const NavbarRouting = () => {
    return (
        <NavbarThemeProvider>
            <Routes/>
        </NavbarThemeProvider>
    )
}

export default NavbarRouting