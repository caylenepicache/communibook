import React from 'react';
//import axios from 'axios';
import "./Google.css";
import axios from 'axios';

class Google extends React.Component {

    state = {
        email: '',
        password: '',
    
      }
    
      handleInputChange = (event) => {
        const name = event.currentTarget.getAttribute('name')
        const value = event.currentTarget.value
        this.setState(prevState => {
          return { ...prevState, [name]: value }
        })
      }
    
      handleSubmit = (event)=>{
        event.preventDefault();
        axios.post("/accts",this.state)
          .then(res=>this.props.context.push(`/accts/${res.data.id}`))
          .catch(err=>console.log(err))
      }

    render(){
    return(

    <div className='OAuth'>
          sign in using

        <a href="/auth/google">
          <button className='social'>
            <img id="googleImg" src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Google-128.png' alt='google' />
          </button>
        </a>

    </div>

    )
}
}

export default Google;