import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/contact";
import Home from "./components/FunctionalComponents/Home";
import SignUp from "./components/FunctionalComponents/signup";
import Navbar from "./components/FunctionalComponents/navbar";
import ClassComponentEG from "./components/classComponent/ClassComponentEG"; // FIXED
import Gallery from "./components/FunctionalComponents/Gallery";
import Login from "./components/FunctionalComponents/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home properties="Hello" sjit="SJIT" />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path="/Login" element={<Login />}/>
        <Route path='/use-effect' element={<UseEffect />} />
      </Routes>
      </BrowserRouter>
         </main>
  );
}

export default App;
