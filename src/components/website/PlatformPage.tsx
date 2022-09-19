/**
 * Platform page
 * Url: /platform
 */

import React, { useEffect, useRef, useState } from 'react'
import { get } from 'lodash'
import {
    IonButton,
    IonButtons,
    IonCol, IonContent, IonLabel, IonRow, IonSlide, IonSlides
} from '@ionic/react'

/* css */
import './HomePage.scss'

/* Components */
import HomePageFooter from './HomePageFooter'
import TsMetaHeader from '../common/TsMetaHeader'
import TsIcon, { IconList } from '../common/TsIcon'
import { WebPagePropsType } from '../app/WebsiteTemplate'


const slides = ['slide-01.svg', 'slide-02.svg', 'slide-03.svg']

const PlatformPage: React.FC<WebPagePropsType> = (props) => {
    const { setHeaderBG, location } = props;
    const hash = get(location, 'hash', '')

    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)
    const slidesRef = useRef<HTMLIonSlidesElement>(null)
    const organizationUseCases = useRef<HTMLElement>(null)
    const webBasedVideo = useRef<HTMLElement>(null)

    const onScroll = () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    }

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        slidesRef.current?.slideTo(activeSlide)
    }, [activeSlide])

    useEffect(() => {
        if (hash && hash === '#bringingItAllTogether') {
            setTimeout(() => {
                const height = (headerSection.current?.offsetHeight || 0) + (organizationUseCases.current?.offsetHeight || 0) + (webBasedVideo.current?.offsetHeight || 0)
                pageContent.current?.scrollToPoint(0, height, 1000)
            }, 500)
        }
    }, [])

    const slideOpts = {
        speed: 500,
        allowTouchMove: false,
    };

    const slideTo = (to: 'prev' | 'next') => {
        const x = to === 'prev' ? -1 : 1
        setActiveSlide(activeSlide + x)
    }

    return (
        <IonContent ref={pageContent} id='platformPage' className='platformPage' onIonScroll={onScroll} scrollEvents>
            <TsMetaHeader
                title='The Teleseat platform'
                description='Modern, easy to use, rich in features and functions, and enterprise-grade to rely on.'
                image='/assets/images/usecases/special-projects.svg'
            />
            {/* Hero */}
            <section ref={headerSection} className='platformPage--hero ts-screen bgGray'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel className='platformPage--bannerText'>
                            <h2 className='f-bold-36 text-color mb-3'>The teleseat platform</h2>
                            <p className='f-20 text-medium'>Modern, easy to use, rich in features and functions, and enterprise-grade to rely on.</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media'>
                        <img src='/assets/images/usecases/special-projects.svg' className='homePage--headerImage' alt='The teleseat platform' />
                    </IonCol>
                </IonRow>
            </section>
            {/* Ready for your organization’s use cases */}
            <section ref={organizationUseCases} className='platformPage--section ts-screen column'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color mb-4'>Ready for your organization’s use cases</h2>
                    </IonLabel>
                    <img src={`/assets/images/platform/events-setup.png`}
                        srcSet={`/assets/images/platform/events-setup@2x.png 2x, /assets/images/platform/events-setup@3x.png 3x`}
                        alt='Ready for your organization’s use cases'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
                <IonRow className='homePage--row platformPage--sectionRow my-5'>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Easy to use</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Intuitive user experience and design aesthetics are central tenets</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Single sign-on</h3>
                        <p className='f-15 text-color mt-1 mb-3'>G-Suite, Okta and other secure methods of authenticated access</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Modern tech architecture</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For dependability, agility and scalability</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Guided workflows</h3>
                        <p className='f-15 text-color mt-1 mb-3'>To step through quick set-ups while providing access to advanced features</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Secure</h3>
                        <p className='f-15 text-color mt-1 mb-3'>End-to-end encryption, permission-based access control</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Built-in integrations</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For revenue events, integration with Salesforce</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Powerful analytics</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Metrics and insights that help you make better decisions</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Scalable</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Enterprise-ready, and can scale to thousands of participants</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Instant provisioning</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Browser-based and SSO make it easy to extend access</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Integrated web-based video */}
            <section ref={webBasedVideo} className='platformPage--section column ts-screen bgGray'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info ion-text-center'>
                        <h2 className='f-bold-28 text-color mb-4'>Integrated web-based video</h2>
                    </IonLabel>
                    <img src={`/assets/images/homepage/integrated-video.png`}
                        srcSet={`/assets/images/homepage/integrated-video@2x.png 2x, /assets/images/homepage/integrated-video@3x.png 3x`}
                        alt='Integrated web-based video'
                        className='platformPage--sectionMedia'
                    />
                </IonRow>
                <IonRow className='homePage--row platformPage--sectionRow my-5'>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Lightening fast join</h3>
                        <p className='f-15 text-color mt-1 mb-3'>No separate app, no frictions. Exceptionally high quality and fast join</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>High quality, no latency</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Meetings, webinars and events sessions come to life</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Fast recording</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Recordings become available in-place in as quick as a few minutes</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Unmatched flexibility</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Live video, or play recorded or web-hosted video, or mix-n-match them</p>
                    </IonLabel>

                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>High-fidelity sharing</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Share your screen or play a video, without annoying pixelation and loss of audio</p>
                    </IonLabel>

                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Highly scalable</h3>
                        <p className='f-15 text-color mt-1 mb-3'>From small team projects to all-hands and large conferences</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Bringing it all together */}
            <section className='platformPage--section ts-screen column'>
                <IonRow className='homePage--row ion-align-items-start'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color mb-3'>Bringing it all together</h2>
                    </IonLabel>
                    <img src={`/assets/images/homepage/dedicated-spaces.png`}
                        srcSet={`/assets/images/homepage/dedicated-spaces@2x.png 2x, /assets/images/homepage/dedicated-spaces@3x.png 3x`}
                        alt='Bringing it all together'
                        className='usecasesPage--sectionMedia'
                    />
                </IonRow>
                <IonRow className='homePage--row platformPage--sectionRow my-5'>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Dedicated spaces</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Spaces tie it all together and provide for the context and continuity</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Content management</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Repository for presentations and videos to share live</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Raise hand</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Participants can request to come on video to ask questions</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Choice of sessions types</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For meetings, webinars and breakouts</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Additional resources</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Post PDFs, documents, video and website links, or anything</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Promoted speakers</h3>
                        <p className='f-15 text-color mt-1 mb-3'>During live session, anyone can be promoted come on video and mic</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Unconstrained sessions</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Stacked, parallel and recurring sessions allow for limitless flexibility</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Polls</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Easily create and run polls to engage the participants</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Mission Control</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For organizers, speakers and moderators to stay on top</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Speakers and attendee roles</h3>
                        <p className='f-15 text-color mt-1 mb-3'>No need to ask participants to mute and turn off the camera</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Chat, Q&A</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Sidebar area for live conversations, questions and reactions</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Auto-curated</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Video recordings, resources, Q&A etc saved in-place</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Same all-in-one platform for your external events and webinars */}
            <section className='platformPage--section padBottom ts-screen column bgGray'>
                <img src='/assets/images/grid.svg' className='homePage--dottedBg ion-hide-sm-down' alt='' />
                <img src='/assets/images/grid-mobile.svg' className='homePage--dottedBg ion-hide-sm-up' alt='' />
                <IonRow className='homePage--row'>
                    <IonLabel className='info narrow ion-text-center'>
                        <h2 className='f-bold-28 text-color mb-3'>Same all-in-one platform for your external events and webinars</h2>
                    </IonLabel>
                </IonRow>
                <IonRow className='homePage--row'>
                    <IonSlides
                        className='usecases-slides'
                        options={slideOpts}
                        ref={slidesRef}
                    >
                        {slides.map((slide, idx) => (
                            <IonSlide className='features-slide' key={idx}>
                                <img src={`/assets/images/usecases/${slide}`}
                                    alt={`usecase slide ${idx}`}
                                />
                            </IonSlide>
                        ))}
                    </IonSlides>
                    <IonButtons className='slidesNav'>
                        <IonButton color='dark' className='slidesNavBtn ts-iconBtn force' fill='solid' onClick={() => slideTo('prev')} disabled={activeSlide === 0}>
                            <TsIcon icon={IconList.leftArrow} className='slidesNavIcon light'/>
                        </IonButton>
                        <IonButton color='dark' className='slidesNavBtn ts-iconBtn force' fill='solid' onClick={() => slideTo('next')} disabled={activeSlide === (slides.length - 1)}>
                            <TsIcon icon={IconList.rightArrow} className='slidesNavIcon light'/>
                        </IonButton>
                    </IonButtons>
                </IonRow>
                <IonRow className='homePage--row platformPage--sectionRow my-5'>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Planning</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Manage the lifecycle of events and webinars in one place</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Landing page and registration</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Integrated landing pages, registration and optional ticketing</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Virtual event space</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For participants to engage, stay updated, join sessions and network</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Branded</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Your brand is the hero brand throughout the experience</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Speakers management</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Invite external speakers and automate speaker workflows</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Sessions, tracks and content</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Easily set up, manage and ensure they are current</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Invitee CRM</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Upload your list of invitees and send out</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Integrated emails</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Invitations, registration confirmations, reminders and post follow-ups</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Integrated session navigator</h3>
                        <p className='f-15 text-color mt-1 mb-3'>At the fingertip, participants have access to current schedule</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Participant profiles</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Rich profiles to participants discover each other and make connections</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Breakouts</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Upto 100 virtual breakout rooms and frictionless join experience</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>1:1 chat & video</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Before, during or after, participants can connect and engage with each other</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Green rooms, mission control</h3>
                        <p className='f-15 text-color mt-1 mb-3'>For event team, speakers and moderators to coordinate</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Salesforce integration</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Ensure your Salesforce instance automatically stays in sync</p>
                    </IonLabel>
                    <IonLabel className='subInfo'>
                        <h3 className='f-bold-18 text-color'>Powerful analytics</h3>
                        <p className='f-15 text-color mt-1 mb-3'>Gain access to performance metrics, trends and valuable insights</p>
                    </IonLabel>
                </IonRow>
            </section>
            {/* Footer */}
            <HomePageFooter />
        </IonContent>
    )
}

export default PlatformPage
