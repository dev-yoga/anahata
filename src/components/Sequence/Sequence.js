import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getSequenceById } from "../../services/sequenceService";

// Sequence actual needs the sequence id from sequence list
// This needs to display one entire sequence of poses with their pose name, sanksrit name, and cues.

export default function Sequence() {
    const [sequence, setSequence] = useState({poses:[]});
    const { sequenceId } = useParams();

    useEffect(() => {
        const getSequenceFromApi = async () => {
            const getSequenceResponse = await getSequenceById(sequenceId);
            setSequence(await getSequenceResponse);
        };

        getSequenceFromApi();
    }, [sequenceId]);

    return (
        <div>
            {sequence.sequenceName}
            {sequence.poses.map(pose => (<div key={pose._id}>- {pose.name} - {pose.sanskrit} - {pose.cues}</div>))}
        </div>
    )
}