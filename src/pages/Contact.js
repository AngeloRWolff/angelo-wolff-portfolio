import React, { Component } from 'react';

import './Contact.css';
import githubIcon from '../assets/images/githubContactIcon.png';
import facebookIcon from '../assets/images/facebookContactIcon.png';
import youtubeIcon from '../assets/images/youtubeContactIcon.png';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import mailIcon from '../assets/images/mail.png'
import { contains } from 'jquery';

var $ = require("jquery");

var mailStyle={
  float:'left',
  
  //outline: 'none',
 // border: 'none',
  //borderRadius: '3px',
  //position:'relative',
 // display: 'block',
  height: '100%',
  borderRadius: '2px',
  backgroundColor:'#2e5f75',
  width: '10px',
  padding: '0',
 // marginLeft:'auto',
}
var submitStyle={

  borderRadius: '3px',
  fontFamily: "Arial, Helvetica, sans-serif",
  width: 120,
  height: 35,
  padding: '0',
  textAlign:'left',
  textIndent: '29%',
  backgroundColor: 'rgb(50, 50, 50)',
  fontSize: '15px',
  color: 'rgb(220, 210, 220)',
  margin:'auto',
  cursor: 'submit',
  lineHeight: "220%",
  outline: 'none',
  border: 'none',
  transitionDuration: '0.4s',
}
var errorStyle = {
  color : 'red',
}
var hoverStyle={

  borderRadius: '3px',
  fontFamily: "Arial, Helvetica, sans-serif",
  width: 120,
  height: 35,
  padding: '0',
  textAlign:'left',
  textIndent: '29%',
  backgroundColor: 'rgb(65, 65, 65)',
  fontSize: '15px',
  color: 'rgb(220, 210, 220)',
  margin:'auto',
  cursor: 'submit',
  lineHeight: "220%",
  outline: 'none',
  border: 'none',
  transitionDuration: '0.4s',
}

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      submitButton: submitStyle,
      error: 'None',
    }

    this.send = this.send.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.submitHover = this.submitHover.bind(this);
    this.submitLeave = this.submitLeave.bind(this);
  }

  sendMail() {

    var data = {
      service_id: 'service_vj1s9ch',
      template_id: 'template_yqzb1oh',
      user_id: 'user_15BRq8P7kUrCAeWK3NtAS',
      template_params: {
        'username': 'James',
        'from_name': 'thedudesname',
        'g-recaptcha-response': '281fb1a38f0f3ea19547994b6f6d0092',
        'message': 'hello daddy!',
        'message_html': 'big fish'
      }
    };
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      alert('Your mail is sent!');
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  }

  checkForm() {

  }
  submitHover()
  {
    this.setState({submitButton:hoverStyle })
  }
  submitLeave()
  {
    this.setState({submitButton:submitStyle })
  }
  send()
  {
    console.log('sending email');
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
   // var email = document.getElementById('message').value
    var response = validateEmail(email)
    switch (response)
    {
      case 'OK' :{
        //email is ok
        console.log('final-sending mail');
      }
      default:{
        this.setState({error:response})
      }
    }

  }
  errorMessage()
  {
    return React.createElement('div',{
      style: errorStyle
    }, this.state.error)
  }
  submitButton()
  {
    return React.createElement('button',
    {
     
      style: this.state.submitButton,
      onClick: this.send,
      onMouseEnter: this.submitHover,
      onMouseLeave: this.submitLeave,

    },this.icon(), 'Send')
  }
  icon()
  {
    return React.createElement('div',{
      style: mailStyle,
    })
  }

  render() {
    return (
      <div style={{textAlign:'center',height: window.innerHeight - 60, minHeight: '600px', }}>
        <section style={{ height: "40px" }}></section>

        <div className='form'> <input id='name' autoComplete='off' placeholder='Name' className='input-field'></input>   </div>
       
        <div className='form'> <input id='email' autoComplete='off' placeholder='Email' className='input-field'></input> </div>
        <div className='form'> <textarea id='message' placeholder='Message' type='text' className='input-area'></textarea></div>
        {this.submitButton()}
        {this.errorMessage()}
      
      </div>
    );
  }
}

/*

  <button onClick={this.sendMail} className='submit'>Submit</button>
   <div id='social-bar' style={{ position: 'absolute' }}>
          <img style={{ marginRight: '5px', width: '50px', height: '50px' }} src={githubIcon}></img>
          <img style={{ marginRight: '5px', width: '50px', height: '50px' }} src={facebookIcon}></img>
          <img style={{ marginRight: '5px', width: '50px', height: '50px' }} src={youtubeIcon}></img>
        </div>

*/
function is(match, to) {
  return match === to;
}
function validateEmail(email) {
  var special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var chars = 0;
  var containsAt = false;
  var domainIndex = 0;

  var specialIncrement = 0;
  if (email.length > 64) {
    return 'Email must be shorter than 64 characters'
  }

  for (let index = 0; index < email.length; index++) {
    const element = email[index];
    if (index == 0 && special.test(element)) {
      return 'Email cannot start with special character'
    }
    if (special.test(element)) {
      if (specialIncrement + 1 > 1) {
        return 'Cant have 2 consecutive special symbols after each other'
      } else
        specialIncrement++
    } else {
      specialIncrement = 0;
    }

    if (is(element, '@')) {
      domainIndex = index;
      containsAt = true;
      if (chars == 0) {
        return 'Email requires subdomain (subdomain@domain.com)'
      }
    }

    chars++

  }

  if (domainIndex + 1 == chars) {
    return 'You need to specify a domain (subdomain@domain.com)'
  }
  if (!containsAt) {
    return 'Email requires @ symbol'
  }

  return 'OK'
}
export default Contact;