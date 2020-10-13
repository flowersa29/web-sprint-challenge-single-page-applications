import React from 'react'
import img from "../Images/pizza.jpg"
import styled from "styled-components"
import Burger from "../Images/Burger.jpg"
const HomeContainer = styled.div `
    width:100%;
    font-weight:bold;
    color:white
    header{
        width:100%;
       background-size:40%;
        
        height: 100vh;
    }
`


const Home = props => {
    
  
    return (
        <HomeContainer style={{overflowY:"hidden"}}>
            
            
          <h1 style={{fontSize:"50px", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%"}}>Lambda Eats</h1>  
        <img src={img} alt="" style={{ display:"block", marginLeft:"auto", marginRight:"auto", width:"100%"}} /> 
            
        </HomeContainer>
    )
}

export default Home
  