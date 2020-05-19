import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section data-section='contact'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-5'>
                    <div className='about-desc'>
                      <span className='heading-meta'>Get in touch</span>
                      <h2 className='colorlib-heading'>Contact</h2>
                    </div>
                    <span className='email'>
                      <i className='icon-mail'></i> biancardona.rivera@gmail.com
                    </span>

                    <br />
                    <br />
                    <div className='colorlib-icon'>
                      <nav id='colorlib-main-menu'>
                        <ul>
                          <div
                            className='colorlib-feature-sm animate-box fadeInLeft animated'
                            data-animate-effect='fadeInLeft'
                          >
                            <a
                              href='https://www.linkedin.com/in/bianca-cardona-rivera/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <i className='icon-linkedin2 colorlib-icons colorlib-features'></i>
                            </a>
                          </div>
                          <div
                            className='colorlib-feature-sm animate-box fadeInLeft animated'
                            data-animate-effect='fadeInLeft'
                          >
                            <a
                              href='https://github.com/Biancardona'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <i className='icon-github colorlib-icons colorlib-features'></i>
                            </a>
                          </div>
                          <div
                            className='colorlib-feature-sm animate-box fadeInLeft animated'
                            data-animate-effect='fadeInLeft'
                          >
                            <a
                              href='https://fitterhappiergdl.com/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <i className='icon-blogger2 colorlib-icons colorlib-feature'></i>
                            </a>
                          </div>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
