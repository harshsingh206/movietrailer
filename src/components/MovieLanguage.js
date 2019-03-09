import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import '../App.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

class MovieLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {languages: props.languages, language:[]}
    }

    handleChange = event => {
        this.props.callbackFromParent(event.target.value);
        this.setState({ language: event.target.value });
    };

    render() {
        return (
            <div className="language-checkbox">
                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox" style={{width:50}}></InputLabel>
                    <Select
                        multiple
                        value={this.state.language}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {this.state.languages.map(language => (
                        <MenuItem key={language} value={language}>
                            <Checkbox checked={this.state.language.indexOf(language) > -1} />
                            <ListItemText primary={language} />
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
            </div>
        );
    }
}

export default MovieLanguage;