import React, { useState } from 'react';
import { supabase } from '../client'

const CreatePost = () => {

    const [crewMember, setCrewMember] = useState({
        name: '',
        speed: 0,
        color: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewMember(prevState => ({ ...prevState, [name]: value }));
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewMembers')
            .insert({name: crewMember.name, speed: crewMember.speed, color: crewMember.color})
            .select();

        window.location = "/";
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewMember.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" value={crewMember.speed} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" value={crewMember.color} onChange={handleChange} /><br />
                <br/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost