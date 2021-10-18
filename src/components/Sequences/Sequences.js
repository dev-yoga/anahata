import React, { useState, useEffect } from 'react'
import { getSequencesByUser } from "../../services/sequenceService";

// This needs to get sequences, display them as a list of user sequences to select

export default function Sequences() {
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const getSequencesFromApi = async () => {
            const getSequencesResponse = await getSequencesByUser();
            setSequences(await getSequencesResponse);
        };

        getSequencesFromApi();
    }, []);

    return (<ul>
        {sequences.map(sequence => (
            <div key={sequence._id}>
                {sequence.sequenceName}
                {sequence.poses.map(pose => (<div key={pose._id}>- {pose.name} - {pose.sanskrit} - {pose.cues}</div>))}
            </div>
        ))}
    </ul>);
}

