import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import dataLocation from './dataLocation';

function App() {

  const chronicles = dataLocation.map(item => {
    return <Card 
    key={item.id} 
    item={item}
    />
  })

  return (
    <div className="app">
      <Navbar />
      {chronicles}
    </div>
  );
}

export default App;
