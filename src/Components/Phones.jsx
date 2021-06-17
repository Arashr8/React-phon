import React from 'react'
import Phone from './Phone'


const Phones = ({ phones }) => {
    return (
        <div>
             {phones.map(phone => (
               <Phone model={phone.model}  color={phone.color}  price={phone.price}/>
            ))}
        </div>
    )
}

export default Phones

