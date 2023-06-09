import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Devlopment</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>Flutter</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>HTML</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>CSS</h4>
                        <small className="text-light">Intermediate</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>Javascript</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>React</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    
                </div>

            </div>

            <div className="experience__backend">
                <h3>Experience Backend</h3>
            <div className="experience__content">
            <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>Node JS</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>MongoDB</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>FireBase</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>MySQL</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>

                    <article className="experience__details">
                        <BsPatchCheckFill/>
                        <div>
                           <h4>Python</h4>
                        <small className="text-light">Experienced</small> 
                        </div>
                        
                    </article>
                </div>
                

            </div>
        </div>

    </section>
  )
}

export default Experience
