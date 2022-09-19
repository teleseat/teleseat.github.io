/**
 * Solutions employee onboarding page
 * Url: /solutions/employee-onboarding
 */

import React, { useRef } from 'react'
import {
    IonCol, IonContent, IonLabel, IonRow
} from '@ionic/react'

/* css */
import '../HomePage.scss'

/* Components */
import HomePageFooter from '../HomePageFooter'
import TsMetaHeader from '../../common/TsMetaHeader'
import EasyToUse from '../EasyToUse'
import SetUpInMinutes from '../SetUpInMinutes'
import { WebPagePropsType } from '../../app/WebsiteTemplate'


const UsecasesOnboardingPage: React.FC<WebPagePropsType> = (props) => {
    const { setHeaderBG } = props;

    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)

    const onScroll = () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    }

    return (
        <IonContent ref={pageContent} id='solutionsOnboardingPage' className='usecasesPage' onIonScroll={onScroll} scrollEvents>
            <TsMetaHeader
                title='Use case: Onboard new employees with ease and efficiency'
                description='Remove frictions and inefficient manual work. Deliver seamless video-enabled workflows that make everyone more so productive.'
                image='/assets/images/usecases/hiring.svg'
            />
            {/* Hero */}
            <section ref={headerSection} className='usecasesPage--hero ts-screen bgGray'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel className='usecasesPage--bannerText'>
                            <h2 className='f-bold-36 text-color mb-3'>Onboard new employees with ease and efficiency</h2>
                            <p className='f-20 text-medium'>Remove frictions and inefficient manual work. Deliver seamless video-enabled workflows that make everyone more so productive.</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media'>
                        <img src='/assets/images/usecases/hiring.svg' className='homePage--headerImage' alt='employee onboarding' />
                    </IonCol>
                </IonRow>
            </section>
            {/* Summary */}
            <section className='usecasesPage--summarySection ts-screen'>
                <IonRow className='homePage--row'>
                    <IonLabel className='summaryText'>
                        <p className='f-medium-22 text-color my-2'>Effective onboarding is critical to a new employee’s success. The logistics and experiences around the meetings, training and reference materials over the first few days have much room for improvement for everyone involved. Teleseat enables a streamlined, efficient onboarding experience, resulting in productivity gains from day one and great first impressions.</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Video-enabled onboarding workflow */}
            <section className='usecasesPage--section ts-screen bgGray'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Video-enabled onboarding workflow</h2>
                        <p className='f-16 text-color mt-2 mb-4'>With easy workflows, set up dedicated spaces for new employee onboarding that allow team members to collaborate via structured sessions, chat, reference content such as onboarding guides and recorded videos, and on-screen walk-thrus. Easily create templates for different roles.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/employee-onboarding.png`}
                        srcSet={`/assets/images/usecases/employee-onboarding@2x.png 2x, /assets/images/usecases/employee-onboarding@3x.png 3x`}
                        alt='Video-enabled onboarding workflow'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* A virtual onboarding space */}
            <section className='usecasesPage--section ts-screen'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color'>A virtual onboarding space</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Dedicated spaces to automatically organize the sessions, reference content and recordings, and provide the venue for conversations, questions and engagement that the new teammate can return to. No more siloed experiences and hunting through emails, calendar invites, shared drives, chat channels etc.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/virtual-onboarding-space.png`}
                        srcSet={`/assets/images/usecases/virtual-onboarding-space@2x.png 2x, /assets/images/usecases/virtual-onboarding-space@3x.png 3x`}
                        alt='A virtual onboarding space'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Better new employee experience */}
            <section className='usecasesPage--section ts-screen bgGray'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Better new employee experience</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Dedicated spaces to automatically organize the sessions, reference content and recordings, and provide the venue for conversations, questions and engagement. No more siloed experiences and hunting through emails, calendar invites, shared drives, chat channels etc.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/new-employee.png`}
                        srcSet={`/assets/images/usecases/new-employee@2x.png 2x, /assets/images/usecases/new-employee@3x.png 3x`}
                        alt='Better new employee experience'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Section : Set up in minutes */}
            <SetUpInMinutes text='With guided workflows and integrated tools, setting up is as easy as 1-2-3. Additionally, with single sign-on, role-based access and nothing to download, the new employee as well as everyone involved will have it going smoothly from the get go.'/>
            {/* Section : Easy to use */}
            <EasyToUse />
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default UsecasesOnboardingPage
