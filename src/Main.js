import React, { Component } from 'react';
import cat from './cat.jpg';
import snorkeling from './snorkeling.jpg';
import resume from './resume.pdf'
import './Main.css';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      exp: "dev"
    }
  }

  updateExp(str) {
    this.setState({
      exp: str
    })
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-landing">
          <span className="Main-heading">*Hello, welcome!</span>
          <span className="Main-name">meowcodes // Lena Ryoo</span>
          <div className="Main-title-box">
            <span className="Main-titles">full-stack web developer</span>
            <span className="Main-titles">designer</span>
            <span className="Main-titles">researcher</span>
            <span className="Main-titles">mental health advocate</span>
          </div>
          <button className="Main-btn"><a href="mailto:lenaryoo@gmail.com">say hello!</a></button>
        </div>
        <div className="Main-about">
          <span className="Main-heading">*About me</span>
          <div className="Main-about-box">
            <div className="Main-text-box">
              <span className="Main-text">Hi, my name is Lena. I’m a designer-researcher turned developer from San Francisco Bay Area. Currently, I’m studying full-stack development at Rithm School.</span>
              <span className="Main-text">I graduated <b>UC Berkeley</b> with an architecture degree and studied developmental psychology at <b>San Francisco State University</b>. I love children (I'm a RIE-trained babysitter), playing volleyball, and diving in the tropics.</span>
            </div>
            <div className="Main-img-box">
              <img className="Main-img-cat" src={cat} alt="cat" />
              <img className="Main-img-snorkeling" src={snorkeling} alt="snorkeling" />
            </div>
          </div>
        </div>
        <div className="Main-experience">
          <div className="Main-select-box">
            <span className="Main-heading">*Experience as </span>
            <span className={ this.state.exp === "dev" ? "Main-job Main-active" : "Main-job"} onClick={ () => this.updateExp("dev") }>Developer</span>
            <span className={ this.state.exp === "res" ? "Main-job Main-active" : "Main-job"} onClick={ () => this.updateExp("res") }>Researcher</span>
            <span className={ this.state.exp === "des" ? "Main-job Main-active" : "Main-job"} onClick={ () => this.updateExp("des") }>Designer</span>
          </div>
          <div className="Main-text-box">
            <div className="Main-text">
              { this.state.exp === "dev" &&
                <><span className="Main-exp-title"><b>Full-Stack Developer</b> @ Rithm School</span>
                <span className="Main-exp-date">Jan 2019 - Present</span><br></br>

                <span className="Main-exp-title"><b>Front-End Web Developer</b> @ Protoblock Inc.</span>
                <span className="Main-exp-date">April 2018 - Oct 2018</span><br></br>

                <div className="Main-hr"></div>
                
                <span className="Main-exp-title"><b>Web Developer Bootcamp</b> @ Udemy</span>
                <span className="Main-exp-date">Oct 2018 - Jan 2019</span><br></br>

                <span className="Main-exp-title"><b>Agorithms Class</b> @ Girl Develop It</span>
                <span className="Main-exp-date">Sept 2018</span><br></br>

                <span className="Main-exp-title"><b>C++ Class</b> @ South Korea</span>
                <span className="Main-exp-date">Oct 2017</span><br></br>

                <div className="Main-hr"></div>

                <span className="Main-exp-title"><b>HackMentalHealth Hackathon</b></span>
                <span className="Main-exp-date">Oct 2018</span><br></br>

                <span className="Main-exp-title"><b>JAMstack Hackathon</b></span>
                <span className="Main-exp-date">Nov 2018</span><br></br>

                <span className="Main-exp-title"><b>WomenHack - The All-Women Hackathon</b></span>
                <span className="Main-exp-date">Oct 2018</span><br></br></>
              }
              { this.state.exp === "res" &&
                <><span className="Main-exp-title"><b>Research Analyst</b> @ Positive and Well-Being Lab</span>
                <span className="Main-exp-date">Jan 2017 - May 2017</span><br></br>

                <span className="Main-exp-title"><b>Research Assistant</b> @ Readiness, Activation, and Decision-Making Lab</span>
                <span className="Main-exp-date">Jan 2017 – May 2017</span><br></br>

                <span className="Main-exp-title"><b>Lab Manager, Researcher</b> @ Stress, Trauma, and Resilience Lab</span>
                <span className="Main-exp-date">Jan 2016 - Jan 2017</span><br></br>

                <div className="Main-hr"></div>
                
                <span className="Main-exp-title"><b>M.A. in Developmental Psychology Candidate</b> @ SFSU</span>
                <span className="Main-exp-date">2016 - 2017</span><br></br>

                <div className="Main-hr"></div>

                <span className="Main-exp-title"><b>International Trauma Conference</b></span>
                <span className="Main-exp-date">June 2017</span><br></br>

                <span className="Main-exp-title"><b>Society for Personality and Social Psychology International Conference</b></span>
                <span className="Main-exp-date">Jan 2017</span><br></br></>
              }
              { this.state.exp === "des" &&
                <><span className="Main-exp-title"><b>Design Intern</b> @ Noll & Tam Architects</span>
                <span className="Main-exp-date">June 2013 - Aug 2013</span><br></br>

                <div className="Main-hr"></div>
                
                <span className="Main-exp-title"><b>B.A. in Architecture</b> @ UC Berkeley</span>
                <span className="Main-exp-date">2009 - 2014</span><br></br></>
              }
            </div>
          </div>
        </div>
        <div className="Main-projects">
          <span className="Main-heading">*Recent projects </span>
          <div className="Main-projects-outer">
          <div className="Main-project-box">
            <a className="Main-project-title" href="https://alittlehelpfrom.herokuapp.com/">A Little Help From</a>
            <span className="Main-project-text">React front-end app built over a weekend at HackMentalHealth Hackathon. Streamlines the process of asking for support from friends.</span>
            <span className="Main-project-tags"><span>React</span><span>Hackathon</span></span>
          </div>
          <div className="Main-project-box">
            <a className="Main-project-title" href="https://github.com/meowcodes/rithm-react-jobly">Jobly</a>
            <span className="Main-project-text">React front-end, Node-Express back-end web app built as a part of Rithm School curriculum. Allows users to list and apply for jobs.</span>
            <span className="Main-project-tags"><span>React</span><span>Node</span><span>Express</span><span>API</span><span>Jest</span></span>
            
          </div>
        </div>
        </div>
        <div className="Main-contact">
          <span className="Main-heading">*Let's connect</span>
          <div className="Main-contact-box">
            <a href="https://github.com/meowcodes"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/lenaryoo/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://codepen.io/meowcodes/"><i className="fab fa-codepen"></i></a>
            <a href="mailto:lenaryoo@gmail.com"><i className="fas fa-at"></i></a>
          </div>
        </div>
        <a href={ resume }><div className="Main-resume-box">
          <div className="Main-resume">
              <span>RESUME</span>
          </div>
        </div></a>
      </div>
    );
  }
}

export default Main;
