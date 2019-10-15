import React, { Component } from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import Draggable from 'react-draggable';

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

export class GrommetComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : ''
        }
    }

    handleClick = () => {
        this.setState({
            message : 'hello'
        });
    }

    render() {
        return (
            <Grommet theme={theme}>
                <Box
                    aria-label='mainbox'
                    tag='header'
                    direction='row'
                    align='center'
                    justify='between'
                    background='brand'
                    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                    elevation='medium'
                    style={{ zIndex: '1' }}
                >
                    <Heading level='3' margin='none'>My App</Heading>
                    <Button onClick={this.handleClick}>Grommet</Button>
                    <Draggable>
                        <Button>Draggable Button</Button>
                    </Draggable>
                </Box>
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                    <Box flex align='center' justify='center'>
                        {this.state.message}
                    </Box>
                    <Box 
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                    >
                        slidebar
                    </Box>
                </Box>
            </Grommet>
        )
    }
}

export default GrommetComp
