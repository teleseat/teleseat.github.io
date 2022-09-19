/**
 * Form Error Message
 */

import React from 'react'

import { IonItem, IonLabel } from '@ionic/react'

export interface ErrorMessagePropsType {
    error?: Record<string, string | boolean>
}

const ErrorMessage: React.FC<ErrorMessagePropsType> = (props) => {
    const {
        error,
    } = props

    if (!error) {
        return <></>
    }

    let {
        message = '',
        type
    } = error
    if (!message) {
        switch (type) {
            case 'required':
                message = 'This field is required'
                break;
            case 'min':
                message = 'This number is smaller than allowed min number'
                break;
            case 'max':
                message = 'This number is greater than allowed max number'
                break;
            case 'minLength':
                message = 'This doesn\'t meet the minimum number of characters allowed for this field'
                break;
            case 'maxLength':
                message = 'This exceeds maximum number of characters allowed for this field'
                break;
            default:
                message = 'This field has invalid input'
                break;
        }
    }
    return (
        <IonItem className='form-error mt-1' lines='none'>
            <IonLabel className='form-errorLabel ion-no-margin ion-text-wrap'>
                {message}
            </IonLabel>
        </IonItem>
    )
}

export default ErrorMessage
