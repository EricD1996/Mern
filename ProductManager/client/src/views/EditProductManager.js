import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getProductManagerById, updateProductManagerById} from '../services/internalApiService';


export const EditProductManager = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getProductManagerById(id)
            .then((data) => {
                const {title,price,description} = data;
                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleEditProductSubmit = (e) => {
        e.preventDefault();

        const editedProduct = {
            title: title,
            price: price,
            description: description,
        };
        updateProductManagerById(id, editedProduct)
            .then((updatedProductManager) => {
                console.log('updatedProductManager: ', updatedProductManager);
                navigate(`/productmanager/${id}`)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={(e) => handleEditProductSubmit(e)}>
        <div className="form-group">
            <label className="h6">Title:</label>
            <input  type="text" onChange={(e) => {
                setTitle(e.target.value);
            }}  className="form-control" value={title}/>
        </div>
        <div className="form-group">
            <label className="h6">Price:</label>
            <input  type="number" onChange={(e) => {
                setPrice(e.target.value);
            }}  className="form-control" value={price}/>
        </div>
        <div className="form-group">
            <label className="h6">Description:</label>
            <input  type="text" onChange={(e) => {
                setDescription(e.target.value);
            }}  className="form-control" value={description}/>
        </div>
        <button className="btn btn-sm btn-outline-success">Submit</button>
    </form>
        )
}

export default EditProductManager;