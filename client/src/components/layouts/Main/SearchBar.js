import React from 'react';
//import { Link } from 'react-router-dom';
import './SearchBar.css';
import TextField from '@material-ui/core/TextField'


const SearchBar = () => (
    <form className={SearchBar.container}>
        <TextField
        id="bookSearched"
        className="bookSearched"
        floatingLabelText="Search"
        //value={this.state.bookSearched}
        //onChange={e => this.change(e)}
        />
    </form>
    );


export default SearchBar;

