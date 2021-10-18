import React, { useState, useEffect } from 'react'
import { getSequenceById } from "../../services/sequenceService";

// Sequence actual needs the sequence id from sequence list
//This needs to display one entire sequence of poses with their pose name, sanksrit name, and cues.

export default function Sequence() {
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const getSequencesFromApi = async () => {
            const getSequencesResponse = await getSequenceById();
            setSequences(await getSequencesResponse);
        };

        getSequencesFromApi();
    }, []);

    return (<ul>
        {sequences.map(sequence => <div>{sequence.sequenceName}</div>)}
    </ul>);
}