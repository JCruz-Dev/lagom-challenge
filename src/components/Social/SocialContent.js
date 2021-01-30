import React from 'react'
import { Links } from '../Links'

export const SocialContent = () => {
    return (
        <div className="space-social-content-X socials__content">
            <Links url="https://dribbble.com" />
            <div className="spacer"></div>
            <Links titleName="Twitter" hasTitleColor url="https://twitter.com" />
        </div>
    )
}
