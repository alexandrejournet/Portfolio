import {Project} from "@/app/models/project.model";
import './project-holder.scss';

const ProjectHolder = (props: {even: boolean, project: Project}) => {
    return (
        <>
            {
                props.even ?
                    <ProjectLeft project={props.project} /> : <ProjectRight project={props.project} />
            }
        </>
    );
}

export default ProjectHolder;

const ProjectLeft = (props: {project: Project}) => {
    return <div className={"project-holder"}>
        <div className={"img-holder"}>{props.project.img}</div>
        <div className={"project-text left"}>
            <span className={"project-title"}>{props.project.title}</span>
            {
                props.project.link?.length > 0 ?
                    <span className={"project-link left"}>
                            <a href={props.project.link} target={"_blank"} rel={"noreferrer"}>{props.project.link.replace("https://", "")}</a>
                    </span>
                    : null
            }
            <span className={"project-tags left"}>
                {props.project.tags.map((tag, index) => {
                    return (
                        <span key={index} className={"tag"}>{tag}</span>
                    );
                })}
            </span>
            <span className={"line left"}></span>
            <span className={"project-description"}>
                {props.project.description}
            </span>

        </div>
    </div>
}

const ProjectRight = (props: {project: Project}) => {
    return <div className={"project-holder"}>
        <div className={"project-text right"}>
            <span className={"project-title"}>{props.project.title}</span>
            {
                props.project.link?.length > 0 ?
                    <span className={"project-link right"}>
                        <a href={props.project.link} target={"_blank"}
                           rel={"noreferrer"}>{props.project.link.replace("https://", "")}</a>

                    </span>
                    : null
            }
            <span className={"project-tags right"}>
                {props.project.tags.map((tag, index) => {
                    return (
                        <span key={index} className={"tag"}>{tag}</span>
                    );
                })}
            </span>
            <span className={"line right"}></span>
            <span className={"project-description"}>
                {props.project.description}
            </span>

        </div>
        <div className={"img-holder"}>{props.project.img}</div>
    </div>
}