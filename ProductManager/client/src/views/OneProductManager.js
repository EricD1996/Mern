import {useParams, useNavigate} from 'react-router-dom';
import { getProductManagerById, deleteProductManagerById } from '../services/internalApiService';
import {useEffect, useState} from 'react';

export const OneProductManager = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getProductManagerById(id)
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    if (product === null){
        return null;
    }

    const handleDeleteClick = () => {
        deleteProductManagerById(id)
            .then((deletedProduct) => {
                navigate('/productmanager');
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const {title, price, description} = product;

    return (
        <div>
            <h4>{title}</h4>
            <p>{price}</p>
            <p>{description}</p>
            <div>
                <button onClick={(e) => {handleDeleteClick()}}>Delete</button>
            </div>
        </div>
    )
}

export default OneProductManager;