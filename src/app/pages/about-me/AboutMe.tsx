import TitleHeader from "@/app/components/title-header/title-header";
import './about-me.scss';

const AboutMe = () => {
    return (
        <section id="about-me">
            <TitleHeader title="Hello ! Je suis Alexandre Journet !" />

            <p><span className="highlight">Développeur</span> depuis 5 ans, après deux ans d'alternance, je suis avant tout un passionné des nouvelles technologies. </p>

            <p>J'adore tester et découvrir de nouveaux <span className="highlight">langages</span> – en ce moment, c'est Rust qui capte toute mon attention !</p>

            <p>J'aime particulièrement le développement <span className="highlight">full-stack</span>, car il me permet de toucher à tout, de l'interface utilisateur jusqu'à la création d'architectures logicielles solides. <br/>Concevoir un code <span className="highlight">propre</span> et <span className="highlight">bien organisé</span> est quelque chose qui me tient vraiment à cœur.</p>

            <p>De nature curieuse, je ne peux pas m'empêcher de chercher des solutions aux problèmes que je croise, que ce soit dans mon propre travail ou pour aider les autres.</p>

            <p> L'informatique <span className="highlight">évolue</span> sans cesse, et c'est un défi constant de rester à jour, mais c'est aussi ce qui rend ce métier si excitant : il y a toujours quelque chose de nouveau à <span className="highlight">apprendre</span> !
            </p>
        </section>
);
}

export default AboutMe;