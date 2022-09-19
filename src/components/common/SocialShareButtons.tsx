/**
 * Social Share Buttons
 */

/* Imports: std */
import React, { Fragment } from 'react'
import { IonButtons, IonButton, IonLabel } from '@ionic/react'
import Url from '../../util/url'
import TsIcon, { IconList } from './TsIcon'
import Util from '../../util/util'
import TsTooltip from './TsTooltip'

interface SocialBtnType {
    TITLE: string
    ICON: IconList
    MAKE_URL: Function
    LABEL: string
}

const BUTTONS: SocialBtnType[] = [
    {
        TITLE: "LinkedIn",
        ICON: IconList.linkedin,
        LABEL: 'Post on Linkedin',
        MAKE_URL: (url: string, { title, summary }: { title?: string, summary?: string }) => {
            return (
                'https://linkedin.com/shareArticle' +
                Url.getParamString({ url, mini: 'true', title, summary, source: 'teleseat.com' })
            )
        }
    },
    {
        TITLE: "Facebook",
        ICON: IconList.facebook,
        LABEL: 'Post on Facebook',
        MAKE_URL: (url: string, { title, hashtag }: { title?: string; hashtag?: string }) => {
            return (
                'https://www.facebook.com/sharer/sharer.php' +
                Url.getParamString({
                    u: url,
                    quote: title,
                    hashtag,
                })
            )
        }
    },
    {
        TITLE: 'Twitter',
        ICON: IconList.twitter,
        LABEL: 'Tweet about it',
        MAKE_URL: (
            url: string,
            {
                title,
                via,
                hashtags = [],
                related = [],
            }: { title?: string; via?: string; hashtags?: string[]; related?: string[] },
        ) => {
            return (
                'https://twitter.com/share' +
                Url.getParamString({
                    url,
                    text: title,
                    via,
                    hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
                    related: related.length > 0 ? related.join(',') : undefined,
                })
            );
        }
    },
]

interface SocialShareButtonsPropsType {
    url: string
    onClick?: Function
    className?: string
    withLabel?: boolean
    title?: string
    copyToClipboard?: boolean
}

const SocialShareButtons: React.FC<SocialShareButtonsPropsType> = (props) => {
    const { url, onClick, className = '', withLabel = false, title = '', copyToClipboard = false } = props
    const onButtonClick = (make_url: Function) => {
        onClick && onClick();
        const share_url = make_url(url, { title })
        window.open(share_url, '_blank')
    }
    ///////////////////////////////////////////////////////
    // Render
    return (
        <IonButtons className={`${className}`}>
            {BUTTONS.map((btn: SocialBtnType) => (
                <Fragment key={btn.TITLE}>
                    {withLabel ? (
                        <IonButton className={`SS-shareBtn withLabel ${btn.TITLE}`} onClick={() => onButtonClick(btn.MAKE_URL)}>
                            <TsIcon icon={btn.ICON} className='light' width='15px' height='15px'/>
                            <IonLabel className='f-bold-13 text-light ml-2'>{btn.LABEL}</IonLabel>
                        </IonButton>
                    ) : (
                        <TsTooltip message={btn.LABEL}>
                            <IonButton className={`SS-shareBtn ${btn.TITLE}`} onClick={() => onButtonClick(btn.MAKE_URL)}>
                                <TsIcon icon={btn.ICON} className='primary' width='18px' height='18px' noTitle/>
                                {withLabel && (
                                    <IonLabel className='f-bold-13 text-light ml-2'>{btn.LABEL}</IonLabel>
                                )}
                            </IonButton>
                        </TsTooltip>
                    )}
                </Fragment>
            ))}
            {copyToClipboard && (
                <TsTooltip message='Copy to clipboard'>
                    <IonButton
                        className='SS-shareBtn Copy'
                        onClick={() => {
                            onClick && onClick()
                            Util.textToClipboard(url)
                        }}
                    >
                        <TsIcon icon={IconList.copy} className='primary' width='18px' height='18px' noTitle/>
                    </IonButton>
                </TsTooltip>
            )}
        </IonButtons>
    )
}

export default SocialShareButtons
