import React, {useState} from 'react';

const NewForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
            const newUser = { firstname, lastname, email, password, confirmpassword};
            console.log(newUser);
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 3){
            setFirstNameError("First name must be 3 charcters or longer!");
        } else{
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 3){
            setLastNameError("Last name must be 3 charcters or longer!");
        } else{
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email  is required!");
        } else if(e.target.value.length < 3){
            setEmailError("Email  must be 3 charcters or longer!");
        } else{
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password  is required!");
        } else if(e.target.value.length < 8){
            setPasswordError("Password  must be 8 charcters or longer!");
        } else{
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password  is required!");
        } else if(confirmpassword != password){
            setPasswordError("Passwords must match");
        } else{
            setPasswordError("");
        }
    }

    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} value={firstname}/>
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>: ''
                    }   
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastname}/>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>: ''
                    }   
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} value={email}/>
                    {
                        emailError ?
                        <p>{emailError}</p>: ''
                    }  
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} value={password}/>
                    {
                        passwordError ?
                        <p>{passwordError}</p>: ''
                    }  
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfirmPassword} value={confirmpassword}/>
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p>: ''
                    }  
                </div>
            </form>
            {/* <h1>Your Form Data</h1>
            <div>
                <label>First Name: {firstname}</label>
            </div>
            <div>
                <label>Last Name: {lastname}</label>
            </div>
            <div>
                <label>Email: {email}</label>
            </div>
            <div>
                <label>Password: {password}</label>
            </div>
            <div>
                <label>Confirm Password: {confirmpassword}</label>
            </div> */}
        </div>
    )
}

export default NewForm;