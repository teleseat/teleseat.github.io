/**
 * Form Label Input
 */

import React, { ReactNode } from 'react'

import { IonItem, IonLabel } from '@ionic/react'
import MessageDismissable from '../MessageDismissable'
import { IconList } from '../TsIcon'

export interface FormLabelType {
    label: string
    labelClass?: string
    required?: boolean
    more?: string | ReactNode
    messageDismissable?: string
    moreClass?: string
}

const FormLabel: React.FC<FormLabelType> = (props) => {
    const {
        label = '',
        labelClass = 'f-medium-14 text-color',
        more = '',
        messageDismissable = '',
        moreClass = 'f-14 text-soft',
        required = false,
    } = props

    return (
        <>
            <IonItem lines='none' className='itemNoPad itemTrimmed itemClear'>
                <IonLabel className={`ion-no-margin ion-text-wrap ${labelClass}`}>
                    <span>
                        {label}
                        {required && <span className='sup'>*</span>}
                    </span>
                    {more && <p className={`${moreClass}`}>{more}</p>}
                </IonLabel>
            </IonItem>
            {messageDismissable && (
                <MessageDismissable message={messageDismissable} icon={IconList.info} className='mt-3 mb-4'/>
            )}
        </>
    )
}

export default FormLabel
