import './App.css';

// colored numbers exercise
// isPrime function
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function conditionalColor(n) {
  let color;
  switch (true) {
    case isPrime(n):
      color = 'red';
      break;
    case (n % 2 === 0):
      color = 'green';
      break;
    default:
      color = 'yellow';
  }
  return color;
}

const NumberedBlocks = ({ blocksArray }) => {
  const blocks = blocksArray.map((block) => (
    <div key={block}
      className="numberedBlock"
      style={{
        backgroundColor: conditionalColor(block),
      }}
    >
      <p>{block}</p>
    </div>
  ));
  return blocks;
};

// world population exercise
const Country = ({ country: { name, population, width } }) => {
  return (
    <div className = "countryWrapper"> 
      
	  <div className="countryName">
        <p>{name}</p>
      </div>
	  
      <div className="populationBarWrapper">
	  	<div className="populationBar" style={{width: width}}></div>
	  </div>	

      <div className="countryPopulation">
        <p>{population}</p>
      </div>
    </div>
  );
};

const WorldPopulation = ({ countries }) => {
  const countryList = Object.values(countries).map((country) => (
    <Country key={country.name} country={{ ...country, width: `${country.population / 7600000000 * 100}%` }} />
  ));
  return <div className='countryList'>{countryList}</div>;
};

// Application
function App() {
  const worldPopulation = {
    world: { name: 'World', population: 7600000000 },
    china: { name: 'China', population: 1500000000 },
    india: { name: 'India', population: 1300000000 },
    usa: { name: 'USA', population: 350000000 },
  };
  const blocksArray = [];
  for (let i = 0; i <= 31; i++) {
    blocksArray.push(i);
  }
  return (
    <div className="App">
      <section className="numberedBlocks">
        <NumberedBlocks blocksArray={blocksArray} />
        <WorldPopulation countries={worldPopulation} />
      </section>
    </div>
  );
}

export default App;
