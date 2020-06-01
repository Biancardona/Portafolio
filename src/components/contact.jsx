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
                      <i className='icon-mail'></i>{' '}
                      <a href='mailto:biancardona.rivera@gmail.com'>
                        {' '}
                        biancardona.rivera@gmail.com
                      </a>
                    </span>
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
