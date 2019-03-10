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
        width: 200,
      },
    },
  };

class MovieGenre extends Component {
    constructor(props) {
        super(props);
        this.state = {genres: props.genre, genre:[]}
    }

    handleChange = event => {
        this.props.callbackFromParent(event.target.value);
        this.setState({ genre: event.target.value });
    }; 

    render() {
        return (
            <div className="genre-checkbox">
                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox" style={{width:50}}></InputLabel>
                    <Select
                        multiple
                        value={this.state.genre}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {this.state.genres.map(genre => (
                        <MenuItem key={genre} value={genre}>
                            <Checkbox checked={this.state.genre.indexOf(genre) > -1} />
                            <ListItemText primary={genre} />
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
            </div>
        );
    }
}

export default MovieGenre;