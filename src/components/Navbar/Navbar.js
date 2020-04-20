import React, {useState} from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import LogoFrigo from '../Assets/LogoFrigo/LogoFrigo';
import { bubble as Menu } from 'react-burger-menu'

const Navbar = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)


    const closeMenu = () => {
        setSideMenuOpen(!sideMenuOpen)
    }



    return (
        <nav className={'Navbar'}>
        <div className={'LogoAndTitleContainer'} >
            <LogoFrigo width={'75px'} height={'75px'}/>
            <h2>Empty your fridge</h2>
        </div>
        <Menu isOpen={sideMenuOpen} width={ '250px' } right className='BurgerMenu'>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/home'>Home</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/inMyFridge'>In my fridge</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/aboutUs'>About us</Link></div>
                    <div className='navItemsBurger'><Link onClick={closeMenu} smooth to='/contactUs'>Contact us</Link></div>

        </Menu>
            <div className={'NavItemsContainer'}>
                <div className={'NavItems'}><Link smooth to='/home'>Home</Link></div>
                <div className={'NavItems'}><Link smooth to='/inMyFridge'>In my fridge</Link></div>
                <div className={'NavItems'}><Link smooth to='/aboutUs'>About us</Link></div>
                <div className={'NavItems'}><Link smooth to='/contactUs'>Contact us</Link></div>   
            </div>
        </nav>
    )
}

export default Navbar;