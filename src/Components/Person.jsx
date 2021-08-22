import React from 'react'

const Person = ({firstname , lastname , age}) => {
    return (
        <div>
            <h3>
                Salam {`${firstname} ${lastname} ${age}`}
            </h3>
        </div>
    )
}

export default Person 