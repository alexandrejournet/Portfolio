import TitleHeader from "@/app/components/title-header/title-header";
import ProjectHolder from "@/app/components/project/project-holder";
import {Project} from "@/app/models/project.model";

const Projects = () => {

    const projects: Project[] = [
        {
            title: "E-portfolio",
            tags: ["Next.js", "Typescript"],
            description: "E-portfolio réalisé avec Next.js et Typescript. Permet de présenter mes compétences, mes projets et mon parcours professionnel.",
            imgs: ["e-portfolio.png"],
            links: ["https://www.alexandrejournet.dev"]
        },
        {
            title: "Solstice",
            tags: [".NET", "C#", "Clean Architecture", "Repository pattern"],
            description: "Création d'un framework par dessus .NET pour faciliter la création d'API REST. Utilisation de Clean Architecture et du Repository pattern. Séparé en plusieurs packages Nuget, un pour chaque couche.",
            imgs: [],
            links: [
                "https://alexandrejournet.github.io/Solstice/",
                "https://github.com/alexandrejournet/Solstice"
            ]
        },
        {
            title: "PrestiGit",
            tags: ["Angular", "TypeScript", "Rust", "Tauri", "Electron", "Nodegit", "Git2-RS"],
            description: "Début de la réalisation d'un client Git multiplateforme avec Angular et Electron. Migration vers Rust et Tauri pour plus de performance et ne plus dépendre d'Electron et nodegit (Version alpha de cette dernière).",
            imgs: [],
            links: []
        },
        {
            title: "LedController",
            tags: ["Angular", "TypeScript"],
            description: "Application web développée pour contrôler des LEDs via une connexion bluetooth.",
            imgs: ["led-controller.png"],
            links: ["https://led.alexandrejournet.dev"]
        },
        {
            title: "Epileptic App",
            tags: ["Flutter", "Dart", ".NET 8", "C#", "Clean Architecture", "Repository pattern"],
            description: "Application mobile multiplateforme développée avec Flutter et une API REST en .NET 8. Elle me permet de gérer les crises d'épilepsie de mon chien ainsi que son stock de médicaments. ",
            imgs: [],
            links: []
        },
        {
            title: "Scrap API",
            tags: [".NET 8", "C#", "Angular", "Typescript", "Flutter"],
            description: "API REST développée en .NET 8 pour récupérer des informations sur des sites web. Utilisation de HtmlAgilityPack pour le scraping. Récupération automatique via un cron de lecture de flux RSS (parsing du XML). Ajout automatique à une file d'attente de téléchargement. Application web Angular, développé en mobile first, permettant de voir les récupérations en cours et pouvoir envoyer un lien en file d'attente. Application mobile Flutter qui embarque une webview accédant au site web.",
            imgs: ["scrap-ui-1.png", "scrap-ui-2.png"],
            links: []
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
