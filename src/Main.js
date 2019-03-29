import React, { Component } from 'react';
import cat from './cat.jpg';
import snorkeling from './snorkeling.jpg';
import './Main.css';

class Main extends Component {

  updateExp(evt) {
    console.log(evt.target.value);
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
          <button className="Main-btn">say hello!</button>
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
            <span className="Main-job Main-active">Developer</span>
            <span className="Main-job">Researcher</span>
            <span className="Main-job">Designer</span>
          </div>
          <div className="Main-text-box">
            <div className="Main-text">
              <span className="Main-exp-title">Full-Stack Developer @ Rithm School</span>
              <span className="Main-exp-date">Jan 2019 - Present</span>
              <span className="Main-exp-details">Build React Apps</span>
              <span className="Main-exp-title">Front-End Developer @ Protoblock Inc.</span>
              <span className="Main-exp-date">April 2018 - Oct 2018</span>
              <span className="Main-exp-details">Rebuilt website to be responsive by implementing Bootstrap framework</span>
              <span className="Main-exp-title">Agorithms Class @ Girl Develop It</span>
              <span className="Main-exp-title">Web Developer Bootcamp @ Udemy</span>
              <span className="Main-exp-title">C++ Class @ South Korea</span>
            </div>
          </div>
        </div>
        <div className="Main-projects">
          <span className="Main-heading">*Recent projects </span>
          <div className="Main-project-box">
            <span className="Main-project-title">A Little Help From</span>
            <span className="Main-project-text">React front-end app built over a weekend at HackMentalHealth Hackathon. Streamlines the process of asking for support from friends.</span>
            <a className="Main-project-link" href="https://alittlehelpfrom.herokuapp.com/">visit</a>
            <span className="Main-project-tags">React, Hackathon</span>
          </div>
          <div className="Main-project-box">
            <span className="Main-project-title">Jobly</span>
            <span className="Main-project-text">React front-end, Node-Express back-end web app built as a part of Rithm School curriculum. Allow users to list and apply for jobs.</span>
            <a className="Main-project-link" href="https://github.com/meowcodes/rithm-react-jobly">visit repo</a>
            <span className="Main-project-tags">React, Node, Express, API, Jest</span>
          </div>
        </div>
        <div className="Main-contact">
          <span className="Main-heading">*Let's connect</span>
          <div className="Main-contact-box">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-codepen"></i>
            <i className="fas fa-at"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
