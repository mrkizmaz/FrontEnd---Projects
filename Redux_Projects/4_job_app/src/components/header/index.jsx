import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.scss"

const Header = () => {
    return (
        <header>
            <h2>Is Takip Uygulamasi</h2>

            <nav>
                <NavLink to='/'>Is Listesi</NavLink>
                <NavLink to='/create'>Is Ekle</NavLink>
            </nav>
        </header>
    )
}

export default Header