/**
 * Dismissable message component
 */

import React, { useState, useEffect } from 'react'
import { IonLabel, IonButton, IonRow } from '@ionic/react'
import TsIcon, { IconList } from './TsIcon'

import './MessageDismissable.scss'

interface MessageDismissablePropsType {
    title?: string
    message?: string
    autoClose?: number
    className?: string
    icon?: IconList
    noDismiss?: boolean
}

const MessageDismissable: React.FC<MessageDismissablePropsType> = (props) => {
    const {
        title = '',
        message = '',
        autoClose = 0,
        className = '',
        icon = IconList.info,
        noDismiss = false
    } = props
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        if (autoClose) {
            setTimeout(() => {
                setDismissed(true)
            }, autoClose * 1000)
        }
    }, [autoClose])
    return (
        <>
            {dismissed ? '' : (
                <IonRow
                    className = {`messageDismissable ${className} ${noDismiss ? 'noDismiss' : ''}`}
                >
                    <TsIcon icon={icon} className='messageDismissable--pinIcon primary' width='15px' height='15px'/>
                    <IonLabel className='messageDismissable--label mx-2'>
                        {title && (
                            <h3 className='messageDismissable--title f-bold-13 text-color ion-text-wrap ion-no-margin'>{title}</h3>
                        )}
                        {message && (
                            <h3 className='messageDismissable--message f-medium-13 text-medium ion-text-wrap ion-no-margin'>{message}</h3>
                        )}
                    </IonLabel>
                    {!noDismiss && (
                        <IonButton fill='clear' className='messageDismissable--close ts-iconBtn small' onClick={() => setDismissed(true)}>
                            <TsIcon icon={IconList.close} width='17px' height='17px'/>
                        </IonButton>
                    )}
                </IonRow>
            )}
        </>
    )
}

export default MessageDismissable
