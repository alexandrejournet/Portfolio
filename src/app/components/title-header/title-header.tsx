import React from 'react';
import './title-header.scss';

const TitleHeader = (props: { title: string }) => {
    return (
        <>
            <div className="line"></div>
            <span className="title-header">{props.title}</span>
        </>
    );
}

export default TitleHeader;