import {getAllProductManager, deleteProductManagerById} from "../services/internalApiService";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export const AllProductManagers = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProductManager()
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = (idToDelete) => {
        deleteProductManagerById(idToDelete)
            .then((deletedProduct) => {
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDelete;
                })
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return ( 
    <div>
        <h2>Products</h2>
        {products.map((product) => {
            const { _id, title, price, description } = product;
            return <div key={_id}>
                <Link to={`/productmanager/${_id}`}>
                    <h4>{title}</h4>
                </Link>
                <p>{price}</p>
                <p>{description}</p>
                <div>
                    <button onClick={(e) => {handleDeleteClick(_id)}}>Delete</button>
                </div>
                <Link to={`/productmanager/${_id}/edit`} className="btn btn-sm btn-outline-warning">Edit</Link>
            </div>
        })}
    </div>
    );
}

export default AllProductManagers;