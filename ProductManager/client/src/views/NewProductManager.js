import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AllProductManagers} from "./AllProductManagers";
import { createProductManager } from '../services/internalApiService';

export const NewProductManager = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleNewProductManagerSubmit = (e) => {
        e.preventDefault();

        const newProductManager = {
            title: title,
            price: price,
            description: description,
        }
        createProductManager(newProductManager)
            .then((data) => {
                console.log('new product manager data:', data);
                navigate('/productmanager');
            })           
            .catch((error) => {
                console.log(error);
            })
    }

    return <div>
        <form onSubmit={(e) => handleNewProductManagerSubmit(e)}>
            <div className="form-group">
                <label className="h6">Title:</label>
                <input  type="text" onChange={(e) => {
                    setTitle(e.target.value);
                }}  className="form-control"/>
            </div>
            <div className="form-group">
                <label className="h6">Price:</label>
                <input  type="number" onChange={(e) => {
                    setPrice(e.target.value);
                }}  className="form-control"/>
            </div>
            <div className="form-group">
                <label className="h6">Description:</label>
                <input  type="text" onChange={(e) => {
                    setDescription(e.target.value);
                }}  className="form-control"/>
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
        </form>
        <AllProductManagers></AllProductManagers>
    </div>
}

export default NewProductManager;