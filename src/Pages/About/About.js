import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Bibiwei Pere | About</title>
      </Helmet>
      <section className="text-gray-700 px-6 body-font dark:text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-4xl text-left tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
            Web Application
            <span className="text-indigo-600 dark:text-indigo-500">
              Developer
            </span>
          </h2>
          <p className="mt-3 text-left text-3xl dark:text-white text-dark sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact. I’m currently learning JavaScript more
            advance
          </p>
            <div className="flex justify-center">
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1ZBioCcrhS1JKp-6Azu61jH2RSeBtu_bB/view?usp=sharing"
                target={'_blank'}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Resume
              </a>
              <Link to="/contact">
                <button className="inline-flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.ibb.co/0F27pVK/Akram-Sakib.png"
            />
          </div>
        </div>
      </section>
      <section className="edu_cation">
        <div className="educationWrapper">
          <div className="workheading dark:text-white">Education</div>

          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">Primary School Certificate</h3>
                  <p className="dark:text-gray-400">
                    Burutu Primary School
                  </p>
                  <p className="dark:text-gray-400">
                    Completed PSC From Burutu Primary School
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">2004 - 2009</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">
                    Secondary School Certificate
                  </h3>
                  <p className="dark:text-gray-400">
                    Burutu Grammar School
                  </p>
                  <p className="dark:text-gray-400">
                    Completed SSC From Burutu Grammar School
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">2009 - 2015</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">Medicine and Surgery</h3>
                  <p className="dark:text-gray-400">
                    Niger Delta University
                  </p>
                  <p className="dark:text-gray-400">
                    I'm currently studying in Niger Delta University
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">2016 - 2022</h4>
                </div>
              </li>
              <div style={{ clear: 'both' }}></div>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font dark:text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="skills_left">
            <div className="my-8">
              <span className="text-indigo-700 text-lg">Skills</span>
              <h3 className="text-4xl uppercase font-extrabold">
                Programming Skills
              </h3>
            </div>
            <div className="my-8 w-4/6">
              <p>
                For about a year now, have been accomplishing enough skills
                with modern Web Development, new generation web and app
                programming language.
              </p>
            </div>
            <div className="progress_bar">
              <div className="my-4">
                <div className="mb-1 text-base font-medium">HTML</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">CSS</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">Javascript</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">React</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">Styled Components</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">Tailwind CSS</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="right-img w-4/6
           relative"
          >
            <div className="w-4/6 h-96 bg-indigo-600">
              <img
                src="https://marketifythemes.net/html/kura/img/portfolio/2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;