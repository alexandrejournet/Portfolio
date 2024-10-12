import TitleHeader from "@/app/components/title-header/title-header";
import {Certification} from "@/app/models/certification.model";
import './certifications.scss';

export function Certifications() {

    const certifications: Certification[] = [
        {
            title: "Foundational C# with Microsoft",
            description: "Certification délivrée par Microsoft et FreeCodeCamp.",
            link: "https://www.freecodecamp.org/certification/alexandrejournet/foundational-c-sharp-with-microsoft"
        }
    ];

    return (
        <section id={"certifications"}>
            <TitleHeader title={"Certifications"} />
            {
                certifications.map((certification, index) => {
                    return (
                        <div key={index}>
                            <h3>{certification.title}</h3>
                            <h4>{certification.description}</h4>
                            <a href={certification.link}>Lien vers la certification</a>
                        </div>
                    );
                })
            }
        </section>
    );
}
