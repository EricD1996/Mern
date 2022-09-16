import {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import {createAuthor} from '../services/internalApiService';

export const NewAuthor = (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleNewAuthorSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: name,
        }
        createAuthor(newAuthor)
            .then((data) => {
                navigate('/author');
            })
            .catch((error) => {
                setErrors(error?.response?.data?.errors);
            })
    }

    return (<div>
        <h1>Favorite authors</h1>
        <Link to={'/author'}>Home</Link>
        <form onSubmit={(e) => handleNewAuthorSubmit(e)}>
            <div>
                <label className="h6">Name: </label>
                <input type="text" onChange={(e) => {
                    setName(e.target.value);
                }} className="form-control"/>
                {
                    errors?.name && (<span style={{color: 'red'}}>{errors?.name?.message}</span>)
                }
                <Link to={'/author'} className="btn btn-sm btn-outline-warning">Cancel</Link>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default NewAuthor;