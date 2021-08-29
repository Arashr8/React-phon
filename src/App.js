
import React, { Component } from "react"
import './App.css'
import Car from "./components/Car"

class App extends Component {
    constructor (){
        super()
     
    }
    state = {
        cars : [
            {name : 'bmw' , color : 'red' , year :'2010'} ,
            {name : 'benz' , color : 'black' , year :'2005'} ,
            {name : 'audi' , color : 'green' , year :'2020'}
        ]
    }

    changeCars = () => {
        this.setState ({
            cars : [
                {name : 'peykan' , color : 'blue' , year :'2011'} ,
                {name : 'pride' , color : 'brown' , year :'2007'} ,
                {name : 'smand' , color : 'yellow' , year :'2018'}
            ]
        })
    }
   
    changeCarsToDefault = () => {
        this.setState ({
            cars : [
                {name : 'bmw' , color : 'red' , year :'2010'} ,
                {name : 'benz' , color : 'black' , year :'2005'} ,
                {name : 'audi' , color : 'green' , year :'2020'}
            ]
        })
    }

     render () {

        const {cars} = this.state
        return(

            <div>
                
             {cars.map(car =>(
             <Car name = {car.name} color = {car.color} year = {car.year}/>

             ))}   
             <button onClick = {this.changeCars}>change cars</button>
             <button onClick = {this.changeCarsToDefault}>change cars</button>
            </div>
        )
    }
}





export default App