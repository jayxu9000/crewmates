import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'
import { Link } from 'react-router-dom'

const ReadPosts = () => {

    const [crewMembers, setCrewMembers] = useState([]);

    useEffect(() => {

        // READ all post from table
        const fetchCrewMembers = async () => {
            const {data} = await supabase
            .from('crewMembers')
            .select();
        
            // set state of posts
            setCrewMembers(data)
        }

        fetchCrewMembers()
    }, []);
    
    return (
        <div className="ReadPosts">
            <Link to="/new"><button className="headerBtn"> New Crew Member </button></Link>
            {
                crewMembers && crewMembers.length > 0 ?
                crewMembers.map((crewMembers,index) => 
                   <Card key={crewMembers.id} id={crewMembers.id} name={crewMembers.name} speed={crewMembers.speed} color={crewMembers.color}/>
                ) : <h2>{'No Crew Members Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;