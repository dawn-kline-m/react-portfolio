import React from 'react';
import horiseon from "../images/Horiseon.png"
import passwd from "../images/Password-Generator.png"
import quiz from "../images/Quiz-Night.png"
import workday from "../images/Work-Day-Scheduler.png"
import readmeGen from "../images/readmeGenerator.png"
import note from "../images/noteTaker.png"
import svg from "../images/Sample-SquareSVG-generated.png"
import employee from "../images/employeeTracker.png"
import eCommerce from "../images/ORM-E-Commerce.png"
import techBlog from "../images/mvcTechBlog.png"
import social from "../images/socialNetwork.png"
import pwa from "../images/pwa.png"

export default function Challenges() {
  return (
    <div className="container">
      <h1>SMU Web Design Boot Camp: Class Challenges</h1>
      <p>
        SMU Coding/ Web Design Boot Camp: A rigorous curriculum that covers a full stack: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.

      </p>
      <div className="row">

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={horiseon} />

            </div>
            <div className="card-content">
              <p>HTML Formatting.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/SemanticHTML">GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={passwd} />

            </div>
            <div className="card-content">
              <p>Password Generator</p><br></br> <p>HTML, CSS, JavaScript.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/Password-Generator">GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={quiz} />

            </div>
            <div className="card-content">
              <p>Quiz Night</p><br></br>
              <p>HTML, CSS, JavaScript.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/QuizNight">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={workday} />

            </div>
            <div className="card-content">
              <p>Work Day Scheduler</p><br></br>
              <p>HTML, CSS, jQuery.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/Work-Day-Scheduler">GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={readmeGen} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>README Generator.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/readMeGenerator" >GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={svg} />

            </div>
            <div className="card-content">
              <p>SVG Logo Maker.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/SVG-Logo-Maker" >GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={note} />

            </div>
            <div className="card-content">
              <p>Note Taker</p><br></br>
              <p>Express.js, JSON.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/Note-Taker" >GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={employee} />

            </div>
            <div className="card-content">
              <p>Employee Tracker</p><br></br>
              <p>Node.js, Inquirer, MySQL.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/SQL-Employee-Tracker" >GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={eCommerce} />

            </div>
            <div className="card-content">
              <p>Object-Relational Mapping, ORM: E-Commerce.</p><br></br>
              <p>Express.js, Sequelize, MySQL.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/E-commerce-ORM" >GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={techBlog} />

            </div>
            <div className="card-content">
              <p>Model-View-Controller, MVC Tech Blog</p><br></br>
              <p>CMS-style blog site.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/MVC-Tech-Blog" >GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={social} />

            </div>
            <div className="card-content">
              <p>Social Network</p><br></br>
              <p>Express.js, MongoDB, and Mongoose ODM.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/Social-Network-API" >GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={pwa} />

            </div>
            <div className="card-content">
              <p>Progressive Web Applications, PWA: Text Editor</p><br></br>
              <p>Express,js, JSON.</p>
            </div>
            <div className="card-action">
              <a href="https://github.com/dawn-kline-m/Progressive-Web-Application" >GitHub Repo</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
