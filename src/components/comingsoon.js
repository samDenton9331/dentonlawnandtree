import React from 'react'
import './comingSoon.css'
import UseWindowDimensions from './windowWidth';

export default function ComingSoon() {

    const { height, width } = UseWindowDimensions();

    return (
        <div className="coming-soon">
            <h2>
                Coming Soon!
            </h2>
            <hr style={{margin:'3rem'}}></hr>
            <h4>
           
                For Service and Information:
                <br></br>
                <br></br>
                dentonslawnandtree@gmail.com
                <br></br>
                519-709-5541
            </h4>
        </div>
    )
}
