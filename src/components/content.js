import React from 'react'
import UseWindowDimensions from './windowWidth';

export default function Content(props) {
    const {bolded, content} = props;
    const {  width } = UseWindowDimensions();

    let leftRight = width * 0.1;
    
    let styleObj = {
        textAlign: 'left',
        margin: `50px ${leftRight}px`,
        fontSize: '20px'
    };

    if (bolded) {
        styleObj.fontWeight = 'bold';
    }

    return (
        <div style={styleObj}>
            {content}
        </div>
    )
}
