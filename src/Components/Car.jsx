import React from 'react'

const Car = ({name , color , year}) => {
    return (
        <div>
            <h3>
                This {`${name}`}  is {`${color}`} and creat at {`${year}`}
            </h3>
        </div>
    )
}

export default Car 