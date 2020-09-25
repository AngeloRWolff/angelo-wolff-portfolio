// Home.js
import React, { Component } from 'react';
import LikeBox from '../components/class/LikeBox';
import GraphItem from '../components/class/GraphItem';
import csIcon from '..//assets/svg/csharp.svg';
import javaIcon from '..//assets/svg/java.svg'
import pyIcon from '..//assets/svg/python.svg'
import jsIcon from '..//assets/svg/javascript.svg'
import cppIcon from '..//assets/svg/cpp.svg'
import htmlIcon from '..//assets/svg/html.svg'
import cssIcon from '..//assets/svg/css.svg'
import FlipCard from '../components/class/FlipCard';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.greetingMessage = this.greetingMessage.bind(this);
    this.programSkillsMessage = this.programSkillsMessage.bind(this);
  }
  
  
  greetingMessage()
  {
    return (
    <div style = {{marginTop: "40px"}}>
      <h3 className = "greeting">Hey there, my name is</h3>
      <h3 className = "name"> Angelo</h3>
      <h3 className = "greeting">, I really enjoy working on</h3>
    </div>
    )
  }

  programSkillsMessage()
  {
    return (
      <div style = {{marginTop: "40px"}}>
      <h3 className = "greeting">Take a look at what</h3>
      <h3 className = "name"> languages </h3>
      <h3 className = "greeting">I know</h3>
    </div>
    )
  }

  /*

{this.greetingMessage()};
        <div className = "canvas">
        <LikeBox content = "A"></LikeBox>
        <LikeBox content = "B"></LikeBox>
        <LikeBox content = "C"></LikeBox>
        </div>
        {this.programSkillsMessage()}


         <GraphItem delay = {1250} value = {90}/>
        <GraphItem delay = {1300} value = {80}/>
        <GraphItem delay = {1350} value = {70}/>
        <GraphItem delay = {1400} value = {60}/>
        <GraphItem delay = {1450} value = {50}/>
        <GraphItem delay = {1500} value = {40}/>
        <GraphItem delay = {1550} value = {30}/>
        <GraphItem delay = {1600} value = {20}/>
        <GraphItem delay = {1650} value = {10}/>     


 */
  render() {
    return (
      <div>
        These are the programming languages i know
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