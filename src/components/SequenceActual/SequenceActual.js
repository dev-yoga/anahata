import React, { useState, useEffect } from 'react'
import { getSequences } from "../../services/sequenceService";


//This needs to display one entire sequence of poses with their pose name, sanksrit name, and cues.

export default function SequenceActual() {
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const getSequencesFromApi = async () => {
            const getSequencesResponse = await getSequences();
            setSequences(await getSequencesResponse);
        };

        getSequencesFromApi();
    }, []);

    return (<ul>
        {sequences.map(sequence => <div>{sequence.sequenceName}</div>)}
    </ul>);
}