import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">АртурРес</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Купить книгу</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Продать книгу</a>
          </li>
        </ul>
      </div>
                  <img style={{width: 150, height: 100, marginRight: 450}} src='https://camo.githubusercontent.com/c704e8013883cc3a04c7657e656fe30be5b188145d759a6aaff441658c5ffae0/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667'/>

      <form className="form-inline">
        <input className="form-control" type="text" placeholder="Поиск" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    </header>
  );
}

export default Header;
