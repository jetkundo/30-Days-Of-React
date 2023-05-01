import 'normalize.css';
import './App.css';
import asabenehImage from './images/asabeneh_yetayeh.jpg';
import constantineImage from './images/constantine_kundel.jpg';

//Hexa color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

//Colored block component
const ColoredBlock = ({ blockHeight }) => {
  const hexaColorValue = hexaColor();
  return (
    <div
      className="coloredBlock"
      style={{
        backgroundColor: hexaColorValue,
        height: blockHeight,
      }}>
      <p>{hexaColorValue}</p>
    </div>
  );
}

//Colored blocks section
const BlocksSection = ({ sectionParameters: { nOfBlocks, width, blockParameters: { blockHeight } } }) => {
  const blocks = []
  for (let i = 0; i < nOfBlocks; i++) {
    blocks.push(<ColoredBlock blockHeight={blockHeight} />)
  }
  const blocksList = blocks.map((block, index) => <div className="coloredBlock" key={index}>{block}</div>)
  return (
    <section className="blocksSection"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: width,
      }}>
      {blocksList}
    </section>
  )
}

//Application
const App = () => {
  const sectionParameters = {
    nOfBlocks: 5,
    width: "80%",
    blockParameters: {
      blockHeight: "100px",
    },
  }
  return (
    <div className='app'>
      <BlocksSection
        sectionParameters={sectionParameters}
      />
    </div>
  )
}
export default App;
