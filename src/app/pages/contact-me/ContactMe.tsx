import './contact-me.scss';

const ContactMe = () => {
    return (
        <div className={"contact"}>
            <span className={"line"}></span>
            <h1>Restons en contact.</h1>
            <h3>Je suis actuellement <span className={"highlight"}>Développeur Full-Stack</span>.
                <br/>N&apos;hésitez pas à me contacter pour me parler de tous vos projets.</h3>
        </div>
    );
}

export default ContactMe;