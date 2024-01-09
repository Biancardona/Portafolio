import React, { Component } from 'react';

import { CodeSlash, PencilFill, PenFill } from 'react-bootstrap-icons';

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
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color'>
                        <i className='icon-code' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          FULL STACK DEVELOPER <span>Apr 2023 - Dic 2023</span>
                        </h2>
                        <h3> Improving</h3>
                        <p>
                          Throughout this period, I've dedicated myself to
                          enhancing and mastering my backend stack by developing
                          various types of applications using technologies such
                          as React, Tailwind CSS, NodeJS, MongoDB. Currently,
                          I'm actively engaged in developing a serverless
                          projects with AWS, Typescript, CDK V2, CloudFormation,
                          Cognito, Lambda and Amplify.
                        </p>
                        <p>
                          <bold>TECHNOLOGY STACK: </bold>JavaScript, (ES6),
                          React, NodeJS, MongoDB, AWS, Typescript.
                        </p>
                        <br />
                        <a
                          className='btn btn-primary-timeline btn-learn'
                          href='https://www.linkedin.com/showcase/improving-nearshore/posts/?feedView=all'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          More about Improving
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-2'>
                        <PencilFill className='icon' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          FORM CREATOR
                          <span> Mar 2021-Apr 2023</span>
                        </h2>
                        <h3> Improving/Auxita</h3>
                        <p>
                          I employed a library called Blockly, specifically
                          designed for constructing visual programming editors.
                          My daily responsibilities revolved around developing
                          and rigorously testing a digital adaptation of PDF
                          forms.This solution was aimed at enabling end-users,
                          primarily physicians, to seamlessly input information
                          into these forms through an application.
                        </p>
                        <p>
                          ACHIEVEMENTS:The enhanced platforms facilitated
                          seamless collaboration between patients and doctors,
                          streamlined development processes, ensured data
                          security, and provided scalability and reliability.
                          The project’s success serves as a testament to the
                          value of strong partnerships and the effective
                          implementation of technology-driven solutions.
                        </p>
                        <br />
                        <a
                          className='btn btn-primary-timelinetwo btn-learn'
                          href='https://auxita.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          More about Auxita
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <CodeSlash className='icon' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          INTERN FRONTEND DEVELOPER
                          <span> 2020-2021</span>
                        </h2>
                        <h3> Improving</h3>
                        <p>
                          Gained hands-on experience in implementing agile
                          methodologies within the dynamic landscape of a
                          substantial development team. Expertly navigated
                          through Scrum and Kanban frameworks, leveraging the
                          power of Jira for streamlined activity tracking.
                          Implemented internal checklists to catalyze the
                          efficiency of our development process, ensuring a
                          well-orchestrated workflow. Drove the creation and
                          meticulous organization of Confluence documentation,
                          fostering a knowledge-sharing culture. Additionally,
                          played a pivotal role in coordinating team activities,
                          contributing to the cultivation of a healthier and
                          more integrated work environment. The seamless
                          integration of these practices not only enhanced
                          project efficiency but also nurtured a collaborative
                          and synergistic team atmosphere.
                        </p>
                        <br />
                        <a
                          className='btn btn-primary-timelinethree btn-learn'
                          href='https://www.linkedin.com/showcase/improving-nearshore/posts/?feedView=all'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          More about Improving
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <PenFill className='icon' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          DIGITAL CONTENT AUTHOR MI NUTRIOLOGO APP{' '}
                          <span>2018-2019</span>
                        </h2>
                        <h3> Mi Nutriologo App</h3>
                        <p>
                          Online Nutrition consultancy. My activities included
                          tracking the progress of subscribers to achieve a
                          healthier lifestyle; updating the users database,
                          gathering information that later was used to
                          calculate, designing and programming a nutritional
                          menu. Also, I was in charge of remotely attending
                          users concerns, doubts and comments. During my time in
                          'Mi Nutriologo', I developed interest in learning
                          programming and found a way to relate to this area
                          with the IT industry.
                        </p>
                        <br />
                        <a
                          className='btn btn-primary-timelinefour btn-learn'
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
