import React, {useState} from 'react';

const Box = (props) => {
    const [color, setColor] = useState("");
    const boxes = [];
    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color};
        
    }

    return(
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color </label>
                    <input type="text" value={color}/>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )



}

export default Box;