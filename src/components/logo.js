import React from 'react'
import './logo.css'
import UseWindowDimensions from './windowWidth';

export default function logo() {
    const { height, width } = UseWindowDimensions();
    let breakStr = '//';

    if (width < 500) {
        breakStr = <br></br>;
    }
    
    return (
        <div className="logo">
            <div style={{fontSize: '30px', fontWeight: '600'}}>
                Denton's Lawn and Tree
            </div>
            <div style={{fontSize: '20px'}}>
                dentonslawnandtree@gmail.com {breakStr} (519) 709-5541
            </div>
        </div>
    )
}
