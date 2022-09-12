import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

export const OnePerson = (props) => {
    const {id} = useParams();
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios  
            .get(`https://swapi.dev/api/people/${id}`)
            .then((res) =>{
                setPeople(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [id]);
    const {name, height, mass, hair_color, skin_color} = people;
    return (
        <div>
            <h2>{name}</h2>
            <h3>Height: {height} cm</h3>
            <h3>Mass: {mass} kg</h3>
            <h3>Hair Color: {hair_color}</h3>
            <h3>Skin Color: {skin_color}</h3>
        </div>
    )
}
export default OnePerson;