import React, { Component } from 'react';

//component imports
import GraphItem from '../components/graph-item/GraphItem';
import FlipCard from '../components/flip-card/FlipCard';
import Menu from '../components/menu'
//svg imports
import csIcon from '..//assets/svg/language-icons/csharp.svg';
import javaIcon from '..//assets/svg/language-icons/java.svg'
import pyIcon from '..//assets/svg/language-icons/python.svg'
import jsIcon from '..//assets/svg/language-icons/javascript.svg'
import cppIcon from '..//assets/svg/language-icons/cpp.svg'
import htmlIcon from '..//assets/svg/language-icons/html.svg'
import cssIcon from '..//assets/svg/language-icons/css.svg'

//png imports
//import reactLogo from '../assets/images/'
import databasesLogo from '../assets/images/databases.png'

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  //create welcome message to introduce language skillset
  greetingMessage(){
    return (
    <div>
      <div className = "greeting">My</div>
      <div className = "name"> Technology Skillset...</div>
      
    </div>
    )
  }

  //create introduction message for language skillset
  languageSkillsetMessage()
  {
    return (
      <div style = {{marginTop: "40px"}}>
      <div className = "greeting">My</div>
      <div className = "name"> language skillset</div>
     
    </div>
    )
  }

  //rendering of the about.js page
  render() {
    return (
      <div>
      
      <div style = {{textAlign: 'center', height: window.innerHeight, minHeight: '600px', }}>
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

       
        <div style = {{paddingTop : "10%"}}>
        {this.greetingMessage()}
        <FlipCard image = {databasesLogo} title = {"Databases"} itemlist = {['Helow', 'World', 'g', 'g',]} />
        <FlipCard image = {databasesLogo} title = {"Databases"} itemlist = {['g', 'bigfat', 'g', 'g',]} />
        <FlipCard image = {databasesLogo} title = {"Databases"} itemlist = {['g','G','g','g']} /> 
        <FlipCard image = {databasesLogo} title = {"Databases"} itemlist = {[' ',' ',' ',' ']} />       
        </div> 
      </div>  
      </div>     
    );
  }
}

export default Home;