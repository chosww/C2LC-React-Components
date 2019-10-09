import React, { Component } from 'react';
import { Button, Checkbox, DropDown, FormControl, FormControlLabel, Menu, MenuItem, Slider, Switch } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledSlider = withStyles({
    root: {
        color: '#7C7C7C',
        height: '3em',
        width: '80%',
        margin: 'auto'
    }
})(Slider);

const marks = [
    {
        value: 0,
        label: 'Slow'
    },
    {
        value: 5,
        label: 'Fast'
    }
];

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5'
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
})) (MenuItem);

export class MaterialUi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        return (
            <div>
                <h1>Material-Ui Components</h1>
                <Button 
                    aria-controls='customized-menu'
                    aria-haspopup='true'
                    variant='contained'
                    color='primary'
                    onClick={(event)=>{this.handleClick(event)}}
                >
                    Open Menu
                </Button>
                <StyledMenu
                    id='customized-menu'
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <StyledMenuItem>
                        <p>Item 1</p>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <p>Item 2</p>
                    </StyledMenuItem>
                </StyledMenu>

                <Button>MaterialUi</Button>
                <FormControl>
                    <FormControlLabel
                    value='top'
                    control={<Checkbox color='primary' />}
                    label='Top'
                    labelPlacement='top'
                    />
                    <FormControlLabel
                    value='bottom'
                    control={<Checkbox color='primary' />}
                    label='Bottom'
                    labelPlacement='bottom'
                    />
                </FormControl>
                <Switch label='switch' color={'primary'} />
                <StyledSlider label='value' max={5} marks={marks}/>
            </div>
        )
    }
}

export default MaterialUi