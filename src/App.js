import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Addproduct from './Components/Addproduct';
import Getproduct from './Components/Getproduct';
import Mpesapayment from './Components/Mpesapayment';
import Navbar from './Components/Navbar';
import Homee from './Components/Homee';
import Footer from './Components/Footer';




function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-warning'>Welcome to Dawahouse</h1>
      </div>
      <Navbar/>
      <Routes>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/Getproduct' element={<Getproduct/>}/>
        <Route path='/' element={<Homee/>}/>
        <Route path='/Makepayment' element={<Mpesapayment/>}/>
        <Route path='/Footer' element={<Footer/>}/>

        




        
      </Routes>


    </div>
    </Router>
  );
}

export default App;
