import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const NavDiv = styled.div`
position: fixed;
width: 100%;
background:red;
display:flex;
justify-content: flex-end;
height:80px;
align-items:center;
a{
    text-decoration:none;
    margin-right:3%;
    color:black;
    font-size: 1.4rem;
    font-weight:bold;
}

`

const Navigation = () => {
    return (
        <NavDiv>
          <Link to="/order">Order</Link>
          <Link to="/">Home</Link>  
        </NavDiv>
    )
}

export default Navigation
