import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href='#navbar'
            className='js-colorlib-nav-toggle colorlib-nav-toggle'
            data-toggle='collapse'
            data-target='#navbar'
            aria-expanded='false'
            aria-controls='navbar'
          >
            <i />
          </nav>
          <aside id='colorlib-aside' className='border js-fullheight'>
            <div className='text-center'>
              <div
                className='author-img'
                style={{ backgroundImage: 'url(images/about.jpg)' }}
              />
              <h1 id='colorlib-logo'>
                <a href='index.html'>Bianca Cardona</a>
              </h1>
              <p id='colorlib-phrase'>
                {' '}
                "Faithful to increase my knowledge in all aspects of my life is
                my personal value."
              </p>
              <span className='email'>
                <i className='icon-mail'></i>{' '}
                <a href='mailto:biancardona.rivera@gmail.com'>
                  {' '}
                  biancardona.rivera@gmail.com
                </a>
              </span>
            </div>
            <nav id='colorlib-main-menu' role='navigation' className='navbar'>
              <div id='navbar' className='collapse'>
                <ul>
                  <li className='active'>
                    <br />
                    <a href='#home' data-nav-section='home'>
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href='#about' data-nav-section='about'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#timeline' data-nav-section='timeline'>
                      Expercience
                    </a>
                  </li>
                  <li>
                    <a href='#timeline' data-nav-section='education'>
                      Education
                    </a>
                  </li>
                  <li>
                    <a href='#contact' data-nav-section='contact'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id='colorlib-main-menu'>
              <ul>
                <li>
                  <a
                    href='https://www.linkedin.com/in/bianca-cardona-rivera/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon-linkedin2' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Biancardona'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://fitterhappiergdl.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon-blogger2'></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className='colorlib-footer'>
              <p>
                <small>
                  {/* // Made with <i className='icon-heart' aria-hidden='true' /> */}
                  <br></br>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
