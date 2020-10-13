import React from 'react'

const Order =([order]) =>{
    console.log('order', order)
    return (
        <div>
        <p>{order.name}</p>
        <p>{order.type}</p>
        <p>{order.toppings}</p>
        

        </div>

    )


}
export default Order