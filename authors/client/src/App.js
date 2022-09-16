import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {AllAuthors} from './views/AllAuthor';
import {NewAuthor} from './views/NewAuthor';
import {EditAuthor} from './views/EditAuthor';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/author" replace/>}/>
        <Route path="/author" element={<AllAuthors/>}/>
        <Route path="/author/new" element={<NewAuthor/>}/>
        <Route path="/author/:id/edit" element={<EditAuthor/>}/>
      </Routes>

    </div>
  );
}

export default App;
