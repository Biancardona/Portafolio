import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Me</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        Im a Frontend Developer and I have experience in
                        building websites and desktop applications using
                        JavaScript, React, HTML, CSS.
                        <br /> I also have been interested in the self
                        care/fitness area, I have a blog where I write articles
                        about nutrition, and now I enjoy being able to couple
                        both passions in one.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here are some of my proyects
                </h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Rick & Morty DATA </h3>
                    <p>
                      A web page to display a set of data of all the characters
                      in Rick & Morty series. Technology stack:
                      <br /> UX, HTML5, CSS3, Vanilla JavaScript(ES6), Git,
                      Github.
                      <br />
                      <br />
                      <a
                        className='btn btn-primary btn-learn'
                        href='https://biancardona.github.io/GDL004-data-lovers/src/index.html'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View web page
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>lomitos-suavecitos</h3>
                    <p>
                      A social network to share information with other users
                      about your pets.
                      <br /> Technology stack:
                      <br /> SPA, MVC, HTML5, CSS3, Vanilla JavaScript(ES6),
                      Firebase, Git, Github.
                      <br />
                      <br />
                      <a
                        className='btn btn-primary btn-learn'
                        href='https://biancardona.github.io/lomitos-suavecitos/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View web page
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-video-outline' />
                  </span>
                  <div className='desc'>
                    <h3>Lab-Movie</h3>
                    <p>
                      Website created with create-react-app where users could
                      find out information about many kind of movies.
                      <br /> Technology stack:
                      <br /> HTML5, CSS3, ES6, React, Git, Github.
                      <br />
                      <br />
                      <a
                        className='btn btn-primary btn-learn'
                        href='https://labmovies.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View web page
                      </a>
                    </p>
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
