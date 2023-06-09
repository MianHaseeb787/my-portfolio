import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const services = () => {
  return (
    <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>Application Development</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Flutter app development for iOS and Android platforms</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Customized UI/UX design and implementation</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Integration of RESTful APIs and third-party services.</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Cross-platform development to ensure compatibility across multiple devices</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Native performance with Flutter's high-performance rendering engine</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Firebase integration for backend services, authentication, and real-time updates</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Implementation of state management solutions like Provider or BLoC pattern</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Responsive and adaptive design to cater to various screen sizes</p>
                    </li>
                </ul>
            </article>

            {/* 2 */}

            <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Custom web application development using React.js</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Responsive and mobile-first web design and development</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Building reusable and scalable components using React's component-based architecture</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Integration of APIs and backend services for seamless data communication</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Single-page applications (SPAs) development for fast and interactive user experiences</p>
                    </li>
                </ul>
            </article>

            {/* 3 */}
            <article className="service">
                <div className="service__head">
                    <h3>Data Analysis</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Data cleaning and preprocessing to ensure data quality and accuracy</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Exploratory data analysis (EDA) to uncover patterns, trends, and insights</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Statistical analysis using Excel's built-in functions and formulas</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Advanced data manipulation and calculations using Excel's powerful features</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Data visualization using Tableau to create interactive and visually appealing dashboards</p>
                    </li>

                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Creation of custom charts, graphs, and visualizations to present data effectively</p>
                    </li>
                </ul>
            </article>


        </div>
    </section>
  )
}

export default services
