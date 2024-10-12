import React from 'react';
import TimelineItem from "@/app/components/timeline/timeline-item/TimelineItem";
import './timeline.scss';
import {Experiences} from "@/app/models/experiences.model";

const Timeline = () => {
    const experiences: Experiences[] = [
        {
            company: 'AXOPEN',
            location: 'Lyon',
            startDate: 'Septembre 2019',
            description: 'Développement d\'applications web et mobile',
            isPro: true,
            missions: [
                {
                    titre: "Lead Développeur Fullstack",
                    contexte: "Mission pour un client dans le domain de l'industrie",
                    "description": "Au sein d'un groupe de trois personnes, mission incluant : changement complet de l'architecture du projet, développement d'évolutions, calculs de nombres complexes, et gestion de sockets de connexion.",
                    technologies: ".NET Framework 4.8.1, Winforms, SQLite",
                }, {
                    titre: "Développeur Fullstack",
                    contexte: "Mission pour un client dans le domaine de l'assurance",
                    "description": "Au sein d'une équipe de plus de 10 personnes, mission centrée sur la maintenance des applications, le développement des évolutions, la mise en place d'intégration continue et la résolution des bugs.",
                    technologies: "Angular 17, Typescript, Spring Boot, Spring Batch, JAVA 21, PostgreSQL, Redis, ElasticSearch, Azure, AKS, Helm, Gitlab",
                },
                {
                    titre: "Lead Developpeur Fullstack",
                    contexte: "Mission pour un client dans le domaine associatif",
                    description: "Mission au sein d'un groupe de 3 personnes. Responsabilités incluent : gestion des évolutions, gestion des ressources et suivi des tâches, chiffrage des demandes, mise en place des processus pour la TMA, mise en place de l'intégration continue, développement de nouvelles fonctionnalités et résolution des bugs.",
                    technologies : "Angular 17, Typescript, .NET 8, C#, Kotlin, MySQL, Azure App Services, Azure Storage, Azure OCR"
                }
            ]
        },
        {
            company: 'INETUM (ex GFI)',
            location: 'Montpellier',
            startDate: 'Septembre 2017',
            isPro: true,
            endDate: 'Août 2019',
            description: 'Développement d\'une application en J2EE',
            missions: [
                {
                    titre: "Alternant - Développeur Fullstack",
                    contexte: "Application web à destination des collectivités locales",
                    "description": "Maintenance et évolution de l'application, ainsi que refonte graphique de l'application.",
                    "technologies": "JAVA J2EE (Spring/Hibernate), GED ALFRESCO"
                }
            ]
        },
        {
            company: 'EPSI - L\'école d\'ingénierie informatique',
            location: 'Montpellier',
            startDate: 'Septembre 2016',
            endDate: 'Septembre 2019',
            description: 'Formation en alternance',
            isPro: false,
            missions: [
                {
                    titre: "Cycle Ingenierie : Titre de certifié niveau 7 – Expert en informatique et Système d’information",
                    startDate: 'Septembre 2017',
                    endDate: 'Septembre 2019'
                },
                {
                    titre: "Cycle Bachelor : Titre EPSI - Concepteur Intégrateur DevOps",
                    startDate: 'Septembre 2016',
                    endDate: 'Septembre 2017'
                }
            ]
        },
        {
            company: "IUT de Montpellier-Sète",
            location: 'Montpellier',
            startDate: 'Septembre 2013',
            endDate: 'Juin 2015',
            description: 'DUT Informatique',
            isPro: false,
        }
    ];

    return (
<div className={"timeline-container"}>

    <div className={"timeline"}>

        <div className={"arrow"}></div>
        {experiences.map((exp, index) => (
            <TimelineItem
                key={index}
                experience={exp}
            />
        ))}
    </div>
</div>
    );
};

export default Timeline;
