import React, { Component } from 'react';

//component imports
import GraphItem from '../components/graph-item/GraphItem';
import FlipCard from '../components/flip-card/FlipCard';

//image imports
import csIcon from '..//assets/svg/language-icons/csharp.svg';
import javaIcon from '..//assets/svg/language-icons/java.svg'
import pyIcon from '..//assets/svg/language-icons/python.svg'
import jsIcon from '..//assets/svg/language-icons/javascript.svg'
import cppIcon from '..//assets/svg/language-icons/cpp.svg'
import htmlIcon from '..//assets/svg/language-icons/html.svg'
import cssIcon from '..//assets/svg/language-icons/css.svg'


class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  //create welcome message to introduce language skillset
  greetingMessage(){
    return (
    <div style = {{marginTop: "40px"}}>
      <h3 className = "greeting">Hey there, my name is</h3>
      <h3 className = "name"> Angelo</h3>
      <h3 className = "greeting">, I really enjoy working on</h3>
    </div>
    )
  }

  //create introduction message for language skillset
  languageSkillsetMessage()
  {
    return (
      <div style = {{marginTop: "40px"}}>
      <h3 className = "greeting">Take a look at what</h3>
      <h3 className = "name"> languages </h3>
      <h3 className = "greeting">I know</h3>
    </div>
    )
  }

  //rendering of the about.js page
  render() {
    return (
      <div>
        {this.languageSkillsetMessage()}
        <div>
        <GraphItem icon = {csIcon}    delay = {0}   value = {95} duration = {1000}  title = 'C#'/>
        <GraphItem icon = {javaIcon}  delay = {100} value = {90} duration = {1000}  title = 'Java'/>
        <GraphItem icon = {jsIcon}    delay = {200} value = {85} duration = {1000}  title = 'Javascript'/>
        <GraphItem icon = {pyIcon}    delay = {300} value = {80} duration = {1000}  title = 'Python'/>   
        <GraphItem icon = {cppIcon}   delay = {400} value = {65} duration = {1000}  title = 'C++'/>
        <GraphItem icon = {htmlIcon}  delay = {500} value = {45} duration = {1000}  title = 'HTML'/>
        <GraphItem icon = {cssIcon}   delay = {600} value = {40} duration = {1000}  title = 'CSS'/>   
        </div>
        <FlipCard image = {null} title = {null} list = {null} />      
      </div>       
    );
  }
}

export default Home;