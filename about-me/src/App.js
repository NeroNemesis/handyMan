import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content p-0">
        <Home/>
      </div>
    </div>
  );
}

export default App;
