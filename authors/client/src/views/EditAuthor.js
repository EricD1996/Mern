import {useParams, useNavigate, Link} from'react-router-dom';
import {useEffect, useState} from "react";
import { getAuthorById, updateAuthorById } from '../services/internalApiService';

export const EditAuthor = (props) => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                const {name} = data;
                setName(name);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleEditAuthorSubmit = (e) => {
        e.preventDefault();
        const editedAuthor = {
            name:name,
        };
        updateAuthorById(id, editedAuthor)
            .then((updatedAuthor) => {
                navigate(`/author`)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/author'}>Home</Link>
            <p>Edit this author</p>
            <form onSubmit={(e) => handleEditAuthorSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Name: </label>
                    <input type="text" onChange={(e) => {
                        setName=(e.target.value);
                    }} className="form-control" value={name}/>
                </div>
                <Link to={'/author'} className="btn btn-sm btn-outline-warning">Cancel</Link>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )


}

export default EditAuthor;