/**
 * Usecase live training and workshops page
 * Url: /usecases/live-training-and-workshops
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
import KeyInsights from '../KeyInsights'
import { WebPagePropsType } from '../../app/WebsiteTemplate'


const UsecasesTrainingPage: React.FC<WebPagePropsType> = (props) => {
    const { setHeaderBG } = props;

    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)

    const onScroll = () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    }

    return (
        <IonContent ref={pageContent} id='solutionsTrainingPage' className='usecasesPage' onIonScroll={onScroll} scrollEvents>
            <TsMetaHeader
                title='Use case: Live training and workshops'
                description='Create structured video-enabled learning experiences that foster deeper engagement and better outcomes'
                image='/assets/images/usecases/training.svg'
            />
            {/* Hero */}
            <section ref={headerSection} className='usecasesPage--hero ts-screen bgGray'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel className='usecasesPage--bannerText'>
                            <h2 className='f-bold-36 text-color mb-3'>Deliver impactful live training and workshops</h2>
                            <p className='f-20 text-medium'>Create structured video-enabled learning experiences that foster deeper engagement and better outcomes</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media'>
                        <img src='/assets/images/usecases/training.svg' className='homePage--headerImage' alt='Deliver impactful live training and workshops' />
                    </IonCol>
                </IonRow>
            </section>
            {/* Summary */}
            <section className='usecasesPage--summarySection ts-screen'>
                <IonRow className='homePage--row'>
                    <IonLabel className='summaryText'>
                        <p className='f-medium-22 text-color my-2'>Effective learning programs and training are of utmost importance and yet more challenging with employees, customers and partners being geographically dispersed. Training and workshops hosted on a modern platform that brings together live video, reference materials and conversations in one place and provides the space for continuity will be more impactful, accessible and make for better outcomes.</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Enhanced virtual classroom */}
            <section className='usecasesPage--section ts-screen bgGray'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color'>An enhanced virtual classroom</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Participants get to access reference content and interact by raising their hands to ask questions on video, typing in questions and comments live, and even applauding just like they would in an in-person classroom, while also connecting with others in a live and social learning experience. Integrated purpose-built video makes it all come to life with live speakers and instructions while providing for unmatched flexibility with content, such as playing recorded or web-hosted video at a very high quality.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/virtual-classroom.png`}
                        srcSet={`/assets/images/usecases/virtual-classroom@2x.png 2x, /assets/images/usecases/virtual-classroom@3x.png 3x`}
                        alt='An enhanced virtual classroom'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Spaces for context, continuity and engagement */}
            <section className='usecasesPage--section ts-screen'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Spaces for context, continuity and engagement</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Dedicated spaces to automatically organize the sessions, reference content and recordings that participants can even come back to, and provide the venue for conversations, questions and engagement. No more siloed experiences and hunting through emails, calendar invites, shared drives, chat channels etc.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/spaces-continuity-engagement.png`}
                        srcSet={`/assets/images/usecases/spaces-continuity-engagement@2x.png 2x, /assets/images/usecases/spaces-continuity-engagement@3x.png 3x`}
                        alt='Spaces for context, continuity and engagement'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Section : Set up in minutes */}
            <SetUpInMinutes className='bgGray' text='With guided workflows and integrated tools, setting up is as easy as 1-2-3. Additionally, with single sign-on, role-based access and nothing to download, your teams will have it going smoothly from the get go.' />
            {/* Section : Get key insights */}
            <KeyInsights img='key-insights-analytics' text='Tap into rich analytics and key metrics to help measure and improve upon.' />
            {/* Section : Easy to use */}
            <EasyToUse />
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default UsecasesTrainingPage
