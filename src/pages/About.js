import React, { Component } from 'react';

//component imports
import GraphItem from '../components/graph-item/GraphItem';
import FlipCard from '../components/flip-card/FlipCard';

//svg imports
import csIcon from '..//assets/svg/language-icons/csharp.svg';
import javaIcon from '..//assets/svg/language-icons/java.svg'
import pyIcon from '..//assets/svg/language-icons/python.svg'
import jsIcon from '..//assets/svg/language-icons/javascript.svg'
import cppIcon from '..//assets/svg/language-icons/cpp.svg'
import htmlIcon from '..//assets/svg/language-icons/html.svg'
import cssIcon from '..//assets/svg/language-icons/css.svg'

//png imports
import databasesLogo from '../assets/images/databases.png'
import serverLogo from '../assets/images/server.png'
import osLogo from '../assets/images/os.png'
import ideLogo from '../assets/images/ide.png'

//text style
import {header} from '..//states/text.style'
class Home extends Component {
  //rendering of the about.js page
  render() {
    return (
      <div>
        
        <div id='graph' style={{ textAlign: 'center', height: window.innerHeight, minHeight: '850px', }}>
          <section style={{ height: '20px' }}></section>
          <div style = {header}>My <div className='name'>language</div> skillset </div>
          <div>
            <GraphItem  icon={csIcon}    delay={0}   value={95} title='C#' />
            <GraphItem  icon={javaIcon}  delay={100} value={90} title='Java' />
            <GraphItem  icon={jsIcon}    delay={200} value={85} title='Javascript' />
            <GraphItem  icon={pyIcon}    delay={300} value={80} title='Python' />
            <GraphItem  icon={cppIcon}   delay={400} value={65} title='C++' />
            <GraphItem  icon={htmlIcon}  delay={500} value={45} title='HTML' />
            <GraphItem  icon={cssIcon}   delay={600} value={40} title='CSS' />
          </div>

          <div style={{ paddingTop: "10%" }}>
            <div style = {header}>My <div className='name'>technology</div> skillset </div>
            <FlipCard  image={databasesLogo} title={"Databases"}  itemlist={['MongoDB', 'MySQL', 'MemSQL', 'SQLite',]} />
            <FlipCard  image={serverLogo}    title={"Servers"}    itemlist={['Apache', 'Oracle', 'Azure', '‎‎‏‏‎ ‎',]} />
            <FlipCard  image={osLogo}        title={"OpSys"}      itemlist={['Windows XP/2000/95', 'Windows 7/8/10', 'Kali Linux', 'Lubuntu']} />
            <FlipCard  image={ideLogo}       title={"IDEs"}       itemlist={['Visual Studio', '‎‎‏‏‎PyCharm', '‎‎‏‏‎Android Studio', 'IntelliJ‎‎‏‏‎‎']} />
          </div>

        </div>
      </div>
    );
  }
}


export default Home;