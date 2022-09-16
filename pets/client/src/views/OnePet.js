import {useParams, useNavigate, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getPetById, deletePetById} from '../services/internalApiService';

export const OnePet = (props) => {
    const [pet, setPet] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getPetById(id)
            .then((data) => {
                console.log(data);
                setPet(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    if(pet === null){
        return null;
    }

    const handleDeleteClick = () => {
        deletePetById(id)
            .then((deletedPet) => {
                navigate('/pet');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const {name, type, description, skill1, skill2, skill3} = pet;

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/pet'}>back to home</Link>
            </div>
            <div>
                <h3>Details about: {name}</h3>
                <button onClick={(e) => {handleDeleteClick()}}>Adopt {name}</button>
            </div>
            <h4>Pet type: </h4>
            <p>{type}</p>
            <h4>Description:</h4>
            <p>{description}</p>
            <h4>Skills:</h4>
            <p>{skill1}</p>
            <p>{skill2}</p>
            <p>{skill3}</p>
        </div>
    )
}

export default OnePet;