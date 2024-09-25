import React from 'react';
import TimelineItem from "@/app/components/timeline/timeline-item/TimelineItem";
import './timeline.scss';
import {ExperiencesModel} from "@/app/models/experiences.model";

const Timeline = () => {
    const experiences: ExperiencesModel[] = [
        {
            company: 'AXOPEN',
            location: 'Lyon',
            startDate: 'Septembre 2019',
            description: 'Développement d\'applications web en Angular, C# + .NET, JAVA + Spring Boot, ',
            missions: [
            ]
        },
        {
            company: 'INETUM (ex GFI)',
            location: 'Montpellier',
            startDate: 'Septembre 2017',
            endDate: 'Août 2019',
            description: 'Développement d\'une application en J2EE',
            missions: [
            ]
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