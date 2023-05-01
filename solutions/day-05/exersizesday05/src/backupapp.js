import 'normalize.css';
import './App.css';

// Date Array
const showDate = (time) => {
	const months = [
	  'January',
	  'February',
	  'March',
	  'April',
	  'May',
	  'June',
	  'July',
	  'August',
	  'September',
	  'October',
	  'November',
	  'December',
	]
	const month = months[time.getMonth()].slice(0, 3);
	const year = time.getFullYear();
	const date = time.getDate();
	return (
		`${month} ${date}, ${year}`
	);
  }
// Header Component
const Header = (props) => {
	const data = props.data;
	const {welcome, title = "Boo", subtitle, author: {firstName, lastName}, date,} = data;
	return (
	  <header>
		<div className='header-wrapper'>
		  <h1>{welcome}</h1>
		  <h2>{title}</h2>
		  <h3>{subtitle}</h3>
		  <p>
			{firstName} {lastName}
		  </p>
		  <small>{showDate(date)}</small>
		</div>
	  </header>
	)
  }
//Parameters component
let currentYear = new Date().getFullYear();
let birthDate = 2016;
let age = currentYear - birthDate;
const mass = 75;
const gravity = 9.8;


const Parameters = (props) => {
	return (
	<div>
		<p>The person is {props.age} years old</p>
		<p>The person's weight on the earth is {props.weight} kg.</p>
	</div>
	)
}
// Driving status component
const Status = (props) => {
	// ternary operator to check the status of the person
	let status = props.status ? 'Old enough to drive' : 'Too young for driving'
	return (
	<p>{status}</p>
	)
  }
// Skills component
const Skills = (props) => {
	const skillist = props.skills.map((skill) => <li>{skill}</li>) 
	return (
		<ul>{skillist}</ul>
	)
}
// Button component (function prop)
const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>


//Application
const App = () => {
	const mainData = {
	welcome: 'Welcome to 30 Days Of React',
	title: 'Getting Started React',
	subtitle: 'JavaScript Library',
	author: {
		firstName: 'Asabeneh',
		lastName: 'Yetayeh',
	},
	date: new Date(),
	};
//Driving age check variables
	const status = age >= 18;
//Skills variables
	const skills = ['Html', 'Css', 'JavaScript'];
//Functions for the buttons
const sayHi = () => {
	alert("Hi!");
}
const dateAlertor = () => {
	alert(showDate(mainData.date));
}
	//RETURN AND EXPORT
	return (
	  <div className='app'>
		<Header
		  data={mainData}
		/>
		<Parameters
			age={age}
			weight={mass*gravity/10} 
		/>
		<Status status={status} />
		<Skills skills={skills} />
		<Button 
			onClick={sayHi}
			text="Say Hi!" 
		/>
		<Button
			onClick={dateAlertor}
			text="Current Date"
		/>
	  </div>
	)
  }
export default App;
