// import React from 'react'
// import './App.css'
// import './components/Phone'
// import Phone from './components/Phone'

// function App(){
//     return(
//         <div className='text-center'>
//             <h5> Salam </h5>
//             <hr/>
//             <h5> Hi </h5>
//             <Phone/>
//         </div>
//     )
// }

import React, { Component } from "react"
import './App.css'
import './components/Phone'
import Phone from './components/Phone'
import Person from "./components/Person"
import Car from './components/Car'
import Product from "./components/Product"

class App extends Component {
    constructor (){
        super()
        // this.state = {
        // cars : [
        //     {name : 'benz' , color : 'white' , year : 2000} ,
        //     {name : 'kia' , color : 'red' , year : 2005} ,
        //     {name : 'toyota' , color : 'green' , year : 2008} 
        // ]
        // }
    }
    
     render () {
        return(
            <div>
                {/* <h5>
                 How  
                </h5> */}
                {/* <Person firstname='ali' lastname='karimi' age='30'/> */}
                {/* {this.state.cars.map(car =>(
                <Car name= {car.name} color= {car.color} year= {car.year} />
                ) )} */}

                <Product/>

               

            </div>
        )
    }
}



export default App