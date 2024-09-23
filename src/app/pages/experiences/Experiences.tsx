import TitleHeader from "@/app/components/title-header/title-header";
import './experiences.scss';
import Timeline from "@/app/components/timeline/Timeline";

const Experiences = () => {
    return (
        <section id={"experiences"}>
            <TitleHeader title={"Expériences"} />
            <Timeline />
        </section>
    );
}

export default Experiences;