import React from 'react'
import { HashLink } from 'react-router-hash-link';
import * as Constants from './constants'

export default function Menu() {
    return (
        <div class="menu">
            <HashLink smooth to={`/#${Constants.whatIDoID}`}>What I Do</HashLink>
            <HashLink smooth to="/pathLink#two">Two</HashLink>
        </div>
    )
}
