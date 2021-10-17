import React, { useState, useEffect } from 'react'
import { getSequences } from "../../services/sequenceService";


// This needs to get sequences, display them as a list of user sequences to select
// Sequence actual needs the sequence id from sequence list

export default function SequenceList() {
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const getSequencesFromApi = async () => {
            const getSequencesResponse = await getSequences();
            setSequences(await getSequencesResponse);
        };

        getSequencesFromApi();
    }, []);

    return (<ul>
        {sequences.map(sequence => (
            <div>
                {sequence.sequenceName}
                {sequence.poses.map(pose => (<div>- {pose.name} - {pose.sanskrit} - {pose.cues}</div>))}
            </div>
        ))}
    </ul>);
}

