import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
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
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          BOOTCAMP LABORATORIA <span>2019-present</span>
                        </h2>
                        <p>
                          I developed several JS projects using agile
                          methodologies. I Worked in an environment similar to
                          the ones in the current IT industry. I learned JS
                          development skills as well as soft skills that enabled
                          me to strength my communication and teamwork; as well
                          as adaptability and planning of different types of JS
                          projects..
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
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          CONTENT AUTHOR MI NUTRIOLOGO APP<span>2018-2019</span>
                        </h2>
                        <p>
                          Online Nutrition consultancy, my activities included
                          tracking the progress of subscribers to achieve a
                          healthier lifestyle; updated the u s e r s d a t a b a
                          s e , g a t h e r e d information that later was used
                          to calculate, design and program a nutritional menu.
                          Also I was in charge of attending users concerns,
                          doubts and comments remotely.
                        </p>
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
                          Primary and Higher Education <span>2003-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
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
