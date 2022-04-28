import React, {ReactElement, ReactNode} from "react";
import styled from "styled-components";
import { Link,  BrowserRouter, Routes, Route,} from "react-router-dom";
import StyledNavBar from "./StyledNavBar";
import LinkButton from "../../../UI-kit/Button/LinkButton.tsx/LinkButton";
import {HiOutlineSearch, HiDotsHorizontal} from "react-icons/hi";
import { FcSportsMode } from "react-icons/fc";
import App from "../../App/App";
import Soccer from "../../Pages/Soccer";
function NavBar (): ReactElement {
    return (
        <StyledNavBar>
            <Link to={'/'}><FcSportsMode className={'icon-sport'} /></Link>
            <Link to={'/soccer'}><LinkButton><div>Soccer</div></LinkButton></Link>
            <Link to={'/hockey'}><LinkButton><div>Hockey</div></LinkButton></Link>
            <Link to={'/tennis'}><LinkButton><div>Tennis</div></LinkButton></Link>
            <Link to={'/racing'}><LinkButton><div>Racing</div></LinkButton></Link>
            <Link to={'/other'}><LinkButton><HiDotsHorizontal className={'icon-other icon'}/></LinkButton></Link>
            <Link to={'/search'}><HiOutlineSearch className={'icon'}/></Link>
        </StyledNavBar>
    )

}

export default NavBar;