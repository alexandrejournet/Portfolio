import TitleHeader from "@/app/components/title-header/title-header";
import ProjectHolder from "@/app/components/project/project-holder";

const Projects = () => {

    const projects = [
        {
            title: "E-portfolio",
            tags: ["Next.js", "Typescript"],
            description: "Description du projet 3",
            img: "",
            link: "https://www.alexandrejournet.dev"
        },
        {
            title: "Radiant.NET",
            tags: [".NET", "C#", "Clean Architecture", "Repository pattern"],
            description: "Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 Description du projet 1 ",
            img: "",
            link: "https://rebootframework.alexandrejournet.dev"
        },
        {
            title: "PrestiGit",
            tags: ["Angular", "TypeScript", "Rust", "Tauri", "Electron", "Nodegit", "Git2-RS"],
            description: "Description du projet 2",
            img: "",
            link: ""
        }
        ];
return (
    <section id={"projects"}>
        <TitleHeader title={"Projets"} />
        {
            projects.map((project, index) => {
                return (
                    <ProjectHolder key={index} even={index % 2 === 0} project={project}></ProjectHolder>
                );
            })
        }
    </section>
    );
}

export default Projects;