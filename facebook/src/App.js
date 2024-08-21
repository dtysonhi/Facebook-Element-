import React from 'react';
import{ReactComponent as BellIcon } from './icons/bell.svg';
import{ReactComponent as BoltIcon } from './icons/bolt.svg';
import{ReactComponent as CaretIcon } from './icons/caret.svg';
import{ReactComponent as PlusIcon } from './icons/plus.svg';
import{ReactComponent as CogIcon } from './icons/cog.svg';
import{ReactComponent as ChevronIcon } from './icons/chevron.svg';
import{ReactComponent as ArrowIcon } from './icons/left-arrow.svg';



function App() {
  return (
    <Navbar>
      <NavItem icon= {<PlusIcon />} />
      <NavItem icon= {<BellIcon />} />
      <NavItem icon= {<BoltIcon />} />
      <NavItem icon= {<CaretIcon />} />
      <NavItem icon= {<CogIcon />} />
      <NavItem icon= {<ChevronIcon />} />
      <NavItem icon= {<ArrowIcon />} />

    </Navbar>
  );
}

function Navbar(props){
  return(
    <nav className = "navbar">
    <ul className = "navbar-nav"> {props.children } </ul>  
    </nav>
  )
}
function NavItem(props) {
  return(
    <li className="nav-item"> 
      <a href="#" className="icon-button">
        {props.icon}
        </a>
    </li>
  )
}

export default App;
