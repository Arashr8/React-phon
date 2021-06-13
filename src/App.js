import React,{Component} from 'react';
import Phone from './Components/Phone';


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
        {phones.map(phone => (
<Phone model={phone.model}  color={phone.color}  price={phone.price}/>
        ))}
        </div>
    )
}

}

export default App
