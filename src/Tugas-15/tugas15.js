import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Form from "../Tugas-9/tugas9"
import TableFruitPrice from "../Tugas-10/tugas10"
import Timer from "../Tugas-11/tugas11"
import FruitStore from "../Tugas-12/tugas12"
import FruitStoreAPI from "../Tugas-13/tugas13"
import FruitStoreUsingContext from "../Tugas-14/FruitStoreMain"
import "./tugas15.css"
import { NavbarThemeContext } from "./NavbarThemeContext"

const Routes = () => {
    const [isLightTheme, setIsLightTheme, backgroundTheme, setBackgroundTheme, colorTheme, setColorTheme] = useContext(NavbarThemeContext)
    const changeTheme = (event) => {
        if(isLightTheme === 0) {
            setIsLightTheme(1)
            setBackgroundTheme("#333333")
            setColorTheme("#eeeedd")
        } else {
            setIsLightTheme(0)
            setBackgroundTheme("#eeeedd")
            setColorTheme("#333333")   
        }
    }
    
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ backgroundColor: backgroundTheme }}>
            <li>
              <Link to="/" style={{ color: colorTheme }}>Tugas-9</Link>
            </li>
            <li>
              <Link to="/Tugas-10" style={{ color: colorTheme }}>Tugas-10</Link>
            </li>
            <li>
              <Link to="/Tugas-11" style={{ color: colorTheme }}>Tugas-11</Link>
            </li>
            <li>
              <Link to="/Tugas-12" style={{ color: colorTheme }}>Tugas-12</Link>
            </li>
            <li>
              <Link to="/Tugas-13" style={{ color: colorTheme }}>Tugas-13</Link>
            </li>
            <li>
              <Link to="/Tugas-14" style={{ color: colorTheme }}>Tugas-14</Link>
            </li>
            <li>
              <Link to="/Change-Theme" onClick={changeTheme} style={{ color: colorTheme }}>Change-Theme</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Form}/>
          <Route exact path="/Tugas-10" component={TableFruitPrice}/>
          <Route exact path="/Tugas-11" component={Timer}/>
          <Route exact path="/Tugas-12" component={FruitStore}/>
          <Route exact path="/Tugas-13" component={FruitStoreAPI}/>
          <Route exact path="/Tugas-14" component={FruitStoreUsingContext}/>
        </Switch>
      </div>
    </Router>
  )
}

export default Routes