import React from 'react';
import logo from './assets/logo.svg';
import arrowIcon from './assets/icon-arrow.svg';
import heroMobileImage from './assets/hero-mobile.jpg';
import heroDesktopImage from './assets/hero-desktop.jpg';

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt='Base Apparel' />
          </div>
        </nav>
      </header>

      <main className='content'>
        <div className='info'>
          <h1 className='info__header'>
            We're <span className='coming'>coming soon</span>
          </h1>
          <p className='info__description'>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <div className='email'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='input--email'
            />
            <button className='btn btn--subscribe'>
              <img className='icon' src={arrowIcon} alt='' />
            </button>
          </div>
        </div>

        <div className='hero'>
          <picture>
            <source media='(min-width: 40em)' srcSet={heroDesktopImage} />
            <img src={heroMobileImage} alt='Hero image' />
          </picture>
        </div>
      </main>
    </div>
  );
};

export default App;
