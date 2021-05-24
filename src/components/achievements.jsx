import React, { Component } from 'react'

export default class Achievement extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="achievements">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Achievements</h2>
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
                        <h2>Finalist-Smart India Hackathon 2020 Nitw Edition <span>feb/2020</span></h2>
                        <p>Was among the 4 shortlisted teams from the college to send the idea proposal for SIH 2020</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Joint Entrance Examination<span>2018-2019</span></h2>
                        <p>Secured All India Rank 5470 in JEE (Main) Paper 1 and All India Rank 998 in JEE(Main) Paper 2 out of 1.2 million candidates</p>
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