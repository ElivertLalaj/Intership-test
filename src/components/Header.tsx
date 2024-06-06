import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Header.css"


interface HeaderProps {
  setAnimalType: (type: string) => void;
  searchAnimal: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchAnimal }) => {
  return (
    <header>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        </ul>
        </nav>
        <nav className="btn-group">
  <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul className="dropdown-menu">
        <li>
          <Link to="/birds">Birds</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <Link to="/contantUs">ContantUs</Link>
        </li>
        <li>
          <Link to="/aboutUs">AboutUs</Link>
        </li>
        </ul>
        </nav>
      <input type="text" placeholder="Search..." onChange={(e) => searchAnimal(e.target.value)} />
    </header>
  );
};

export default Header;
