import React from 'react';
import horiseon from "../images/Horiseon.png"
import passwd from "../images/Password-Generator.png"
import planet from "../images/Project-Planet.png"
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

export default function Blog() {
  return (
    <div className="container">
      <h1>Class Challenges</h1>
      <p>
        SMU Coding Boot Camp: A rigorous curriculum taht covers a full stack: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.

      </p>
      <div className="row">

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={horiseon} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>HTML Formatting.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={passwd} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Password Generator</p><br></br> <p>HTML, CSS, JavaScript.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={quiz} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Quiz Night</p><br></br>
              <p>HTML, CSS, JavaScript.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={workday} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Work Day Scheduler</p><br></br>
              <p>HTML, CSS, jQuery.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
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
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={svg} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>SVG Logo Maker.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={note} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Note Taker</p><br></br>
              <p>Express.js, JSON.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={employee} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Employee Tracker</p><br></br>
              <p>Node.js, Inquirer, MySQL.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={eCommerce} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Object-Relational Mapping, ORM: E-Commerce.</p><br></br>
              <p>Express.js, Sequelize, MySQL.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={techBlog} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Model-View-Controller, MVC Tech Blog</p><br></br>
              <p>CMS-style blog site.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={social} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Social Network</p><br></br>
              <p>Express.js, MongoDB, and Mongoose ODM.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card medium ">
            <div className="card-image">
              <img src={pwa} />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>Progressive Web Applications, PWA: Text Editor</p><br></br>
              <p>Express,js, JSON.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
