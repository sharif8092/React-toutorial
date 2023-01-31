// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Register from './Page/Register';
import Login from './Page/Login';
import Refer from './Page/Refer';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
     {/* <h1>Routing class</h1> */}

     <BrowserRouter>
     <ul>
      <li>
      <Link to="/">Home</Link> 
      </li>
      <li>
      <Link to="/Login">Login</Link> 
      </li>
      <li>
      <Link to="/Refer">Refer</Link> 
      </li>
      <li>
      <Link to="/Register">Register</Link> 
      </li>          
     </ul>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Refer" element={<Refer />} />
      <Route path='*' element={
        <div>
          <h1>Something went wrong</h1>
          <Link to="/">Home</Link>
        </div>
      } />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
