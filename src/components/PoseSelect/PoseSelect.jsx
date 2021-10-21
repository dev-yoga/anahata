import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { getPoses } from "../../services/poseService";


export default function PoseSelect() {
    const [poses, setPoses] = useState([]);

useEffect(() => {
    const getPosesFromApi = async () => {
        const getPosesResponse = await getPoses();
        setPoses(await getPosesResponse);
    };

    getPosesFromApi();
}, []);

    const options = poses.map(pose => {
        return {value: pose._id, label: pose.name};
    });

    return (
            <div>
            <Select options={options} />
            </div>

    )
}