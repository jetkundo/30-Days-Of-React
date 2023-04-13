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
const userCard = (
  <div className="userCardWrapper">
    <img src="./src/images/Asabebeh.jpg" alt="Asabeneh"/>
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