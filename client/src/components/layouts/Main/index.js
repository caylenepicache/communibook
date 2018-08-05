import React from 'react';
import SearchBar from './SearchBar';
import NavBar from '../NavBar'
//import "./index.css";

class Main extends React.Component {


  render() {
    return (
    <div>
        <h1> main app </h1>
        <NavBar />
        <SearchBar
        searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch} />
    </div>

    )
  }
}


export default Main;