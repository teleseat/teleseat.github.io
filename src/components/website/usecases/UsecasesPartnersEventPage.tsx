/**
 * Solutions employee onboarding page
 * Url: /solutions/employee-onboarding
 */

import React, { useRef } from 'react'
import {
    IonButton,
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
import { APP_ROUTES } from '../../app/Routes'
import { WebPagePropsType } from '../../app/WebsiteTemplate'


const UsecasesPartnerEventPage: React.FC<WebPagePropsType> = (props) => {
    const { setHeaderBG } = props;

    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)

    const onScroll = () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    }

    return (
        <IonContent ref={pageContent} id='UsecasesPartnerEventPage' className='usecasesPage' onIonScroll={onScroll} scrollEvents>
            <TsMetaHeader
                title='Use case: Better webinars and virtual events for customers and partners'
                description='Create structured video-enabled learning experiences that foster deeper engagement and better outcomes'
                image='/assets/images/usecases/partner.svg'
            />
            {/* Hero */}
            <section ref={headerSection} className='usecasesPage--hero ts-screen bgGray'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel className='usecasesPage--bannerText'>
                            <h2 className='f-bold-36 text-color mb-3'>Better webinars and virtual events for customers and partners</h2>
                            <p className='f-20 text-medium'>Create seamless experiences for learning and connecting that help deepen relationship with your organization</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media'>
                        <img src='/assets/images/usecases/partner.svg' className='homePage--headerImage' alt='Better webinars and virtual events for customers and partners' />
                    </IonCol>
                </IonRow>
            </section>
            {/* Summary */}
            <section className='usecasesPage--summarySection ts-screen'>
                <IonRow className='homePage--row'>
                    <IonLabel className='summaryText'>
                        <p className='f-medium-22 text-color my-2'>Tap into a turnkey platform that provides you the tools, workflows and built-in experiences for you to plan for and host highly engaging webinars and virtual events that your customers and partners love and keep coming back to.</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Video-enabled onboarding workflow */}
            <section className='usecasesPage--section ts-screen column bgGray'>
                <IonRow className='homePage--row'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Modern, all-in-one platform</h2>
                        <p className='f-18 text-color my-4'>Teleseat is built to be the easiest to use all-in-one platform that provides you with everything you need to host and grow webinars and virtual events. You don’t have to depend on web developers and a patchwork of tools, apps and point solutions to produce engaging webinar and event experiences.</p>
                        <IonButton className='ts-btn mb-5' href={`${APP_ROUTES.PLATFORM}#bringingItAllTogether`}>Learn more</IonButton>
                    </IonLabel>
                </IonRow>
                <IonRow className='homePage--row ion-align-items-start'>
                    <img src={`/assets/images/usecases/virtual-events.png`}
                        srcSet={`/assets/images/usecases/virtual-events@2x.png 2x, /assets/images/usecases/virtual-events@3x.png 3x`}
                        alt='All-in-one platform for virtual events'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Integrated high-quality video*/}
            <section className='usecasesPage--section column ts-screen'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Integrated high-quality video</h2>
                        <p className='f-18 text-color mt-2 mb-4'>Web-based video experience that is crisper, livelier and just better</p>
                    </IonLabel>
                    <img src={`/assets/images/homepage/integrated-video.png`}
                        srcSet={`/assets/images/homepage/integrated-video@2x.png 2x, /assets/images/homepage/integrated-video@3x.png 3x`}
                        alt='Integrated high-quality video'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
                <IonRow className='homePage--row mt-5'>
                    <IonCol sizeMd='4' size='12'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>Lightening fast join</h3>
                            <p className='f-15 text-color mt-1 mb-3'>No separate app, no frictions. Exceptionally high quality and fast join</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol sizeMd='3' offsetMd='1' size='12' offset='0'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>High quality, no latency</h3>
                            <p className='f-15 text-color mt-1 mb-3'>Meetings, webinars and events sessions come to life</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol sizeMd='3' offsetMd='1' size='12' offset='0'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>Fast recording</h3>
                            <p className='f-15 text-color mt-1 mb-3'>Recordings become available in-place in as quick as a few minutes</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol sizeMd='4' size='12'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>Unmatched flexibility</h3>
                            <p className='f-15 text-color mt-1 mb-3'>Live video, or play recorded or web-hosted video, or mix-n-match them</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol sizeMd='3' offsetMd='1' size='12' offset='0'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>High-fidelity sharing</h3>
                            <p className='f-15 text-color mt-1 mb-3'>Share your screen or play a video, without annoying pixelation and loss of audio</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol sizeMd='3' offsetMd='1' size='12' offset='0'>
                        <IonLabel className='subInfo'>
                            <h3 className='f-bold-18 text-color'>Highly scalable</h3>
                            <p className='f-15 text-color mt-1 mb-3'>From small team projects to all-hands and large conferences</p>
                        </IonLabel>
                    </IonCol>
                </IonRow>
            </section>
            {/* Section : Set up in minutes */}
            <SetUpInMinutes className='bgGray' text='With guided workflows and integrated tools, setting up is as easy as 1-2-3. Additionally, with single sign-on, role-based access and nothing to download, your teams will have it going smoothly from the get go.'/>
            {/* Section : Get key insights */}
            <KeyInsights img='key-analytis-external-event' text='Tap into rich analytics and key metrics to help measure and improve upon.'/>
            {/* Section : Easy to use */}
            <EasyToUse />
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default UsecasesPartnerEventPage
