import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//UI
import Navigation from './Navigation';

//Pages
import Create from './Player/Create';
import Edit from './Player/Edit';
import Home from './Home';
import Search from './Player/Search';




function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/edit" element={<Edit />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
    </div>
  );
}

export default App;
