import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id='colorlib-hero'
          className='js-fullheight'
          data-section='home'
        >
          <div className='flexslider js-fullheight'>
            <ul className='slides'>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner js-fullheight'>
                        <div className='desc'>
                          <h1>I'm Bianca</h1>
                          <p>
                            <a
                              className='btn btn-primary btn-learn'
                              href='https://drive.google.com/file/d/1GmMva9MFioEppl0OBW4nmIrbNK4kyd6U/view?usp=sharing'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              View CV
                              <i className='icon-download4' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h2>
                            A passionate creator in crafting applications!!
                          </h2>
                          <p>
                            <a
                              className='btn btn-primary btn-learn'
                              href='https://github.com/Biancardona'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              View Projects <i className='icon-briefcase3' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h2>
                            Beyond coding,
                            <br />I find joy in expressing myself through
                            writing on my personal blog{' '}
                          </h2>
                          <p>
                            <a
                              className='btn btn-primary btn-learn'
                              href='https://fitterhappiergdl.com/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              View Blog <i className='icon-book' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
