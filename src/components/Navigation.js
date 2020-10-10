import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const navDiv = styled.div `
width: 100%;
background:red;
display:flex;
justify-content: flex-end;
height:4rem;
align-items:center;
a{
    text-decoration:none;
    margin-right:3%;
    color:white;
    font-size: 1.4rem;
}

`

const Navigation = () => {
    return (
        <navDiv>
          <Link to="/order-burger">Order</Link>
          <Link to="/">Home</Link>  
        </navDiv>
    )
}

export default Navigation
