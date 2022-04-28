import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LinkButton from "../../UI-kit/Button/LinkButton.tsx/LinkButton";
import StyledNavBar from "../Layouts/NavBar/StyledNavBar";
import NavBar from "../Layouts/NavBar/NavBar";
import { HiOutlineSearch, HiDotsHorizontal } from 'react-icons/hi'
import './App.css'
import Soccer from "../Pages/Soccer";
import Hockey from "../Pages/Hockey";
import Tennis from "../Pages/Tennis";
import Racing from "../Pages/Racing";
import Home from "../Pages/Home";
import Other from "../Pages/Other";

function App() {
  return (

            <div className="App">
                <NavBar/>
                <Routes>
                        <Route path={'/'} element={<Home/>}> </Route>
                        <Route path={'/soccer'} element={<Soccer/>}> </Route>
                        <Route path={'/hockey'} element={<Hockey/>}> </Route>
                        <Route path={'/tennis'} element={<Tennis/>}> </Route>
                        <Route path={'/racing'} element={<Racing/>}> </Route>
                        <Route path={'/other'} element={<Other/>}> </Route>
                        {/*<Route path={'/search'} element={<Soccer/>}> </Route>   */}
                </Routes>

            </div>

  );
}

export default App;
