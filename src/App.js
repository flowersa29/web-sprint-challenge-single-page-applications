import React, {useState} from "react";
import "./App.css"
import {Switch, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Form from "./components/Form"


const App = () => {

const [orders, setOrders] =useState([])

const addOrder = order => {

    setOrders([...orders, order])
}
const cancelOrder = index => {
  const originalOrders = [...orders]
  originalOrders.splice(index, 1)
  setOrders(originalOrders)
}




  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/order" render={() => <Form orders={orders}  addOrder={addOrder} cancelOrder={cancelOrder}/>}/>

        <Route exact path="/" render={() => <Home/>} />

      </Switch>

    </div>
  );
};
export default App;
