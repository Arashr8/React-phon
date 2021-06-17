import React,{Component} from 'react';
import Phones from './Components/Phones';



class App extends Component {
    state = {
        phones : [
            { model: 'Nokia', color : 'green' , price : 100 } ,
            { model: 'LG', color : 'yellow' , price : 200 } ,
            { model: 'samsung', color : 'brown' , price : 300 }
        ]
    }
render() {
    const {phones} = this.state
    return (
        <div>
       <Phones phones={phones}/>
        </div>
    )
}

}

export default App
