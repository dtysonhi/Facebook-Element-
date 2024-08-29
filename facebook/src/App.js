import './index.css';
import React, { useState, useRef, useEffect } from 'react';


import{ReactComponent as BellIcon } from './icons/bell.svg';
import{ReactComponent as BoltIcon } from './icons/bolt.svg';
import{ReactComponent as CaretIcon } from './icons/caret.svg';
import{ReactComponent as PlusIcon } from './icons/plus.svg';
import{ReactComponent as CogIcon } from './icons/cog.svg';
import{ReactComponent as ChevronIcon } from './icons/chevron.svg';
import{ReactComponent as ArrowIcon } from './icons/left-arrow.svg';
import{ReactComponent as MessengerIcon } from './icons/messenger.svg';
import{ReactComponent as Polpo } from './icons/polpo.webp';


import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
    <NavItem icon={<PlusIcon />} />
    <NavItem icon={<BellIcon />} />
    <NavItem icon={<MessengerIcon />} />
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem>
  </Navbar>
   
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        <DropdownItem leftIcon= '😄' >My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🐿️"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Ronnie, I Did It!!!</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>It took so many hours 😭</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>So many trials and tribulations</DropdownItem>
         
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={600}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦁">Simba</DropdownItem>
          <DropdownItem leftIcon="🐭">Stuart</DropdownItem>
          <DropdownItem leftIcon="🐔">Foghorn Leghorn</DropdownItem>
          <DropdownItem leftIcon="🐗">Pumba</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;