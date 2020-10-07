import React, { Component } from 'react';
import { mailStyle, submitStyle, errorStyle, errorStyleShow, hoverStyle } from '..//states/contact/contact.style'

import '../css/Contact.css';

var $ = require("jquery");



class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      submitButton: submitStyle,
      errorStyle: errorStyle,
      error: 'None',
    }
    this.send = this.send.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.submitHover = this.submitHover.bind(this);
    this.submitLeave = this.submitLeave.bind(this);
  }

  sendMail(name, email, message) {
    var data = {
      service_id: 'service_vj1s9ch',
      template_id: 'template_yqzb1oh',
      user_id: 'user_15BRq8P7kUrCAeWK3NtAS',
      template_params: {
        'username': `angelowolffportfolio`,
        'from_name': `${name}`,
        'message': `${message}`,
        'time': `${Date.now()}`,
        'sender_email': `${email}`,
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

  submitHover() {
    this.setState({ submitButton: hoverStyle })
  }
  submitLeave() {
    this.setState({ submitButton: submitStyle })
  }
  send() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    var response = validateEmail(email)
    switch (response) {
      case 'OK':
        this.sendMail(name, email, message);
        this.setState({ errorStyle: errorStyle })
        break;
      default:
        this.setState({ error: response, errorStyle: errorStyleShow })
        break;
    }
  }

  errorMessage() {
    return React.createElement('div', {
      style: this.state.errorStyle
    }, this.state.error)
  }

  submitButton() {
    return React.createElement('button',
      {

        style: this.state.submitButton,
        onClick: this.send,
        onMouseEnter: this.submitHover,
        onMouseLeave: this.submitLeave,

      }, this.icon(), 'Send')
  }

  icon() {
    return React.createElement('div', {
      style: mailStyle,
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', height: window.innerHeight - 60, minHeight: '580px', }}>
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


function validateEmail(email) {
  var special = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  var chars, domainIndex, specialIncrement = 0;
  var containsAt = false;
  if (email.length > 64) {
    return 'Email must be shorter than 64 characters'
  }
  for (let index = 0; index < email.length; index++) {
    const element = email[index];
    if (index === 0 && special.test(element)) {
      return 'Email cannot start with special character'
    }
    if (special.test(element)) {
      if (specialIncrement + 1 > 1) {
        return 'Cant have 2 consecutive special symbols after each other'
      } else
        specialIncrement++
    } else specialIncrement = 0;

    if (is(element, '@')) {
      domainIndex = index;
      containsAt = true;
      if (chars === 0) {
        return 'Email requires subdomain (subdomain@domain.com)'
      }
    }
    chars++;
  }
  if (domainIndex + 1 === chars) {
    return 'You need to specify a domain (subdomain@domain.com)'
  }
  if (!containsAt) {
    return 'Email requires @ symbol'
  }
  return 'OK'
}

function is(match, to) {
  return match === to;
}

export default Contact;