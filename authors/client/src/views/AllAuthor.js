import {getAllAuthor, deleteAuthorById} from "../services/internalApiService";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthor()
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDeleteClick = (idToDelete) => {
        deleteAuthorById(idToDelete)
            .then((deletedAuthor) => {
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDelete;
                })
                setAuthors(filteredAuthors);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Favorite authors</h2>
            <Link to="/author/new">Add an author</Link>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {authors.map((author) => {
                    const {_id, name} = author;
                    return <div key={_id}>
                        <tr>
                            <td>{name}</td>
                            <td>
                                <Link to={`/author/${_id}/edit`}>Edit</Link>  <button onClick={(e) => {handleDeleteClick(_id)}}>Delete</button>
                            </td>
                        </tr>
                    </div>
                })}
            </table>
        </div>
    )
}

export default AllAuthors;