import React from 'react'
import { HashLink } from 'react-router-hash-link';
import * as Constants from './constants'

export default function Menu() {
    return (
        <div class="menu">
            <HashLink smooth to={`/#${Constants.whatIDoID}`}>Your link text</HashLink>
            <HashLink smooth to="/pathLink#two">Your link text</HashLink>
            <HashLink smooth to="/#two">Your link text</HashLink>
            <HashLink smooth to="/pathLink#two">Your link text</HashLink>
        </div>
    )
}
