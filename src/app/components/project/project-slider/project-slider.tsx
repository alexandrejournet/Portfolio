"use client";
import {useState} from "react";
import './project-slider.scss';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import Modal from "@/app/components/modal/Modal";
import Image from "next/image";

const ProjectSlider = (props: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const length = props.images.length;


    return (
        <div className={"slider-container"}>
            <SliderContent images={props.images} current={current}/>
            <Arrows previous={() => setCurrent(current === 0 ? length - 1 : current - 1)}
                    next={() => setCurrent(current === length - 1 ? 0 : current + 1)}/>
            <Dots images={props.images} current={current} setCurrent={setCurrent}/>
        </div>
    );
}

export default ProjectSlider;


const Arrows = (props: { previous: () => void, next: () => void }) => {
    return (
        <div className={"carets"}>
            <span className={"caret prev"} onClick={props.previous}>
                <AiFillCaretLeft/>
            </span>
            <span className={"caret next"} onClick={props.next}>
                <AiFillCaretRight/>
            </span>
        </div>
    );
}

const Dots = (props: { images: string[], current: number, setCurrent: (index: number) => void }) => {
    return (
        <div className={"dots"}>
            {
                props.images.map((img, index) => (
                    <span key={index}
                          className={props.current === index ? "dot active" : "dot"}
                          onClick={() => props.setCurrent(index)}>
                    </span>
                ))
            }
        </div>
    );
}

const SliderContent = (props: { images: string[], current: number }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {
                props.images.map((img, index) => (
                    <div key={index}
                         className={props.current === index ? "slide active" : "slide inactive"}>
                        <img src={`/assets/images/${img}`} alt={"project"} onClick={() => setIsModalOpen(true)} />
                        {
                            isModalOpen &&
                            <Modal onClose={() => setIsModalOpen(false)}>
                                <Image src={`/assets/images/${img}`} width={160} height={90} alt={"project"} />
                            </Modal>
                        }
                    </div>
                ))
            }
        </>
    );
}