import React from 'react'

export default function Heading(props) {
    const { id, content } = props;
    const styleObj = {
        backgroundColor: '#3F8A39',
        color: 'white',
        fontSize: '26px',
        padding: '60px'
    };
    return (
        <div id={id} style={styleObj}>
            {content}
        </div>
    )
}
