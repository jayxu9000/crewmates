import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const Info = () => {
    const { id } = useParams();
    const [crewMember, setCrewMember] = useState(null);

    useEffect(() => {
        const fetchCrewMember = async () => {
            const { data, error } = await supabase
                .from('crewMembers')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching crew member:", error);
            } else if (data) {
                setCrewMember(data);
            }
        };

        fetchCrewMember();
    }, [id]);

    if (!crewMember) return <div>Loading...</div>;

    return (
        <div className="Info">
            <h2>Crew Member Info</h2>
            <p><strong>Name:</strong> {crewMember.name}</p>
            <p><strong>Speed:</strong> {crewMember.speed}</p>
            <p><strong>Color:</strong> {crewMember.color}</p>
        </div>
    );
};

export default Info;
