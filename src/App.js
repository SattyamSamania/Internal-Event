import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
//import Login from './Components/Login'
//import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import Event from './Components/Event'
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Main>
      <Navbar />
      <Routes>
      <Route exact path='/' element ={<Home/>}/>  
      <Route exact path='/About' element ={<About/>}/>
      <Route exact path='/Event' element ={<Event/>}/>
      <Route exact path='/Contact' element ={<Contact/>}/>

       
       </Routes>
       <Footer/>
       </Main>
         
      {/*       <Home/>
      <About/>
      <Contact/>
      <Login/>
      <SignUp/> */}

    </>
  );
}

export default App;