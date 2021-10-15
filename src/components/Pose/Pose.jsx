import React, { useState, useEffect } from 'react';
import { getPoses } from '../../services/poseService';
import styles from './Pose.css';

export default function Pose() {
    const [pose, setPose] = useState('pose');

    useEffect(() => {
        getPoses().then(x => {
            const allPoses = JSON.parse(x.text);
            const thePose = allPoses[Math.floor(Math.random() * allPoses.length)];
            setPose(`${thePose.name} - ${thePose.sankrit}`);
        });
    }, []);
    
    return (
        <div className={styles.pose}>
            {pose}
        </div>
    )
} 