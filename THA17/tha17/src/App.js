import './App.css';
import Card from './Card';
function App() {
  return (
    <div className="App">
    <div className="container">
       <Card name="Pizza" value="500"/>
       <Card name="Burger" value="300"/>
       <Card name="Sandwich" value="100"/>
       <Card name="Coke" value="200"/>
    </div>
    </div>
  );
}

export default App;
