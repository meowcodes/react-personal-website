import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <span className="heading">*Recent projects </span>
        <div className="Projects-outer">
          <div className="Projects-box">
            <a className="Projects-title" href="https://querybook.org/">Querybook</a>
            <span className="Projects-text">Discover, Analyze, & Collaborate. Pinterest’s open-source big data IDE via a notebook interface.</span>
            <span className="Projects-tags"><span>React</span><span>Typescript</span><span>Python</span><span>Elasticsearch</span><span>Docker</span></span>
          </div>
          <div className="Projects-box">
            <a className="Projects-title" href="https://github.com/meowcodes/rithm-react-jobly">Jobly</a>
            <span className="Projects-text">React front-end, Node-Express back-end web app built as a part of Rithm School curriculum. Allows users to list and apply for jobs.</span>
            <span className="Projects-tags"><span>React</span><span>Node</span><span>Express</span><span>API</span><span>Jest</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
