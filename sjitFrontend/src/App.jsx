import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/contact";
import Home from "./components/FunctionalComponents/Home";
import SignUp from "./components/FunctionalComponents/signup";
import Navbar from "./components/FunctionalComponents/navbar";
import Gallery from "./components/FunctionalComponents/Gallery";
import Login from "./components/FunctionalComponents/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponents/Hooks/UseMemoize";
import HoC from "./components/FunctionalComponents/HoC/HoC";
import Button from "./components/FunctionalComponents/HoC/Button";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyLoadingAndSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingAndSuspense";
import NumberFile from "./components/FunctionalComponents/Memoization/NumberFile";
import TextFile from "./components/FunctionalComponents/Memoization/TextFile";
import CoE from "./components/FunctionalComponents/ContextAPI/CoE";
import StudentResults from "./components/FunctionalComponents/ContextAPI/StudentResults";
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
        <Route path="/UseEffectAPI" element={<UseEffectAPI />} />
        <Route path="/UseRef" element={<UseRef />}/>
        <Route path="/UseMemo" element={<UseMemo />}/>
        <Route path="/UseCallback" element={<UseCallback />}/>
        <Route path="/UseMemoize" element={<UseMemoize />}/>
        <Route path="/Hoc" element={<HoC />}/>
        <Route path="/Memo" element={<Memo />}/>
        <Route path="/Button" element={<Button/>}/>
        <Route path="/trackingMyButtonComp" element={<trackingMyButtonComp/>}/>
        <Route path="/LazyLoadingAndSuspense" element={<LazyLoadingAndSuspense/>}/>
        <Route path="/NumberFile" element={<NumberFile/>}/>
        <Route path="/TextFile" element={<TextFile/>}/>
        <Route path="/res" element={<CoE/>} />


      </Routes>
      </BrowserRouter>
         </main>
  );
}

export default App;
