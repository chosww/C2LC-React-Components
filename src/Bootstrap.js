import React, { Component } from 'react'
import { Button, Form, Dropdown } from 'react-bootstrap';

export class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    updateContent = () => {
        this.setState({
            content : 'Bootstrap Button Clicked'
        })
    }

    render() {
        return (
            <div>
                <h1>Bootstrap Components</h1>
                <Button variant="outline-success" size='lg' disabled>Success!</Button>
                <Button variant="outline-success" size='lg' onClick={this.updateContent}>Success!</Button>
                {/* use aria-live property for voiceover to grab updated contents */}
                <p aria-live='passive'>{this.state.content}</p>
                <Form>
                    {['checkbox', 'radio'].map(type=>(
                    <div key={`default-${type}`}>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                        />
                        <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                        />
                    </div>
                    ))}
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Check
                    type="switch"
                    label="tik this"
                />
                <Form.Check
                    disabled
                    type="switch"
                    label="disabled siwtch"
                    id="switch2"
                /> 
            </div>
        )
    }
}

export default Bootstrap
