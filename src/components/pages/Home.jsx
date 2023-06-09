import React from 'react';
import planet from "../images/Project-Planet.png"
import steam1 from "../images/mySteamlist1.png"
import steam from "../images/mySteamlist.png"
import stars from "../images/stars.jpg"

export default function Home() {
  return (
    <>
      {/* <!-- photo / grid --> */}
      <section className="container section" id="photos">
        <div className="row">

          <div className="col s12 l4">
            <img src={planet} alt="" className="responsive-img materialboxed" />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Project-Planet</h2>
            <p><br></br>The focus is to help a sixth grade students learn about the planets.<br></br><br></br>The project is interactive. <br></br><br></br> The project uses two server-side APIs.<br></br><br></br> The project uses client-side storage to store persistent data. <br></br> <br></br>The project is responsive. </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l4 offset-l1 push-l7">
            <img src={steam1} alt="" className="responsive-img materialboxed" />
          </div>
          <div className="col s12 l6 offset-l1 pull-l5 right-align">
            <h2 className="indigo-text text-darken-4">My Steam List</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
              nec, tincidunt orci.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src={steam} alt="" className="responsive-img materialboxed" />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Favorites Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
              nec, tincidunt orci.</p>
          </div>
        </div>
      </section>

      {/* <!-- parallax --> */}
      <div className="parallax-container">
        <div className="parallax">
          <img src={stars} alt="" className="responsive-img" />
        </div>
      </div>

      {/* <!-- services / tabs --> */}
      <section className="section container" id="services">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What I do..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
              nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
              vitae scelerisque erat ornare nec.</p>
          </div>
          <div className="col s12 l6 offset-l2">
            {/* <!-- tabs --> */}
            {/* <ul className="tabs">
              <li className="tab col s6">
                <a href="#photography" className="active indigo-text text-darken-4">Photography</a>
              </li>
              <li className="tab col s6">
                <a href="#editing" className="indigo-text text-darken-4">Editing</a>
              </li>
            </ul> */}
            <div id="photography" className="col s12">
              <p className="flow-text indigo-text text-darken-4">Computer Programming</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit
                elit nec, tincidunt orci.</p>
              <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida
                urna, vitae scelerisque erat ornare nec.</p>
            </div>
            <div id="editing" className="col s12">
              <p className="flow-text indigo-text text-darken-4">Web Design</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit
                elit nec, tincidunt orci.</p>
              <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida
                urna, vitae scelerisque erat ornare nec.</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section >


      <div className="parallax-container">
        <div className="parallax">
          <img src={stars} alt="" className="responsive-img" />
        </div>
      </div>

      {/* <!--contact form-- > */}
      <section className="section container" id="contact">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
              nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
              vitae scelerisque erat ornare nec.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit
              nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna,
              vitae scelerisque erat ornare nec.</p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label for="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea" cols="20" rows="20"></textarea>
                <label for="message">Your Message</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">date_range</i>
                <input type="text" id="date" className="datepicker" />
                <label for="date">Choose a date you need me for...</label>
              </div>
              <div className="input-field">
                <p>Services required:</p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Computer Programming</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Web Design</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>

  );
}
