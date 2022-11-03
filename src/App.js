
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    <div className='nav-productos'> 
    <NavBar/>
    </div>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cibeles
        </p>
      </header>
    </div>
  );
}

export default App;
