import {useParams, useNavigate, Link} from'react-router-dom';
import {useEffect, useState} from "react";
import { getPetById, updatePetById } from '../services/internalApiService';

export const EditPet = (props) => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getPetById(id)
         .then((data) => {
            const {name, type, description, skill1, skill2, skill3} = data;
            setName(name);
            setType(type);
            setDescription(description);
            setSkill1(skill1);
            setSkill2(skill2);
            setSkill3(skill3);
         })
         .catch((error) => {
            console.log(error);
         })
    }, [id]);

    const handleEditPetSubmit = (e) => {
        e.preventDefault();
        const editedPet = {
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3,
        };
        updatePetById(id, editedPet)
            .then((updatedPet) => {
                console.log('updatedPet:', updatedPet);
                navigate(`/pet`)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/pet'}>back to home</Link>
            </div>
            <h3>Edit {name}</h3>
            <form onSubmit={(e) => handleEditPetSubmit(e)}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input type="text" onChange={(e) => {
                        setName(e.target.value);
                    }} className="form-control" value={name}/>  
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" onChange={(e) => {
                        setType(e.target.value);
                    }} className="form-control" value={type}/> 
                </div>
                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" onChange={(e) => {
                        setDescription(e.target.value);
                    }} className="form-control" value={description}/> 
                </div>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input type="text" onChange={(e) => {
                        setSkill1(e.target.value);
                    }} className="form-control" value={skill1}/>
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" onChange={(e) => {
                        setSkill2(e.target.value);
                    }} className="form-control" value={skill2}/> 
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" onChange={(e) => {
                        setSkill3(e.target.value);
                    }} className="form-control" value={skill3}/>
                </div>
                <button className="btn btn-sm btn-outline-success">Edit Pet</button>
            </form>
        </div>
    )
}
export default EditPet;