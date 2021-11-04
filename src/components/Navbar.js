import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import './navbar.css'
import Home from './Pages/Home/Home.js'
import Customers from './Pages/Customers/Customers.js'
import Register from './Pages/Register/Register.js'
import Notfound from './Pages/Notfound/Notfound.js'

const Navbar = () => {
    return (
        <BrowserRouter>
           <div>
                <header className="navbar-container">
                
                        <div className="linkBox"><span><NavLink className="navlink navlink1" to="/">Hem</NavLink></span></div>
                        <div className="linkBox"><span><NavLink className="navlink" to="/kunder">Kunder</NavLink></span></div>
                        <div className="linkBox"><span><NavLink className="navlink navlink2" to="/registrera">Registrera ny kund</NavLink></span></div>

                </header>
                
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/kunder" component={Customers}/>
                    <Route path="/registrera" component={Register}/>
                    <Route component={Notfound}/>
                </Switch>
           </div>
        </BrowserRouter>
    )
}
export default Navbar




