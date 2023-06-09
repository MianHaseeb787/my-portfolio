import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import  {FaAward} from 'react-icons/fa'
import  {FiUsers} from 'react-icons/fi'


function About() {
  return (
    <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>

        <container className="container about__container">
            <div className="about__me">
                <img src={ME} alt='about image' /> 

            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about_card">
                        <h5>Experience</h5>
                        <small>1 Years Working</small>
                        <FaAward className='about__icon'/>
                    </article>

                    <article className="about_card">
                        <h5>Experience</h5>
                        <small>1 Years Working</small>
                        <FaAward className='about__icon'/>
                    </article>

                    <article className="about_card">
                        <h5>Experience</h5>
                        <small>1 Years Working</small>
                        <FaAward className='about__icon'/>
                    </article>
                </div>

            </div>

        </container>
    </section>
  )
}

export default About