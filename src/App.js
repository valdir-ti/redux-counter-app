import './App.css';
import { Counter } from './components/Counter';
import { Increase } from './components/Increase';
import { Decrease } from './components/Decrease';

function App() {
  return (
    <div className="App">
      <h2>Counter with Redux</h2>
      <div className='counter-container'>
        <Counter />
        <div className='counter-buttons'>
          <Increase />
          <Decrease />
        </div>
      </div>
    </div>
  );
}

export default App;
