import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Additional Secretary <span>2020-present</span></h2>
                        <p>I am additional Secretary of the robotics club NIT Warangal. Where I have worked with many interesting projects like Drones, RC planes, line-follower, Gesture Control bot and many cool stuff. As I always like to work on cool projects, robotics club gave me a platform to show my skills and also help me in enhancing new stuff. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Higher Education <span>2019-present</span></h2>
                        <p>I am pursuing my B.Tech in the stream of ECE from NIT Warangal with CGPA 8.34 .Even I am a communication student, I am very much interested in programming hence developed my skills in DSA, OOPs, OS, IOT, DBMS, Front-end-web-development over the years and have a better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Intermediate  Education <span>2016-2019</span></h2>
                        <p>I've done  my Intermediate education with major subjects as Physics, Chemistry & Maths from Sri Chaitanya Junior College, Hyderabad .In order to get a seat in top university I worked so hard and finally came out with flying colours with 97.7 merit and also Secured a seat in NIT Warangal. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Secoundary Education <span>2015-2016</span></h2>
                        <p>I have completed my secondary education with 9.7 CGPA from SPR school of excellence, Telangana, India. During my school time, I came to know that I'm curious in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                        
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
