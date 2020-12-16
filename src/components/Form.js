import React, {useState, useEffect} from 'react'
import * as yup from "yup";
import "../App.css"
import axios from "axios"
import Order from '../components/Order';
import OrderCard from "./OrderCard"
import styled from 'styled-components'

const schema = yup.object().shape({
        name:yup.string().required("Please enter your name").min(2, 'That\'s not valid')  
})
const CoffeeDiv = styled.div`
  width: 600px;
  background: black;
  color: white;
  padding: 2%;
  position: fixed;
  margin: 4% 15% 15% 30%;
  border-radius: 10px;
  overflow: hidden;
`;

const Form = (props) =>{
    const [formState, setformState] = useState({
        name:"",
        type:{
            small:false,
            Medium:false,
            Large:false
        },

        toppings: {
            cheese:false,
            sausage:false,
            pepperoni:false

        },
        instructions:""



    })

    const [errors, setErrors] = useState({
        name:""
    });




    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(()=>{
        schema.isValid(formState).then(valid => setIsDisabled(!valid))
    }, [formState])

    const validate = e => {
        e.persist()
        yup.reach(schema, e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.name]: ""}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
    }

    const handleChanges = e => {
        if (e.target.type === "checkbox"){
           setformState({...formState, toppings: {
               ...formState.toppings, [e.target.value]: e.target.checked
           } }) 
        } else {
            setformState({...formState, [e.target.name]: e.target.value})
        } if (e.target.name === "name") {
            validate(e)
            
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
       axios.post("https://reqres.in/api/users", formState)
       .then(res => props.addOrder(res.data))
       .catch(err => console.log(err))
    }




    return (
        <div className="form">
            <CoffeeDiv>
            <form onSubmit={handleSubmit} >
                <h1>Order your Pizza</h1>  
                <label style={{paddingRight:"10px"}}>Name:
                    <input name="name" type="text" value={formState.name} placeholder="Enter Name" onChange={handleChanges} data-cy="name"/>
                </label>
                {errors.name.length > 0 && <p style={{color:"crimson"}}>Please enter your Name</p>}

                <label>Pizza Size:
                    <select data-cy="type" name="type"   value={formState.type} onChange={handleChanges}>
                        <option data-cy="small" value="small">Small</option>
                        <option data-cy="medium" value="medium">Medium</option>
                        <option data-cy="large" value="large">Large</option>
                    </select>
                </label>
                <label>toppings:
                    <label>
                    <input type="checkbox" name="cheese" data-cy="cheese" onChange={handleChanges} value=""/>
                    cheese
                    </label>
                    <label>
                    <input type="checkbox" name="sausage" data-cy="sausage" onChange={handleChanges} value=""/>
                    sausage
                    </label>
                    <label>
                    <input type="checkbox" name="pepperoni" data-cy="pepperoni" onChange={handleChanges} value=""/>
                    pepperoni
                    </label>
                    <label>
                    
                    <input type="checkbox" name="ExtraCheese" data-cy="ExtraCheese" onChange={handleChanges} value=""/>
                    ExtraCheese
                    </label>
                </label>
                <label>Special Instructions
                    <textarea name="instructions"  value={formState.instructions} data-cy="instructions" placeholder="Type Here..." onChange={handleChanges} />
                </label>
                <button type="submit" disabled={isDisabled} data-cy="submit">Place your order</button>
            </form>
            </CoffeeDiv>
            <div className="order" style={{paddingTop:"400px"}}>
                {props.orders.map((order, i)=> <div key={i}>{order.name} </div>)}
                {/* {props.orders.map((order, i) => <OrderCard  key={i} order={order}/>)} */}
            </div>
        </div>
    )
}

export default Form
