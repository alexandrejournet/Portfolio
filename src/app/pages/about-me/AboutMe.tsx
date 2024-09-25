import TitleHeader from "@/app/components/title-header/title-header";
import './about-me.scss';

const AboutMe = () => {
    return (
        <section id="about-me">
            <TitleHeader title="Hello ! Je suis Alexandre Journet !" />

            <p><span className="highlight">Développeur</span> depuis 5 ans, après deux ans d&apos;alternance, je suis avant tout un passionné des nouvelles technologies. </p>

            <p>J&apos;adore tester et découvrir de nouveaux <span className="highlight">langages</span> – en ce moment, c&apos;est Rust qui capte toute mon attention !</p>

            <p>J&apos;aime particulièrement le développement <span className="highlight">full-stack</span>, car il me permet de toucher à tout, de l&apos;interface utilisateur jusqu&apos;à la création d&apos;architectures logicielles solides. <br/>Concevoir un code <span className="highlight">propre</span> et <span className="highlight">bien organisé</span> est quelque chose qui me tient vraiment à cœur.</p>

            <p>De nature curieuse, je ne peux pas m&apos;empêcher de chercher des solutions aux problèmes que je croise, que ce soit dans mon propre travail ou pour aider les autres.</p>

            <p>L&apos;informatique <span className="highlight">évolue</span> sans cesse, et c&apos;est un défi constant de rester à jour, mais c&apos;est aussi ce qui rend ce métier si excitant : il y a toujours quelque chose de nouveau à <span className="highlight">apprendre</span> !
            </p>
        </section>
);
}

export default AboutMe;