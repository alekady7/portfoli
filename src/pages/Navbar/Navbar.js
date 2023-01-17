import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import About from '../About/About'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <Link className='nav-btns' to='/'>Logo</Link>
            </div>

            <div className='navbar__right'>
                <Link className='nav-btns' to='/projects' element={<Projects />}>Projects</Link>
                <Link className='nav-btns' to='/about' element={<About />}>About</Link>
                <Link className='nav-btns' to='/contact' element={<Contact />}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar