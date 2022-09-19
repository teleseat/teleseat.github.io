/**
 * Eventco Chip Component
 */

import React, { useState, ReactNode } from 'react'

import { IonItem, IonLabel, IonInput, IonPopover, IonList } from '@ionic/react'
import { Controller, Control } from 'react-hook-form'

import './Form.scss'
import TsIcon, { IconList } from '../TsIcon'
import { FormCssClassType } from './formCommon'
import FormLabel from './FormLabel'
import { useRef } from 'react'

export type SelectOptionType = {
    value: any
    title?: string
    subtitle?: string
    icon?: IconList
}

export type SelectInputType = {
    label?: string
    name: string
    id?: string
    more?: string | ReactNode
    placeholder?: string
    control: Control
    cssClass?: FormCssClassType
    listClassName?: string
    rules?: Record<string, any>
    clean?: boolean
    disabled?: boolean
    readonly?: boolean
    required?: boolean
    hasError?: boolean
    onChange?: Function
    getValues: Function
    setValue: Function
    options: SelectOptionType[]
}

const SelectInput: React.FC<SelectInputType> = (props) => {
    const {
        label = '',
        name,
        id = '',
        more = '',
        placeholder = '',
        control,
        rules = {},
        cssClass = {},
        listClassName = '',
        clean = false,
        disabled = false,
        readonly = false,
        required = false,
        hasError = false,
        onChange,
        options,
        getValues,
        setValue,
    } = props;

    const {
        className = '',
        labelClass,
        inputClass = '',
        moreClass,
    } = cssClass

    const itemRef = useRef<HTMLIonItemElement>(null)
    const largeItem = !!options.find((item) => !!item.subtitle);

    const formValue = getValues(name)
    const [selectPanel, setSelectPanel] = useState({
        open: false,
        event: undefined
    })

    const closeSelectPanel = () => {
        setSelectPanel({ open: false, event: undefined })
    }

    const onclick = (value: any) => {
        closeSelectPanel()
        setValue(name, value)
        onChange && onChange(value)
    }

    const selectedOption = options.find((option: SelectOptionType) => option.value === formValue)

    return (
        <div className={`form-inputGroup ${className} ${disabled || readonly ? 'disabled' : ''}`}>
            {label && (
                <FormLabel {...{ label, labelClass, required, more, moreClass }} />
            )}
            <IonItem
                lines='none'
                className={`form-select itemTrimmed ${inputClass} ${label ? 'mt-1' : ''} ${clean ? 'clean' : 'default'} ${hasError ? 'error' : ''} ${(disabled || readonly) ? 'disabled' : ''}`}
                onClick={(e: any) => {
                    !disabled && !readonly && setSelectPanel({ open: true, event: e.nativeEvent })
                }}
                detail={false}
                ref={itemRef}
            >
                {selectedOption?.icon && (<TsIcon icon={selectedOption.icon} width='16px' height='16px' className='mr-2' />)}
                <IonLabel className='f-medium-13 text-color mr-1'>{selectedOption ? (selectedOption.title || selectedOption.value) : placeholder}</IonLabel>
                <TsIcon icon={IconList.dropdownArrow} width='16px' height='16px' className='ml-auto' />
            </IonItem>
            <Controller
                id={id || name}
                as={IonInput}
                control={control}
                name={name}
                type='text'
                onChangeName='onIonChange'
                onChange={([selected]) => {
                    const val = selected.detail.value
                    return val
                }}
                className='hidden'
                rules={{
                    ...rules,
                    required,
                }}
            />
            <IonPopover
                isOpen={selectPanel.open}
                event={selectPanel.event}
                cssClass='form-selectPanel'
                onDidDismiss={closeSelectPanel}
            >
                <IonList style={{width: `${itemRef.current?.offsetWidth || 250}px`}} className={`form-selectItemList ${listClassName} p-1`}>
                    {options.map((option: SelectOptionType, i: number) => (
                        <React.Fragment key={i}>
                            <IonItem
                                lines='none'
                                className={`form-selectItem ${selectedOption?.value === option.value ? 'selected' : ''} ${largeItem? 'large' : ''}`}
                                onClick={() => onclick(option.value)}
                                detail={false}
                            >
                                {option.icon && (<TsIcon icon={option.icon} width='16px' height='16px' className='mr-2' />)}
                                <IonLabel className='form-selectLabel ion-text-wrap ion-no-margin'>
                                    <h5 className={`${largeItem ? 'f-bold-13' : 'f-medium-13'} text-color`}>{option.title || option.value}</h5>
                                    {option.subtitle && (
                                        <p className='f-medium-13 text-medium mt-1'>{option.subtitle}</p>
                                    )}
                                </IonLabel>
                            </IonItem>
                        </React.Fragment>
                    ))}
                </IonList>
            </IonPopover>
        </div >
    )
}

export default SelectInput
