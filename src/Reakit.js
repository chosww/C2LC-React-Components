import React, { Component } from 'react'
import { Button } from 'reakit/Button';
import { Checkbox } from 'reakit/Checkbox';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';

export class Reakit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ""
        }; 
    }

    changeMessage = () => {
        this.setState({
            display: 'Reakit Button Clicked'
        });
    }


    render() {
        return (
            <div>
                <h1>Reakit Components</h1>
                <p>{this.state.display}</p>
                <Button onClick={this.changeMessage}>Reakit</Button>
                <Checkbox onChange={this.changeMessage}/>
                {/* <RadioGroup>
                    <Radio/>
                    <Radio/>
                </RadioGroup> */}
            </div>
        )
    }
}

export default Reakit
