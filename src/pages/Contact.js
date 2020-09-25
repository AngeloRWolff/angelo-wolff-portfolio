import React, { Component } from 'react';
import InputBox from '../components/class/InputBox';
import InputArea from '../components/class/InputArea';
import '..//components/class/Contact.css'
var List = 
{
    ListItem1:{
    id: 1111
    },
    ListItem2:{
    id: 2222
    },
    ListItem3:{
    id: 3333
    }  
}

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  
  render() {
    return (   
      <div>         
         <section style = {{height:"40px"}}></section>         
         <div><InputBox id = 'name' type = 'text' name = 'name' title = 'Name'></InputBox></div>   
         <div><InputBox id = 'email' type = 'email' name = 'email' title = 'Email'></InputBox></div>   
         <div><InputArea title = 'Message'></InputArea></div>  
         <button className ='submit'>Submit</button>  
      </div>            
    );
  }
}

export default Contact;