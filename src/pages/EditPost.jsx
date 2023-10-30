import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const EditPost = () => {
    const { id } = useParams();
    const [crewMember, setCrewMember] = useState(null);

    useEffect(() => {
        console.log("ID from useParams:", id);
        const fetchCrewMember = async () => {
            const { data } = await supabase
                .from('crewMembers')
                .select()
                .eq('id', id);
            if (data && data.length > 0) {
                setCrewMember(data[0]);
            }
        }
        fetchCrewMember();
    }, [id]);

    const updateCrewMember = async (event) => {
        event.preventDefault();
      
        if(crewMember) {
            await supabase
            .from('crewMembers')
            .update({ name: crewMember.name, speed: crewMember.speed, color: crewMember.color })
            .eq('id', id);
        }
      
        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('crewMembers')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
      }

    if (!crewMember) return <div>Loading...</div>; // Display a loading state or some other placeholder until the data is fetched.

    return (
        <div>
            <form onSubmit={updateCrewMember}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewMember.name} 
                onChange={e => setCrewMember({...crewMember, name: e.target.value})} /><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value={crewMember.speed} 
                onChange={e => setCrewMember({...crewMember, speed: e.target.value})} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" value={crewMember.color} 
                onChange={e => setCrewMember({...crewMember, color: e.target.value})} /><br />
                <br/>

                <input type="submit" value="Update" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
