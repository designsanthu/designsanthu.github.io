import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './components/Home'
import Designs from './components/Designs'
import WeddingAlbums from './components/WeddingAlbums'
import WeddingInvitations from './components/WeddingInvitations'
import Photography from './components/Photography'
import About from './components/About'

import logo from './images/logo.png'
function App() {
  return (
    <div className="">
      <div className='color-ribbon'></div>
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className='container'>
          <img className='navbar-brand nav-logo m-auto d-sm-inline d-md-inline d-lg-none' src={logo} alt='LOGO' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/designs'>Designs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/wedding-invitations'>Weddings Invitations</Link>
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <img className='navbar-brand nav-logo m-0 ms-2 d-none d-sm-none d-md-none d-lg-inline' src={logo} alt='LOGO' />
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/wedding-albums'>Weddings Albums</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/photography'>Photography</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='routes'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/wedding-albums" element={<WeddingAlbums />} />
          <Route path="/wedding-invitations" element={<WeddingInvitations />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
