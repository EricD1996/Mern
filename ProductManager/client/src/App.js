import './App.css';

import {Link, Navigate, Route, Routes} from "react-router-dom";

import {AllProductManagers} from "./views/AllProductManagers";
import {NewProductManager} from "./views/NewProductManager"
import {EditProductManager} from "./views/EditProductManager"
import {OneProductManager} from "./views/OneProductManager"
import {NotFound} from "./views/NotFound"


function App() {
  return (
    <div className="container">
      <div>
        <Link to="/productmanager">All Product Managers </Link>
        <Link to="/productmanager/new">New Product Manager</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/productmanager" replace/>}/>
        <Route path="/productmanager" element={<AllProductManagers/>}/>
        <Route path="/productmanager/:id/edit" element={<EditProductManager/>}/>
        <Route path="/productmanager/:id" element={<OneProductManager/>}/>
        <Route path="/productmanager/new" element={<NewProductManager/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
