import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

// Form fields
const subscribeForm = (
  <div className="Wrapper">
  <div className="formWrapper">
    <h1>Subscribe!</h1>
    <p>Sign up with your e-mail address to receive news and updates</p>
    <form name="subscribeForm" method="post" autoComplete="off" id="subscribe-form">
      <div className="inputWrapper">
        <label className="input-field" htmlFor="first-name">
          <input type="text" name="First Name" id="first-name" />
          <span className="placeholder">First Name</span>
        </label>
        <label className="input-field" htmlFor="last-name">
          <input type="text" id="last-name" name="Last Name" />
          <span className="placeholder">Last Name</span>
        </label>
        <label className="input-field" htmlFor="e-mail">
          <input type="email" name="E-mail" id="e-mail" />
          <span className="placeholder">E-Mail</span>
        </label>
      </div>
      <label htmlFor="submit">
      <button type="submit" form="subscribe-form" id="submit">Submit</button>
      </label>
    </form>
  </div>
  </div>
);
//user-card
const user = {
  name: "Assabeneh Yetayen",
  country: "Finland",
  position: "Senior Developer",
  skills: ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django",
"NumPy", "Pandas", "Data Analysis", "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"],
  datejoined: "20 Aug 2020"
}
//const userName = "Assabeneh Yetayen"
//const userPosition = "Senior Developer"
//const userCountry = "Finland"
const userCard = (
  <div className="userCardWrapper">
    <div className="userCardHeader">
      <img className="userPhoto" src="./Asabebeh.jpg" alt="Asabeneh"/>
        <div class="verifiedUser">
          <h2>{user.name}</h2>
          <img className="verifyMark" src="./logo192.png" alt="React Logo" style={{ width: '30px', height: '30px' }}/>
        </div>
        <p style={{ paddingBottom: '10px', }}>{user.position}, {user.country}</p>
    </div>
    <div className="skills">
      <h3>SKILLS</h3>
      <ul>{user.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </div>
    <div className="joinDate">
      <img src="./logo192.png" alt="React Logo" style={{ width: '15px', height: '15px' }}/>
      <h6>Joined on {user.datejoined}</h6>
    </div>
    
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    {subscribeForm}
    {userCard}
  </div>
);

// To get the root element from the HTML document
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
// Render the JSX element using the ReactDOM package
root.render(app);