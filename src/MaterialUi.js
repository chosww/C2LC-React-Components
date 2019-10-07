import React, { Component } from 'react';
import { Button, Checkbox, DropDown, FormControl, FormControlLabel, Slider, Switch } from '@material-ui/core';
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
]

export class MaterialUi extends Component {
    render() {
        return (
            <div>
                <h1>Material-Ui Components</h1>
                <Button>MaterialUi</Button>
                <FormControl>
                    <FormControlLabel
                    value="top"
                    control={<Checkbox color="primary" />}
                    label="Top"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                    />
                </FormControl>
                <Switch color={'primary'} />
                <StyledSlider max={5} marks={marks}/>
            </div>
        )
    }
}

export default MaterialUi
