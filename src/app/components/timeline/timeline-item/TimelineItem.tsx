import React from 'react';
import './timeline-item.scss';
import {Experiences} from "@/app/models/experiences.model";
import {LuSchool} from "react-icons/lu";

const TimelineItem = (props: { experience: Experiences}) => {
    return (
        <div className={"timeline-item"}>
            <div className={"circle"}></div>
            <div className={"content"}>
                <h3>{!props.experience.isPro ? <><LuSchool/>&nbsp; </>: ''}
                    {props.experience.company} @{props.experience.location}</h3>
                <span>{props.experience.startDate} - {props.experience.endDate || "aujourd'hui"}</span>
                <div>{props.experience.description}</div>
                <div className={"missions"}>
                    {props.experience.missions?.map((mission, index) => (
                        <>
                            <div className={"circle-mission"}></div>
                            <div key={index} className={"mission"}>

                                {
                                    mission.startDate && mission.endDate ?
                                        <div><span>{mission.startDate} - {mission.endDate} - </span>{mission.titre}</div>
                                    :
                                    <div><span
                                     className={"bold"}>{mission.titre} &nbsp;</span>{mission.contexte ? mission.contexte : ""}
                                    </div>
                                }
                                <div className={"mission-tag"}>
                                    {mission.technologies?.split(',').map((tech, index) => (
                                        <span key={index} className={"tag"}>{tech}</span>
                                    ))
                                    }
                                </div>
                                {mission.description &&
                                    <div>{mission.description}</div>
                                }
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
