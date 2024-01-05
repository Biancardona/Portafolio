import React, { Component } from 'react';
import { FiletypeJs } from 'react-bootstrap-icons';

export default class Education extends Component {
  render() {
    return (
      <div>
        <section data-section='education'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>Timeline</span>
                <h2 className='colorlib-heading animate-box'>Education</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <FiletypeJs className='icon' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          FRONTEND DEVELOPER <span>2015-2016</span>
                        </h2>
                        <h3> Laboratoria</h3>
                        <p>
                          I was trained on JS Frontend development by creating
                          several projects implementing agile methodologies,
                          using Javascript, HTML5, CSS, React, among others.
                          Including technical and soft skills as well as
                          self-study techniques.
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
                          SPORT NUTRITION <span>2015-2016</span>
                        </h2>
                        <p>
                          I have completed a Sport Nutrition course from
                          SportMed Clinic plus Level 1 Anthropometry,
                          internationally recognised by the International
                          Society for the Advancement of Kinanthropometry
                          (ISAK). During my time at this course I learned formal
                          techniques to measure the human body as well as to
                          calculate macronutrients in order to design different
                          types of nutritional programs; with emphasis on sports
                          nutrition.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-2'>
                        <i className='icon-study' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          UNIVERSIDAD DE GUADALAJARA <span>2007-2011</span>
                        </h2>
                        <p>
                          I graduated from the Centro Universitario de Ciencias
                          Sociales y Humanidades from University of Guadalajara,
                          obtaining my bachelor's degree.
                        </p>
                        <br />
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
