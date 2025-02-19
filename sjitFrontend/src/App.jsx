import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/contact";
import Home from "./components/FunctionalComponents/Home";
import SignUp from "./components/FunctionalComponents/signup";
import Navbar from "./components/FunctionalComponents/navbar";
import ClassComponentEG from "./components/classComponent/ClassComponentEG"; // FIXED
import Gallery from "./components/FunctionalComponents/Gallery";

function App() {
  return (
    <main>
      <Navbar />
      <ClassComponentEG />
      <hr />
      <Home />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
      <SignUp />
      <hr />
      <Gallery />
         </main>
  );
}

export default App;
