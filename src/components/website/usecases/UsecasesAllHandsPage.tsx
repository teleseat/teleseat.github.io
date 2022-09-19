/**
 * Usecases All Hands Page
 * Url: /usecases/all-hands
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


const UsecasesAllHandsPage: React.FC<WebPagePropsType> = (props) => {
    const { setHeaderBG } = props;

    //ImportScripts('//js.hs-scripts.com/8279169.js')
    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)

    const onScroll = () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    }

    return (
        <IonContent ref={pageContent} id='UsecasesAllHandsPage' className='usecasesPage' onIonScroll={onScroll} scrollEvents>
            <TsMetaHeader
                title='Use case: All-hands, business reviews and departmental meetings'
                description='Increase team engagement, build stronger alignments and facilitate informed decision-making at all levels.'
                image='/assets/images/usecases/allhands.svg'
            />
            {/* Hero */}
            <section ref={headerSection} className='usecasesPage--hero ts-screen bgGray'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel className='usecasesPage--bannerText'>
                            <h2 className='f-bold-36 text-color mb-3'>Better all-hands, business reviews and departmental meetings</h2>
                            <p className='f-20 text-medium'>Increase team engagement, build stronger alignments and facilitate informed decision-making at all levels.</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media'>
                        <img src='/assets/images/usecases/allhands.svg' className='homePage--headerImage' alt='All-hands, business reviews and departmental meetings' />
                    </IonCol>
                </IonRow>
            </section>
            {/* Summary */}
            <section className='usecasesPage--summarySection ts-screen'>
                <IonRow className='homePage--row'>
                    <IonLabel className='summaryText'>
                        <p className='f-medium-22 text-color my-2'>With geographically dispersed team members, all-hands and company events are even more so critical for communication, building culture, strengthening morale and aligning teams’ work on strategic goals. Content, preparation and messaging are critical -- but so are the workflows and experiences that promote productivity and engagement in and in between these key meetings.</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* A modern live experience */}
            <section className='usecasesPage--section ts-screen bgGray'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color'>A modern live experience</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Participants get to access reference content and interact by raising their hands to ask questions on video, typing in questions and comments live, and even applauding just like they would in an in-person space. Integrated purpose-built video makes it all come to life with live speakers and presentations while providing for unmatched flexibility with content, such as playing recorded or web-hosted video at a very high quality.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/video-experience.png`}
                        srcSet={`/assets/images/usecases/video-experience@2x.png 2x, /assets/images/usecases/video-experience@3x.png 3x`}
                        alt='A modern live experience'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Virtual space for context and continuity */}
            <section className='usecasesPage--section ts-screen'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color'>Virtual space for context and continuity</h2>
                        <p className='f-16 text-color mt-2 mb-4'>Dedicated spaces tie it all together to automatically organize the sessions, reference content and recordings, and provide the venue for conversations, questions and engagement. No more siloed experiences and hunting through emails, calendar invites, shared drives, chat channels, wikis etc or putting in the manual work to organize after-the-fact.</p>
                    </IonLabel>
                    <img src={`/assets/images/usecases/virtual-event-space.png`}
                        srcSet={`/assets/images/usecases/virtual-event-space@2x.png 2x, /assets/images/usecases/virtual-event-space@3x.png 3x`}
                        alt='Virtual space for context and continuity'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
            </section>
            {/* Section : Set up in minutes */}
            <SetUpInMinutes className='bgGray' text='With guided workflows and integrated tools, setting up is as easy as 1-2-3. Additionally, with single sign-on, role-based access and nothing to download, your teams will have it going smoothly from the get go.' />
            {/* Section : Get key insights */}
            <KeyInsights img='key-insights-allHands' text='Tap into rich analytics and key metrics to help measure and improve upon.' />
            {/* Section : Easy to use */}
            <EasyToUse />
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default UsecasesAllHandsPage
