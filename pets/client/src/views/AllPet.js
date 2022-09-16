import {getAllPet} from "../services/internalApiService";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export const AllPets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllPet()
            .then((data) => {
                setPets(data);
            })
            .catch((error) => {
                console.loe(error);
            })
    }, []);

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/pet/new'}>add a pet to the shelter</Link>
            </div>
            <h3>These Pets are looking for a good home</h3>
            <table >
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {pets.map((pet) => {
                    const {_id, name, type} = pet;
                    return (
                    <div key={_id}>
                        <tr>
                            <td>{name}</td>
                            <td>{type}</td>
                            <td><Link to={`/pet/${_id}`}>details</Link> | <Link to={`/pet/${_id}/edit`}>edit</Link></td>
                        </tr>
                    </div>
                    )
                })}
            </table>
        </div>
    )

}

export default AllPets;