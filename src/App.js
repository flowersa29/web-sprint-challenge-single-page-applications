import React from "react";
import {Switch, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Form from "./components/Form"


const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/order-burger" render={() => <Form/>}/>

        <Route exact path="/" render={() => <Home/>} />

      </Switch>

    </div>
  );
};
export default App;
