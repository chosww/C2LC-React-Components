import React, { Component } from 'react'

export class CustomizedBootstrapComp extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <a href="google.com" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

export default CustomizedBootstrapComp
