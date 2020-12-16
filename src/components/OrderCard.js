// import React from 'react'
// import styled from 'styled-components'

// const OrderCard =({order}) =>{
//     const condiments = Object.keys(order.condiments)

//     const orderedCondiments =[]

//     condiments.forEach(key =>{
//         if (order.condiments[key]) {
//             orderedCondiments.push(key)
//         }
//     })
//     return orderedCondiments

//     return (
//         <div>
//          <h2>{order.name}</h2>   
//         <h3>{order.type}</h3>
//         <h3>{order.toppings}</h3>
//         {displayCondiments().map(coniment => <p>{condiment}</p>)}
//         <p>{order.intructions}</p>
//         </div>
//     )
// }
// export default OrderCard