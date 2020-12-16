import logo from './logo.svg';
import Formulaire from './Formulaire.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="linear_gradient">
      <header className="App_header">
        <img src={logo} className="App_logo" alt="logo" />
        <div>
          <Formulaire />
        </div>
      </header>
      </div>
    </div>
  );
}

export default App;