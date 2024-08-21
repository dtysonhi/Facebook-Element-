import React from 'react';
import{ReactComponent as BellIcon } from './icons/bell.svg';
import{ReactComponent as BoltIcon } from './icons/bolt.svg';
import{ReactComponent as CaretIcon } from './icons/caret.svg';
import{ReactComponent as PlusIcon } from './icons/plus.svg';
import{ReactComponent as CogIcon } from './icons/cog.svg';
import{ReactComponent as ChevronIcon } from './icons/chevron.svg';
import{ReactComponent as ArrowIcon } from './icons/left-arrow.svg';
import{ReactComponent as MessengerIcon } from './icons/messenger.svg';

import React, {useState} from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon= {<PlusIcon />} />
      <NavItem icon= {<BellIcon />} />
      <NavItem icon= {<MessengerIcon />} />
     
      <NavItem icon= {<CaretIcon />} />

    </Navbar>
  );
}



function NavItem(props) {
  const[open, setOpen] = useState(false);

  return(
    <li className="nav-item"> 
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
        </a>
    </li>
  )
}

export default App;
