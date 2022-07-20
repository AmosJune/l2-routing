import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import User from '../user/User';
import { MemoryRouter as Router, Link, Routes, Route } from 'react-router';
//for every link you need a route

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}

function MainApp() {
  <Router>
    <div>
      {/* All Routes go here */}

      <div className="topNavBar">
        <Link className="active" to="/">Home</Link>.
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/user/faith">USER FAITH</Link>
      </div>
        
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='/user/:username' element={<User/>}/>
      </Routes>
    </div>
  </Router>
}


export default App;
export { MainApp }; 