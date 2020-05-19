import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>Timeline</span>
                <h2 className='colorlib-heading animate-box'>Experience</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-code' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          BOOTCAMP LABORATORIA <span> 2019-present</span>
                        </h2>
                        <p>
                          During my time at Laboratoria I developed several JS
                          projects using agile methodologies. I Worked in an
                          environment similar to the ones in the current IT
                          industry. I acquired JS development skills as well as
                          soft skills that enabled me to strengthen my
                          communication and teamwork abilities; as well as
                          adaptability and planning of different types of JS
                          projects.
                          <br />
                          <br />
                          <a
                            className='btn btn-primary-timeline btn-learn'
                            href='https://www.laboratoria.la/'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            More about Laboratoria
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-device-laptop' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          DIGITAL CONTENT AUTHOR MI NUTRIOLOGO APP{' '}
                          <span>2018-2019</span>
                        </h2>
                        <p>
                          Online Nutrition consultancy, my activities included
                          tracking the progress of subscribers to achieve a
                          healthier lifestyle; updated the users database,
                          gathered information that later was used to calculate,
                          design and program a nutritional menu. Also I was in
                          charge of attending users concerns, doubts and
                          comments remotely. During my time in 'Mi Nutriologo',
                          I developed interest in learning programming and find
                          a way to relate this area with the IT industry.
                        </p>
                        <br />
                        <a
                          className='btn btn-primary-timelinetwo btn-learn'
                          href='https://www.linkedin.com/company/mi-nutri%C3%B3logo/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          More about Mi Nutriologo
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          SPORT´S NUTRITION <span>2015-2016</span>
                        </h2>
                        <p>
                          I have completed a Sport´s Nutrition certification
                          from SportMed Clinic plus ISAK Level 1 Anthropometry.
                          During my time at this course I learned formal
                          techniques to measure the human body as well as
                          calculate macronutrients in order to desing different
                          types of nutritional programs.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry begin animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-none'></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
