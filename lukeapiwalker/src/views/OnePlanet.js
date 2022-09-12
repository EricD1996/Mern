import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

export const OnePlanet = (props) => {
    const {id} = useParams();
    const [planet, setPlanet] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((res) => {
                setPlanet(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [id]);
    const {name, climate, terrain, surface_water, population} = planet;
    return (
        <div>
            <h2>{name}</h2>
            <h3>Climate: {climate}</h3>
            <h3>Terrain: {terrain}</h3>
            <h3>Surface Water: {surface_water}</h3>
            <h3>Population: {population}</h3>
        </div>
    )
}
export default OnePlanet;