import {Project} from "@/app/models/project.model";
import './project-holder.scss';
import ProjectSlider from "@/app/components/project/project-slider/project-slider";
import Image from "next/image";

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
        <div className={"img-holder"}>
            {
                props.project.imgs?.length > 0 ?
                    <ProjectSlider images={props.project.imgs} />
                    :
                    <Image width={100} height={100} src={`/assets/images/ampoule.png`} alt={"project"}/>
            }
        </div>
        <div className={"project-text left"}>
            <span className={"project-title"}>{props.project.title}</span>
            <LinksHandler even={true} links={props.project.links}/>
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
    return (
    <div className={"project-holder"}>
        <div className={"project-text right"}>
            <span className={"project-title"}>{props.project.title}</span>
            <LinksHandler even={false} links={props.project.links}/>
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
        <div className={"img-holder"}>
            {
                props.project.imgs?.length > 0 ?
                    <ProjectSlider images={props.project.imgs} />
                :
                    <Image width={100} height={100}  src={`/assets/images/ampoule.png`} alt={"project"}/>
            }
        </div>
    </div>
    );
}

const LinksHandler = (props: {even: boolean, links: string[]}) => {

    return (
        <span className={`project-link ${props.even ? "left": "right"}`}>
            {
                props.links?.map((link, index) => (
                    <>
                        <a key={index} href={link} target={"_blank"}
                           rel={"noreferrer"}>{link.replace("https://", "")}</a>

                        {
                            index < props.links?.length - 1 &&
                        <span key={index}> | </span>
                        }
                    </>
                ))
            }
        </span>
    );
}