import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {AllPets} from './views/AllPet';
import {NewPet} from './views/NewPet';
import {EditPet} from './views/EditPet';
import {OnePet} from './views/OnePet';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/pet" replace/>}/>
        <Route path="/pet" element={<AllPets/>}/>
        <Route path="/pet/new" element={<NewPet/>}/>
        <Route path="/pet/:id" element={<OnePet/>}/>
        <Route path="/pet/:id/edit" element={<EditPet/>}/>
      </Routes>
    </div>
  );
}

export default App;
