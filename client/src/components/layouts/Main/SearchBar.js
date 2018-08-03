import React from 'react';
//import { Link } from 'react-router-dom';
import './SearchBar.css';
import TextField from '@material-ui/core/TextField'


const SearchBar = () => (
    <form>
        <TextField
        name="bookSearched"
        hintText="Search for a Book"
        floatingLabelText="Search"
        //value={this.state.bookSearched}
        //onChange={e => this.change(e)}
        floatingLabelFixed
        />
    </form>
    );


export default SearchBar;

