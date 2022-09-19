/**
 * Teleseat Brand logo component
 */

import React from 'react'
import { IonItem } from '@ionic/react'

// Uses
import { APP_ROUTES } from '../app/Routes'
import TsIcon, { IconList } from '../common/TsIcon'

interface TeleSeatBrandPropsType {
    id?: string
    slot?: string
    className?: string
    variant?: 'light' | 'dark'
    size?: 'full' | 'small'
    noLink?:boolean
    openOnNewTab?: boolean
}

const TeleSeatBrand: React.FC<TeleSeatBrandPropsType> = (props) => {
    const {
        id = 'teleseatLogo',
        slot = '',
        className = '',
        variant = 'dark',
        noLink = false,
        size = 'full',
        openOnNewTab = false
    } = props
    const linkProps = !noLink ? openOnNewTab ? {href: APP_ROUTES.WEB_HOME, target: 'teleseatWeb'} : {routerLink: APP_ROUTES.WEB_HOME} : {}
    return (
        <IonItem
            id={id}
            slot={slot}
            lines='none'
            className={`AH-brand itemClear itemNoPad itemTrimmed ${className}`}
            {...linkProps}
            detail={false}
        >
            <TsIcon icon={size === 'full' ? IconList.teleseatLogo : IconList.teleseat} className={variant} />
        </IonItem>
    )
}

export default TeleSeatBrand
