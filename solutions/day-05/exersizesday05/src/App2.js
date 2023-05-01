import 'normalize.css';
import './App.css';
import asabenehImage from './logo512.png';

// Использование пропсов и деструктуризации объясняется на основе компонента main, в котором есть вложенные компоненты

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

  const month = months[time.getMonth()].slice(0, 3) //берем месяц по номеру элемента из массива и берем его первые 3 буквы
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({ //объявляем деструктуризацию объекта прямо в скобках для пропсов, перед =>
  data: { //это пропс верхнего уровня, в который компонент будет передавать данные при вызове <Header data= />
    welcome,
    title,
    subtitle,
    author: { firstName, lastName }, /*уровень деструктуризации, объект, из которого пропс data будет брать данные, должен
иметь ту же самую структуру, иначе отсутутвующие свойства будут...*/
    date,
  },
}) => {
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
  )// используем переменные, объявленные во время деструктуризации
}

// TechList Component - будет вложен в компонент MAIN
const TechList = ({ techs }) => { //опять же, деструктуризируем в пропсах (это будет массив)
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>) //маппинг списка в который будет передаваться массив
  return techList
}

// User Card Component - будет вложен в компонент MAIN
const UserCard = ({ user: { firstName, lastName, image } }) => ( //здесь дестр. объект user объявляет, с какими ключами он будет работать
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
// итого у нас есть userCard, где мы деструктурировали объект для параметра user,
// то же самое по techs
// и 2 параметра, для кнопок (почему они здесь?)
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
      <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

//Application
const App = () => {
	const data = { /*теперь нам нужно где-то взять данные для наших компонентов, все переменные, объявленные при
	деструктуризации, которые совпадают с ключами объекта, именем массива, или другой переменной, будут получать данные оттуда*/
	  welcome: 'Welcome to 30 Days Of React',
	  title: 'Getting Started React',
	  subtitle: 'JavaScript Library',
	  author: {
		firstName: 'Osobukoh',
		lastName: 'Yetayeh',
	  },
	  date: new Date(), // date needs to be formatted to a human readable format
	}
	const date = new Date()
	const techs = ['HTML', 'CSS', 'JavaScript'] //это массив для списка TechList
	// copying the author from data object to user variable using spread operator
	const user = { ...data.author, image: asabenehImage }//троеточие для вложенной деструктуризации
  //юзер не сможет просто так взять данные из даты, надо их скопировать!
	const handleTime = () => {
	  alert(showDate(new Date())) //функция для кнопки
	}
	const greetPeople = () => {
	  alert('Welcome to 30 Days Of React Challenge, 2020') //еще одна функция для кнопки
	}
  
	return (
	  <div className='app'>
		<Header data={data} />
		<Main
		  user={user} //пропсу user присваиваются значения объекта user
		  techs={techs}
		  handleTime={handleTime}
		  greetPeople={greetPeople} //все пропсы для детей получается указываем в родителе
		/>
		<Footer copyRight={date} />
	  </div>
	)
}
export default App;
