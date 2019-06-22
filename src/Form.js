import React, {Component} from 'react';
import sim from './sim.PNG';
import mastercard from './mastercard.png'
import visa from './visa.png'
import './Form.css';


class Change extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cardHolder:'',
            serial:'',
            valid:''
            
         }
}

serialChange = (event) =>{
    const value = event.target.value;
    let reg = /^([0-9 \s]{0,19})$/
    

    if (reg.test(event.target.value)===false)
            {
                 event.target.value=event.target.value.slice(0, event.target.value.length-1)
            }

    this.setState(
        {
            serial: value
        }
    )
}


cardHolderChange = (event) => {
    
    let reg = /^[A-Za-z ]*$/
    if (reg.test(event.target.value)){
    const value = event.target.value;
    
    this.setState({
        cardHolder: value.toUpperCase()
    })
    
    }
}


validationDateChange = (event) =>{
    const value = event.target.value;
    let reg = /^[0-9/]*$/
    if (reg.test(event.target.value)) {
        if (event.target.value[0] + event.target.value[1] > 12) event.target.value = event.target.value[0]
        if (event.target.value[0] > 1) event.target.value = ''
        if (event.target.value.length === 2) {
          event.target.value = event.target.value + '/'
        }
    this.setState({
        
            valid: value
        })
    }
}



    render() { 
        return ( 
<div>
        
    <div className="Inputs">
            
        <input type="text" maxLength="19" placeholder="Serial number" onChange={this.serialChange} value={this.setState.serial}/><br/>
        
        <input type="text" maxLength="20" placeholder="Name" onChange={this.cardHolderChange} value={this.setState.cardHolder} /><br/>
        
        <input type="text" maxLength="5" placeholder="Valid Thru" onChange={this.validationDateChange} value={this.setState.valid} /> 
        

    </div>
    

    
    <div className="container">
        <div className="title">
            <h1>CREDIT CARD</h1>
        </div>

        <div className="logo">
            <img src={sim} alt="sim" className="sim"/>
        </div>

        <div className="serial">
            <span>{this.state.serial[0] ? this.state.serial[0] : '•' }{this.state.serial[1] ? this.state.serial[1] : '•' }{this.state.serial[2] ? this.state.serial[2] : '•' }{this.state.serial[3] ? this.state.serial[3] : '•' }{this.state.serial[4] ? this.state.serial[4] : '•' }{this.state.serial[5] ? this.state.serial[5] : '•' }{this.state.serial[6] ? this.state.serial[6] : '•' }{this.state.serial[7] ? this.state.serial[7] : '•' }{this.state.serial[8] ? this.state.serial[8] : '•' }{this.state.serial[9] ? this.state.serial[9] : '•' }{this.state.serial[10] ? this.state.serial[10] : '•' }{this.state.serial[11] ? this.state.serial[11] : '•' }{this.state.serial[12] ? this.state.serial[12] : '•' }{this.state.serial[13] ? this.state.serial[13] : '•' }{this.state.serial[14] ? this.state.serial[14] : '•' }{this.state.serial[15] ? this.state.serial[15] : '•' }{this.state.serial[16] ? this.state.serial[16] : '•' }{this.state.serial[17] ? this.state.serial[17] : '•' }{this.state.serial[18] ? this.state.serial[18] : '•' }</span>
            {/* <span>{this.state.serial}</span> */}
           
        </div>

        <div className="numb">
            <span>5422</span>
        </div>

        <div className="validthru">
            <span>VALID</span>
            <span>THRU</span>
        </div>

        <div className="dateform">
            <span>MOUNTH/YEAR</span>
        </div>

        <div className="date">
            <span>{this.state.valid ? this.state.valid : 'MM/YY'}</span>
        </div>

        <div className="logo1">
            <img src={mastercard} className="master" alt="mastercard"/>
            <img src={visa} className="visa" alt="visa"/>
        </div>

        <div className="cardholder">
            <h3>{this.state.cardHolder ? this.state.cardHolder :'NAME' }</h3>
        </div>

    </div>
    
</div>
        )
    }
}
 
export default Change;