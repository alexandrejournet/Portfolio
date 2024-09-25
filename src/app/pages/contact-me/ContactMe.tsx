import './contact-me.scss';
import TitleHeader from "@/app/components/title-header/title-header";

const ContactMe = () => {
    return (
        <>
        <TitleHeader title={''}></TitleHeader>
        <div className={"contact"}>
            <h1>Keep In Touch.</h1>
            <h3>I&apos;m currently working in <span className={"highlight"}>Full-Stack Development</span>. <br/>Feel free to get in touch and talk more about your projects.</h3>
        </div>
    </>
    );
}

export default ContactMe;