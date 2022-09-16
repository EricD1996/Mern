import {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import {createPet} from '../services/internalApiService';

export const NewPet = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleNewPetSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3,
        }
        createPet(newPet)
            .then((data) => {
                navigate('/pet');
            })
            .catch((error) => {
                setErrors(error?.response?.data?.errors);
            })
    }

    return (<div>
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/pet'}>back to home</Link>
        </div>
        <h3>Know a pet needing a home?</h3>
        <form onSubmit={(e) => handleNewPetSubmit(e)}>
            <label>Pet Name:</label>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }} />   
            {
                errors?.name && (<span style={{color: 'red'}}>{errors?.name?.message}</span>)
            }     
            <label>Pet Type:</label>
            <input type="text" onChange={(e) => {
                setType(e.target.value);
            }} />   
            {
                errors?.type && (<span style={{color: 'red'}}>{errors?.type?.message}</span>)
            }    
            <label>Pet Description:</label>
            <input type="text" onChange={(e) => {
                setDescription(e.target.value);
            }} />   
            {
                errors?.description && (<span style={{color: 'red'}}>{errors?.description?.message}</span>)
            }    
            <h4>Skills (optional):</h4>
            <label>Skill 1:</label>
            <input type="text" onChange={(e) => {
                setSkill1(e.target.value);
            }} />   
            {
                errors?.skill1 && (<span style={{color: 'red'}}>{errors?.skill1?.message}</span>)
            }    
            <label>Skill 2:</label>
            <input type="text" onChange={(e) => {
                setSkill2(e.target.value);
            }} />   
            {
                errors?.skill2 && (<span style={{color: 'red'}}>{errors?.skill2?.message}</span>)
            }    
            <label>Skill 3:</label>
            <input type="text" onChange={(e) => {
                setSkill3(e.target.value);
            }} />   
            {
                errors?.skill3 && (<span style={{color: 'red'}}>{errors?.skill3?.message}</span>)
            }    
            <button className="btn btn-sm btn-outline-success">Add Pet</button>
        </form>
    </div>
    )
}
export default NewPet;