import React from 'react';
//import { Link } from 'react-router-dom';
import './SearchBar.css';
import TextField from '@material-ui/core/TextField';


/*
class SearchBar extends React.Component {
    state = {
        name: 'Cat in the Hat'
      };

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      render() {
          const {classes} = this.props;
      
      return (
        <TextField
        id="name"
        label="Name"
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="normal"
        />
      )}
}
*/

/*
const SearchBar = () => (
    <TextField
    type="text"
    placeholder="Search for..."
    name="query"
    value={this.state.query}
    onChange={this.onChange}
/>
    );

    *
    */

   class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state={term:''};
    }
    onInputChange(term){
      const name = this.props.searchBoxName || undefined
      this.setState({term});
      if(this.props.onSearchTermChange){
        this.props.onSearchTermChange({name,term})
      }
    }
      render() {
        const name = this.props.searchBoxName || undefined
          return (
              <div className="search-box">
                <input name={name} className="search-input" id="search" type="text" placeholder="Search" value={this.state.term}
                  onChange={event=>this.onInputChange(event.target.value)} onKeyPress={this.props.onKeyPress|| null}/>
              </div>
          );
      }
  }


export default SearchBar;

