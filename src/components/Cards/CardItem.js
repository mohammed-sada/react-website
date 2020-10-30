import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, path, label, text }) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={path}>
                    <figure className='cards__pic-wrap' data-directory={label}>
                        <img src={src} alt='travel' className='cards__item__img' />
                    </figure>
                    <div className='cars__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;