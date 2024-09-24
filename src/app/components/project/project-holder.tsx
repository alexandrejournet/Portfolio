const ProjectHolder = (props: {even: boolean}) => {
    return (
        <>
            {
                props.even ?
                    <ProjectLeft /> : <ProjectRight />
            }
        </>
    );
}

export default ProjectHolder;

const ProjectLeft = () => {
    return <>
        <div className={"img-holder"}></div>
        <div>
            <span className={"project-title"}></span>
            <span className={"project-tags"}></span>
            <span className={"project-description"}></span>
        </div>
    </>
}

const ProjectRight = () => {
    return <>
        <div>
            <span className={"project-title"}></span>
            <span className={"project-tags"}></span>
            <span className={"project-description"}></span>
        </div>
        <div className={"img-holder"}></div>
    </>
}