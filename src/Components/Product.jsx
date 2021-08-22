import React from 'react'

const Product = ({name , color , price , quantity}) => {
return (
    <div>
        <h5>
            This {`${name}`} is {`${color}`} and price is {`${price}`} and quantity is {`${quantity}`}
        </h5>
    </div>
)
}

export default Product