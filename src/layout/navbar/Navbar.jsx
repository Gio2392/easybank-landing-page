import { useEffect, useRef, useState } from 'react';

import { getData } from '../../helpers/getData';
import logo from '../../assets/logo.svg';
import openMenu from '../../assets/icon-hamburger.svg';
import closeMenu from '../../assets/icon-close.svg';

import './navbar.css';
import { Button } from '../../components/Button';

export const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const { nav } = getData();

    const menuRef = useRef();

    const handleClick = () => {
        setisOpen(!isOpen)
    }

    useEffect(() => {

        const handleCloseMenu = (e) => {
            if(!menuRef.current.contains(e.target)){
                setisOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handleCloseMenu)
        
        return () => {
            document.removeEventListener('mousedown', handleCloseMenu)
      }
    }, [])
    
    
  return (
    <header className='site__navbar'>
        <nav className='navbar container' ref={menuRef}>
            <a className="navbar__logo" href='/' >
                <img src={logo} alt="logo" />
            </a>
        
            <ul className={`navbar__menu ${isOpen ? 'active' : ''}`} >
                {
                    nav.menu.map( (item, index) => (
                        <li 
                        key={index}
                        className='navbar__menu-item'
                        onClick={() => setisOpen(false)}
                        >
                        <a href={`#${item}`}>{item}</a>
                        </li>
                    ))
                }
            </ul>
            
            <button className='navbar__toggle' onClick={handleClick}>
                <img src={isOpen ? closeMenu : openMenu} alt="" />
            </button>   

            <Button text='Request Invite'/>
        </nav>
        <div className={`overlay ${isOpen ? 'active' : ''}`}></div>            
    </header>
  )
}

