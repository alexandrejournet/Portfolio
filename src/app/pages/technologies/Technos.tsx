import TitleHeader from "@/app/components/title-header/title-header";
import './technos.scss';
import Image from "next/image";

interface ITechno {
    name: string;
    logo?: string;
    logos?: string[];
    niveau: string;
    description?: string;
}

const Technos = () => {


    const technologies: ITechno[] = [
        {
            name: 'Angular',
            logo: 'angular.png',
            niveau: 'Avancé',
            description: 'Framework JavaScript que j\'utilise depuis 5 ans'
        },
        {
            name: 'C#',
            logo: 'c_sharp.png',
            niveau: 'Avancé',
            description: 'Langage de programmation que j\'utilise depuis 5 ans'
        },
        {
            name: '.NET',
            logo: 'dotnet.png',
            niveau: 'Avancé',
            description: 'Framework que j\'utilise depuis 5 ans'
        },
        {
            name: 'JAVA',
            logo: 'java.png',
            niveau: 'Avancé',
        },
        {
            name: 'Spring Boot',
            logo: 'springboot.png',
            niveau: 'Avancé'
        },
        {
            name: 'SQL',
            logos: ['postgresql.png', 'mysql.png'],
            niveau: 'Avancé'
        },
        {
            name: 'React',
            logo: 'react.png',
            niveau: 'Débutant'
        },
        {
            name: 'DevOps',
            logo: 'devops.png',
            niveau: 'Intermediaire'
        },
        {
            name: 'Mobile',
            logos: ['android.png', 'flutter.png'],
            niveau: 'Intermédiaire'
        },
        {
            name: 'Rust',
            logo: 'rust.png',
            niveau: 'Débutant'
        }
    ];

    return (
        <section id="technos">
            <TitleHeader title={"Technologies"} />
            <div className={"technos-container"}>
                {
                    technologies.map((technology, index) => (
                        <TechnoBlock key={index} {...technology} />
                    ))
                }
            </div>
        </section>
    );
}

export default Technos;


const TechnoBlock = (techno: ITechno) => {

    const showLogos = () => {
        if (techno.logos) {
            return (
                <div className={"techno-logos"}>
                    {
                        techno.logos.map((logo, index) => (
                            <Image key={index} src={`/assets/images/technos/${logo}`} alt={techno.name}
                                   width={75}
                                   height={75} unoptimized/>
                        ))
                    }
                </div>
            );
        }
        if (techno.logo) {
            return (
                <Image src={`/assets/images/technos/${techno.logo}`} alt={techno.name}
                       width={75}
                       height={75} unoptimized />
            );
        }
    }
    return (
        <div className={"techno-card"}>
            <div className={"techno-card-inner"}>
                <div className={"techno"}>
                    {showLogos()}
                    <span className={"techno-name"}>{techno.name}</span>
                    <span>{techno.niveau}</span>
                </div>
                <div className={"techno-back"}>
                    <span>{techno.description}</span>
                </div>
            </div>

        </div>
    );
}