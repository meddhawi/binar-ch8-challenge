// import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

import Navigation from './Navigation';
import Create from './Player/Create';



function App() {
  return (
    <div className="App">
        <Navigation />
        <Create />

    </div>
  );
}

export default App;
