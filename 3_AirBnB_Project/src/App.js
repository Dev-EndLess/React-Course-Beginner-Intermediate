import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './dataChar';

function App() {

  const Character = data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {Character}
      </section>
    </div>
  )
}

export default App;
