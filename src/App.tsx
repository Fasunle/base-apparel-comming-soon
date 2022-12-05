import React from 'react';
import {useForm} from 'react-hook-form';
import logo from './assets/logo.svg';
import arrowIcon from './assets/icon-arrow.svg';
import heroMobileImage from './assets/hero-mobile.jpg';
import heroDesktopImage from './assets/hero-desktop.jpg';

const App = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<{email: string}>();

  const subscribe = (email: string) => {
    console.log(email);
  };

  return (
    <div className='app'>
      <main className='content'>
        <div className='info'>
          <header className='header'>
            <nav className='navbar'>
              <div className='logo'>
                <img src={logo} alt='Base Apparel' />
              </div>
            </nav>
          </header>
          <h1 className='info__header'>
            We&lsquo;re <span className='coming'>coming soon</span>
          </h1>
          <p className='info__description'>
            Hello fellow shoppers! We&lsquo;re currently building our new
            fashion store. Add your email below to stay up-to-date with
            announcements and our launch deals.
          </p>
          <form
            className='email'
            onSubmit={handleSubmit(({email}) => {
              // subscription logic
              subscribe(email);
            })}
          >
            <input
              {...register('email', {
                pattern: {
                  value:
                    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
                  message: 'Please provide a valid email',
                },
                required: true,
              })}
              placeholder='Email Address'
              className={`input--email${
                errors.email?.message ? ' input--error' : ''
              }
              `}
            />
            <div className='cta'>
              {errors.email?.message && <span className='error--icon'></span>}
              <button className='btn btn--subscribe' type='submit'>
                <img className='icon' src={arrowIcon} alt='' />
              </button>
            </div>
          </form>
          <p className='error'>{errors.email?.message}</p>
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
