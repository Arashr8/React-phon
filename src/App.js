
import React, { Component } from "react"
import './App.css'
import Product from "./components/Product"

class App extends Component {
    constructor (){
        super()
        // this.state = {
        // products : [
        // {name:'TV' , color : 'Red' , price : '150' , quantity : '30' },
        // {name:'Mobile' , color : 'White' , price : '200' , quantity : '10' },
        // {name:'Lap top' , color : 'Black' , price : '110' , quantity : '11' },
        // ],

        // color : 'white' , 
        // firstName : 'hassan',
        // typeName : 'number'
        // hFiveTag : '<h5>salam</h5>',

    //     bgColor1 : 'white' ,
    //     bgColor2 : 'white' ,
    //     bgColor3 : 'white'

    //   } 
    }
    state = {
        bgColor1 : 'white' ,
        bgColor2 : 'white' ,
        bgColor3 : 'white'
    }
    // onChangeBakgroundColor = () => {
    //    this.setState({ color: 'red'})
    // }
    // onChangeName = () => {
    //    this.setState ({firstName : 'ali'})
    // }
    // onChangeType = () => {
    //     this.setState ( { typeName : 'email' } )
    // }
    // onChangeTag = () => {
    //     this.setState ({
    //         hFiveTag : '<h1>salam</h1>'
    //     })

    // }

    // onChangeBgColorToGreen = () => {
    //     this.setState ({
    //         bgColor  : 'green'
    //     }

    //     )
    // }
    
    // onChangeBgColorToRed = () => {
    //     this.setState ({
    //         bgColor : 'red'
    //     })
    // }
    // onChangeBgColorToWhite = () => {
    //     this.setState ({
    //         bgColor : 'white'
    //     })
    // }
    
    
    onChangeToGreen = () => {
        this.setState ({
            bgColor1 : 'green' ,
            bgColor2 : 'white' ,
            bgColor3 : 'white'
        })
    }

    onChangeToYellow = () => {
        this.setState ({
            bgColor2 : 'yellow' ,
            bgColor1 : 'white' ,
            bgColor3 : 'white'
        })
    }

    onChangeToRed = () => {
       this.setState ({
            bgColor3 : 'red' ,
            bgColor2 : 'white' ,
            bgColor1: 'white'

})
    }


     render () {
        return(

            <div >
            
             {/* { this.state.products.map(product =>(
              <Product name = {product.name} color = {product.color} price = {product.price} quantity = {product.quantity}/>
             )) 
               }
               <button onClick= {this.onChangeBakgroundColor}>change color</button>
               <div> { this.state.firstName } </div>
               <button onClick= {this.onChangeName}>change name</button>
               <input type= {this.state.typeName}/>
               <button onClick= {this.onChangeType}>change type</button> */}
            
            {this.state.hFiveTag}

            {/* <button onClick = {this.onChangeBgColorToGreen}> Green </button>
            <button onClick = {this. onChangeBgColorToRed}> Red </button>
            <button onClick = {this.onChangeBgColorToWhite}> White </button> */}
          
            {/* <button onClick= {this.onChangeTag}> change text </button> */}

            <div onClick = {this.onChangeToGreen} className = "bgGreen" style = {{ backgroundColor : this.state.bgColor1 }}></div> <br/>
            <div onClick = {this.onChangeToYellow} className = "bgYellow" style = {{ backgroundColor : this.state.bgColor2 }}></div> <br/>
            <div onClick = {this.onChangeToRed} className = "bgRed" style = {{ backgroundColor : this.state.bgColor3 }}></div>

            </div>
        )
    }
}





export default App