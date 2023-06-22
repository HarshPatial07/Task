import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import HomeScreen from './Task/HomeScreen';

function App() {

  return (
    <div className="App">
      <h1>Welcome</h1>
      <HomeScreen/>
      <Navbar/>
    </div>
  );
}

export default App;
