import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Navigation from "./Componets/navbar/Navigation";
import Gsummary from "./Componets/globalSummary/Gsummary";
import AllCountry from "./Componets/allCountriesStatus/AllCountry";
import India from "./Componets/india/India";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Gsummary />

      <AllCountry />

      {/* <India />
      <AllCountry /> */}
    </div>
  );
}

export default App;
