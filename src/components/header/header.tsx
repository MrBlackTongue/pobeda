import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li>
            <Link to='/'>Главная</Link>
            <Link to='/ads'>Объявления</Link>
            <Link to='/newAd'>Создать новое</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;