/**
 * Text/Textarea Input Component
 */

import React from 'react'

import { IonInput, IonTextarea } from '@ionic/react'
import { Controller, Control } from 'react-hook-form'

import './Form.scss'
import { FormCssClassType } from './formCommon'
import FormLabel from './FormLabel'

export interface TextInputType {
    label?: string
    name: string
    id?: string
    more?: string
    placeholder?: string
    control: Control
    cssClass?: FormCssClassType
    type?: 'number' | 'text' | 'time' | 'date' | 'email' | 'password' | 'search' | 'tel' | 'url'
    rules?: Record<string, any>
    disabled?: boolean
    readonly?: boolean
    textarea?: boolean
    required?: boolean
    hasError?: boolean
    onChange?: Function
}

const TextInput: React.FC<TextInputType> = ({
    label = '',
    name,
    id = '',
    more = '',
    placeholder = '',
    control,
    rules = {},
    type = 'text',
    textarea = false,
    cssClass = {},
    disabled = false,
    readonly = false,
    required = false,
    hasError = false,
    onChange,
}) => {
    const {
        className = '',
        labelClass,
        inputClass = '',
        moreClass,
    } = cssClass

    return (
        <div className={`form-inputGroup ${className} ${(disabled || readonly) ? 'disabled' : ''}`}>
            {label && (
                <FormLabel {...{label, labelClass, required, more, moreClass}} />
            )}
            <Controller
                id={id || name}
                as={textarea ? IonTextarea : IonInput}
                control={control}
                name={name}
                onChangeName='onIonChange'
                onChange={([selected]) => {
                    const val = selected.detail.value
                    onChange && onChange(val)
                    return val
                }}
                className={
                    `form-control line f-medium-14 text-color ${inputClass} ${label ? 'mt-1' : ''} ${textarea ? 'form-controlTextarea' : 'form-controlText'} ${hasError ? 'error' : ''}`
                }
                rules={{
                    ...rules,
                    ...(required && { required })
                }}
                // optional props
                {...{
                    ...(placeholder && { placeholder }),
                    ...(!textarea && { type }),
                    ...(textarea && { autoGrow: true, wrap: 'soft' }),
                    readonly,
                    disabled,
                }}
            />
        </div>
    )
}

export default TextInput
