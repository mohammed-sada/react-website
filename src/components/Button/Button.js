import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const Styles = ['btn--primary', 'btn--outline'];
const Sizes = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, buttonStyle, buttonSize, onclick }) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${buttonStyle} ${buttonSize}`} type={type} onclick={onclick}>
                {children}
            </button>
        </Link>
    )
}