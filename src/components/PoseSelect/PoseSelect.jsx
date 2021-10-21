import React from 'react';
import Select from 'react-select';

const Poses = [
    {label: "down dog"},
    {label: "savasana"},
    {label: "balasana"},
    {label: "sukhasana"},
    {label : "bhujangasana"},
];

export default function PoseSelect() {
    return (
            <div>
            <Select options={Poses} />
            </div>

    )
}