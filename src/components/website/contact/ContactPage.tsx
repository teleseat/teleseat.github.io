/**
 * Contact Page
 * Url: /contact | /contact#getStarted
 */

import React, { useState } from 'react'
import { get } from 'lodash'
import {
    IonContent, IonLabel, IonRow, IonCol, IonButton, IonItem,
} from '@ionic/react'
import { useForm } from 'react-hook-form'

/* css */
import '../HomePage.scss'

/* Components */
import PageProps from '../../common/PageProps'
import TsMetaHeader from '../../common/TsMetaHeader'
import HomePageFooter from '../HomePageFooter'
import ErrorMessage from '../../common/form/ErrorMessage'
import { tsRegex } from '../../common/form/formCommon'
import TextInput from '../../common/form/TextInput'
import SelectInput from '../../common/form/SelectInput'

import TsIcon, { IconList } from '../../common/TsIcon'
import { APP_ROUTES } from '../../app/Routes'

import Util from '../../../util/util'


/** Types & Const */
type FormDataType = {
    WorkEmail: string
    FirstName: string
    LastName: string
    Company: string
    CompanySize: string
    Role?: string
    MeetingTools?: string
    CollaborationTools?: string
    Challenges?: string
    DiscussAbout?: string
}

const ContactPage: React.FC<PageProps> = (props) => {
    const params: any = new URLSearchParams(props.location.search)
    const activeTab = params.get('viewType') === 'contact' ? 'contact' : 'getStarted';
    const [submitted, setSubmitted] = useState(false)
    const [showOptional, setShowOptional] = useState(true)
    const contactForm = activeTab === 'contact'


    const { control, formState, handleSubmit, errors, getValues, setValue } = useForm<FormDataType>({
        defaultValues: {
            WorkEmail: '',
            FirstName: '',
            LastName: '',
            Company: '',
            CompanySize: '',
            ...!contactForm && { Role: '', MeetingTools: '', CollaborationTools: '', Challenges: '' },
            ...contactForm && { DiscussAbout: '' },
        },
        mode: 'onChange'
    })

    const onSubmit = (formData: FormDataType) => {
        const payload = { ...formData, FormType: contactForm ? 'Contact us' : 'Get Early Access' }
        console.log(payload);
        localStorage.setItem('early-access', 'true')
        if (!contactForm)
            window.location.href = "/"
    }

    const getError = (filedPath: string) => {
        //if (isEmpty(formState.touched)) return ''
        const _error = get(errors, filedPath, '')
        return _error
    }


    return (
        <IonContent id='contactPage' className='contact'>
            <TsMetaHeader
                title='Contact'
                description='Increase team engagement, build stronger alignments and facilitate informed decision-making at all levels.'
            />
            <>
                {submitted && contactForm && (
                    <IonRow className='contact--row mt-4 contact--thankYouMessage'>
                        <h2 className='f-bold-34 text-color'>Thanks</h2>
                        <p className='f-medium-16 text-medium mt-3'>We’ll be in touch shortly.</p>
                    </IonRow>
                )}
                {!submitted && (
                    <form onSubmit={handleSubmit(onSubmit)} className='contact--form'>
                        <IonRow className='contact--row mt-4'>
                            <IonLabel className='contact--formTitle ion-text-center w-100 my-2'>
                                {contactForm ? (
                                    <p className='f-medium-18 text-medium'>We’re happy to answer any questions and get you acquainted</p>
                                ) : (
                                    <IonLabel className='login-earlyAccess ion-text-wrap ion-text-center ion-no-margin'>
                                        <h2 className='f-medium-30 text-color'>Get started with early access!</h2>
                                        <p className='f-medium-14 text-medium mt-3'>Try out the Teleseat platform to supercharge your meetings and let us know what do you think! In early access, the platform is free to use. Rest assured, we’ll always have a free tier.</p>
                                    </IonLabel>
                                )}
                            </IonLabel>
                        </IonRow>
                        <IonRow className='contact--row formRow mt-4 mb-6'>
                            <IonCol className='contact--formWrapper'>
                                <IonRow>
                                    <IonCol size='12' sizeMd='6' className='contact--formCol mb-4'>
                                        <TextInput
                                            label='First name'
                                            name='FirstName'
                                            id='FirstName'
                                            type='text'
                                            control={control}
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            hasError={!!getError('FirstName')}
                                            placeholder='Your first name'
                                            required
                                        />
                                        <ErrorMessage error={getError('FirstName')} />
                                    </IonCol>
                                    <IonCol size='12' sizeMd='6' className='contact--formCol mb-4'>
                                        <TextInput
                                            label='Last name'
                                            name='LastName'
                                            id='LastName'
                                            type='text'
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            control={control}
                                            hasError={!!getError('LastName')}
                                            placeholder='Your last name'
                                            required

                                        />
                                        <ErrorMessage error={getError('LastName')} />
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className='p-0 mb-4'>
                                        <TextInput
                                            label='Work email'
                                            name='WorkEmail'
                                            id='WorkEmail'
                                            type='email'
                                            control={control}
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            hasError={!!getError('WorkEmail')}
                                            placeholder='Your work email'
                                            rules={{
                                                validate: (val: string) => {
                                                    if (val.match(tsRegex.email) == null) {
                                                        return 'Enter a valid email'
                                                    }
                                                    return true
                                                }
                                            }}
                                            required
                                        />
                                        <ErrorMessage error={getError('WorkEmail')} />
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size='12' sizeMd='6' className='contact--formCol mb-4'>
                                        <TextInput
                                            label='Company name'
                                            name='Company'
                                            id='Company'
                                            type='text'
                                            control={control}
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            hasError={!!getError('Company')}
                                            placeholder='Company name'
                                            required
                                        />
                                        <ErrorMessage error={getError('Company')} />
                                    </IonCol>
                                    <IonCol size='12' sizeMd='6' className='contact--formCol mb-4'>
                                        <SelectInput
                                            control={control}
                                            label={contactForm ? 'Company size' : 'Number of employees'}
                                            name='CompanySize'
                                            id='CompanySize'
                                            getValues={getValues}
                                            setValue={setValue}
                                            required
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            options={[
                                                { title: '1 - 9 employees', value: '1-9' },
                                                { title: '10 - 49 employees', value: '10 - 49' },
                                                { title: '50 - 199 employees', value: '50 - 199' },
                                                { title: '200 - 999 employees', value: '200 - 999' },
                                                { title: '1000+ employees', value: '1000+' },
                                            ]}
                                            hasError={!!getError('CompanySize')}
                                        />
                                        <ErrorMessage error={getError('CompanySize')} />
                                    </IonCol>
                                    <IonCol size='12' className='p-0 mb-4'>
                                        <TextInput
                                            label='What is your role at your workplace?'
                                            name='Role'
                                            id='Role'
                                            type='text'
                                            control={control}
                                            cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                            placeholder='E.g., Product manager, CEO'
                                            required
                                            hasError={!!getError('Role')}
                                        />
                                        <ErrorMessage error={getError('Role')} />
                                    </IonCol>
                                </IonRow>
                                {!contactForm ? (
                                    <IonRow>
                                        <IonCol size='12' className='p-0 mb-4'>
                                            <IonItem
                                                lines='none'
                                                className='itemTrimmed itemClear itemNoPad'
                                                onClick={() => setShowOptional(!showOptional)}
                                                button
                                                detail={false}
                                            >
                                                <IonButton fill='solid' color='light' className='ts-iconBtn xSmall noHover mr-2'>
                                                    <TsIcon icon={IconList.downArrow} className={`primary ${!showOptional ? 'rotate270' : ''}`} width='12px' height='12px' />
                                                </IonButton>
                                                <IonLabel className='ion-no-margin f-medium-14 text-color'>Optional</IonLabel>
                                            </IonItem>
                                        </IonCol>
                                        {showOptional && (
                                            <>
                                                <IonCol size='12' className='p-0 mb-4'>
                                                    <TextInput
                                                        label='Which video meeting tools are used at your workplace?'
                                                        name='MeetingTools'
                                                        id='MeetingTools'
                                                        type='text'
                                                        control={control}
                                                        cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                                        placeholder='E.g., Google Meet for internal meetings, Zoom for sales presentations'
                                                    />
                                                </IonCol>
                                                <IonCol size='12' className='p-0 mb-4'>
                                                    <TextInput
                                                        label='Which collaboration tools do you use at your workplace?'
                                                        name='CollaborationTools'
                                                        id='CollaborationTools'
                                                        type='text'
                                                        control={control}
                                                        cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                                        placeholder='E.g., Confluence for wiki, Slack for chat, Asana for project management'
                                                    />
                                                </IonCol>
                                                <IonCol size='12' className='p-0 mb-4'>
                                                    <TextInput
                                                        label='What sort of challenges do you see with virtual meetings and townhalls (e.g., all-hands)? '
                                                        name='Challenges'
                                                        id='Challenges'
                                                        type='text'
                                                        control={control}
                                                        cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                                        placeholder='Many unproductive meetings, meetings without posted agenda, don’t know where are the meeting materials,  notes and action items, how to catch up on a missed meeting, ...'
                                                        textarea
                                                    />
                                                </IonCol>
                                            </>
                                        )}
                                    </IonRow>
                                ) : (
                                    <IonRow>
                                        <IonCol className='p-0 mb-4'>
                                            <TextInput
                                                label='Please tell us what you’d like to discuss'
                                                name='DiscussAbout'
                                                id='DiscussAbout'
                                                type='text'
                                                control={control}
                                                cssClass={{ labelClass: 'f-medium-14 text-color' }}
                                                placeholder='E.g., I’d like to see a demo...'
                                                textarea
                                            />
                                        </IonCol>
                                    </IonRow>
                                )}
                                <IonRow className='contact--formFooterRow'>
                                    <IonCol size='12' sizeMd='9' className='p-0'>
                                        <IonLabel className='f-12 text-medium'>We're committed to your privacy. Teleseat uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <a href='https://teleseat.com/privacy' target='_blank' rel='noopener noreferrer' className='link text-primary'>Privacy policy</a>.</IonLabel>
                                    </IonCol>
                                    <IonCol size='12' sizeMd='3' className='p-0 ion-text-right'>
                                        <IonButton
                                            className='ts-btn force contact--submitBtn '
                                            type='submit'
                                            fill='solid'
                                            color='primary'
                                            disabled={submitted || !formState.dirty}
                                        >
                                            {activeTab === 'contact' ? 'Submit' : "Let's go"}
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </form>
                )}
            </>
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default ContactPage
