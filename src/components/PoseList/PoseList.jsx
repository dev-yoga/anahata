import React, { useState, useEffect } from 'react'
import { getPoses } from "../../services/poseService";


// This is the pose list for selecting poses for sequence building

export default function PoseList() {
    const [poses, setPoses] = useState([]);

    useEffect(() => {
        const getPosesFromApi = async () => {
            const getPosesResponse = await getPoses();
            setPoses(await getPosesResponse);
        };

        getPosesFromApi();
    }, []);

    return (<ul>
        {poses.map(pose => <div key={pose._id}>{pose.name}</div>)}
    </ul>);
}