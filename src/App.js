import './App.css';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {OnePerson} from "./views/OnePerson";
import {OnePlanet} from "./views/OnePlanet";
import React, {useState} from "react";
import {NotFound} from "./views/NotFound";
import {Main} from "./views/Main";
function App() {
  const [choice, setChoice] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const navigate = useNavigate();

  const route = (e) => {
    e.preventDefault();
      navigate(`/${choice}/${idnumber}`);
  }


  return (
    <div className="App">
      <form onSubmit={route}>
        <label>Search for: </label>
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option>people</option>
          <option>planets</option>
        </select>
        <label>ID: </label>
        <input type="number" onChange={(e) => setIdNumber(e.target.value)} value={idnumber}/>
        <input type="submit" value="Search" />
      </form>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/people/:id" element={<OnePerson />}></Route>
        <Route path="/planets/:id" element={<OnePlanet />}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
