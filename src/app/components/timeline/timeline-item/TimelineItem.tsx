import React from 'react';
import './timeline-item.scss';

const TimelineItem = (props: { company: string, location:string , startDate: string, endDate: string | null, description: string }) => {
    return (
        <div className={"timeline-item"}>
            <div className={"circle"}></div>
            <div className={"content"}>
                <h3>{props.company} @{props.location}</h3>
                <span>{props.startDate} - {props.endDate || "aujourd'hui"}</span>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default TimelineItem;