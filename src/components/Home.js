import React from 'react'
import img from "../Images/Burger.jpg"

const Home = () => {
    return (
        <div className="homepage">
          <h1>Lambda Eats</h1>  
        <img src={img} alt="" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"100%"}} />  
        </div>
    )
}

export default Home
  