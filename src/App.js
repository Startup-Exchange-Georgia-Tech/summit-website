import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Schedule from "./components/Schedule/Schedule";
import About from "./components/About/About";
import Speakers from "./components/Speakers/Speakers";
import Partners from "./components/Partners/Partners";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Schedule></Schedule>
      <Speakers></Speakers>
      <Partners></Partners>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
