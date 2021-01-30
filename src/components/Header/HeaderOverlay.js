import React from 'react';
import {ReactComponent as ReturnIcon} from '../../assets/↳.svg';
import {ReactComponent as CloseIcon} from '../../assets/Close.svg';
export const HeaderOverlay = ({headerWasClicked, setMenu}) => {
    return (
        <div className={`header__overlay ${headerWasClicked ? 'open' : 'close'}`}>
            <div className="header__overlay__menu"><CloseIcon className="icon__close" onClick={() => setMenu(!headerWasClicked)}/></div>
            <div className="header__overlay__content">
                <ul className="header__overlay__list">
                    <li className="header__overlay__list__item"><ReturnIcon className="icon__return"/>Home</li>
                    <li className="header__overlay__list__item">About</li>
                    <li className="header__overlay__list__item">Work</li>
                </ul>
            </div>
        </div>
    )
}
