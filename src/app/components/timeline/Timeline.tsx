import React from 'react';
import TimelineItem from "@/app/components/timeline/timeline-item/TimelineItem";
import './timeline.scss';

const Timeline = () => {
    const experiences = [
        {
            company: 'AXOPEN',
            location: 'Lyon',
            startDate: 'Septembre 2019',
            endDate: null,
            description: 'Missions',
        },
        {
            company: 'INETUM (ex GFI)',
            location: 'Montpellier',
            startDate: 'Septembre 2017',
            endDate: 'Août 2019',
            description: '',
        },
    ];

    return (
<div className={"timeline-container"}>

    <div className={"timeline"}>

        <div className={"arrow"}></div>
        {experiences.map((exp, index) => (
            <TimelineItem
                key={index}
                company={exp.company}
                location={exp.location}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
            />
        ))}
    </div>
</div>
    );
};

export default Timeline;