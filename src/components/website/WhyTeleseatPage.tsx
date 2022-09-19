/**
 * Home: Home page of App
 * Url: /home
 */

import React, { useRef, useState } from 'react'
import { throttle } from 'lodash'
import {
    IonContent, IonLabel, IonRow, IonCol
} from '@ionic/react'

/* css */
import './HomePage.scss'

/** Hooks */
//import {ImportScripts} from '../../hooks/import-hooks'

/* Components */
import PageProps from '../common/PageProps'
import HomePageFooter from './HomePageFooter'
import WhyTeleseatScrollNav, { TABS } from './WhyTeleseatScrollNav'
import TsMetaHeader from '../common/TsMetaHeader'

const HomePage: React.FC<PageProps> = (props) => {

    //ImportScripts('//js.hs-scripts.com/8279169.js')
    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)

    /** states */
    const [stickyNav, setStickyNav] = useState(false)
    const [active, setActive] = useState<string>(TABS.BETTER_EXPERIENCE.id)

    // Scroll Events
    const onClickScroll = async (tab = '') => {
        const current = pageContent.current
        const scrollElem = await current?.getScrollElement()
        const scrollTop = scrollElem?.scrollTop || 0
        const scrollElemTop = scrollElem?.getBoundingClientRect().top || 0
        const contentTop = document.querySelector(`#${tab}`)?.getBoundingClientRect().top || 0
        current?.scrollToPoint(0, contentTop - (scrollElemTop - scrollTop), 1000)
    }

    const onScroll = async () => {
        const headerSectionHeight = headerSection.current?.offsetHeight || 0
        const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
        setStickyNav(headerSectionHeight < scrollPosition)

        const containerRect = pageContent.current?.getBoundingClientRect()
        const betterTechnologyRect = document.querySelector(`#${TABS.BETTER_TECHNOLOGY.id}`)?.getBoundingClientRect()
        const moreEngagingRect = document.querySelector(`#${TABS.MORE_ENGAGING.id}`)?.getBoundingClientRect()
        const allInOneRect = document.querySelector(`#${TABS.ALL_IN_ONE.id}`)?.getBoundingClientRect()

        if ((betterTechnologyRect?.y || 0) - (containerRect?.y || 0) < 100) {
            setActive(TABS.BETTER_TECHNOLOGY.id)
        }
        else if ((moreEngagingRect?.y || 0) - (containerRect?.y || 0) < 100) {
            if ((betterTechnologyRect?.bottom || 0) - (containerRect?.bottom || 0) < 50) {
                setActive(TABS.BETTER_TECHNOLOGY.id)
            }
            else {
                setActive(TABS.MORE_ENGAGING.id)
            }
        }
        else if ((allInOneRect?.y || 0) - (containerRect?.y || 0) < 100) {
            if ((moreEngagingRect?.bottom || 0) - (containerRect?.bottom || 0) < 50) {
                setActive(TABS.MORE_ENGAGING.id)
            }
            else {
                setActive(TABS.ALL_IN_ONE.id)
            }
        }
        else {
            setActive(TABS.BETTER_EXPERIENCE.id)
        }

    }
    const throttleOnScroll = throttle(onScroll, 10)

    return (
        <>
            <IonRow className={`whyTeleseat--scrollNav ion-hide-md-down ${stickyNav ? 'drop' : ''}`}>
                <WhyTeleseatScrollNav active={active} onClickScroll={onClickScroll} className={!stickyNav ? 'hidden' : ''} />
            </IonRow>
            <IonContent className='whyTeleseat' ref={pageContent} onIonScroll={throttleOnScroll} scrollEvents>
                <TsMetaHeader
                    title='Why Teleseat'
                    description='Learn why Teleseat is the best choice as the modern platform for your webinars and virtual events'
                />
                {/* Splash Screen */}
                <section id='pageBanner' ref={headerSection} className='whyTeleseat--banner ts-screen'>
                    <IonRow className='homePage--row'>
                        <IonCol size='12' sizeMd='6' className='homePage--col'>
                            <IonLabel>
                                <h2 className='whyTeleseat--sectionTitle text-color'>One platform for your virtual events and webinars</h2>
                                <p className='f-medium-24 text-color mb-4'>Easy to use with everything you need for delightful experiences</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='5' offsetMd='1' className='homePage--col media'>
                            <img src='/assets/images/teleseat_join_the_movement.png'
                                srcSet='/assets/images/teleseat_join_the_movement@2x.png 2x, /assets/images/teleseat_join_the_movement@3x.png 3x'
                                className='homePage--headerImage' alt=''
                            />
                        </IonCol>
                    </IonRow>
                </section>
                <IonRow className={`whyTeleseat--scrollNav ion-hide-md-down ${!stickyNav ? 'drop' : ''}`}>
                    <WhyTeleseatScrollNav active={active} onClickScroll={onClickScroll} className={stickyNav ? 'hidden' : ''} />
                </IonRow>
                {/* Section: Better overall experience */}
                <section id={TABS.BETTER_EXPERIENCE.id} className='ts-screen column'>
                    <IonRow className='homePage--row'>
                        <IonCol className='homePage--col media my-4'>
                            <img src='/assets/images/teleseat_stellar_video.png'
                                srcSet='/assets/images/teleseat_stellar_video.png 2x, /assets/images/teleseat_stellar_video.png 3x'
                                className='section-image w-100 mx-auto' alt=''
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol className='whyTeleseat--titleCol my-5'>
                            <IonLabel className='f-medium-34 text-color'>Better overall experience</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/noApp.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>No app required</h3>
                                <p className='f-medium-13 text-medium'>Attendees don’t need to download any app. This takes away the friction and uncertainties with whether attendees have the right apps installed and working, and if their corporate policies allow for certain apps.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/realTime.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Real-time video streaming</h3>
                                <p className='f-medium-13 text-medium'>Unlike in other solutions where attendees experience videos delayed by up to 30 seconds, video stream on Teleseat is almost instantaneous (&lt;1 sec) which makes for great real-time engagement as if the event is happening live in-person.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/crispVideo.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Crisp video and audio</h3>
                                <p className='f-medium-13 text-medium'>Stellar quality of video and audio that attendees and the event team will notice and appreciate. Don’t take our word for it, give it a try.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/integrated.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Integrated experience</h3>
                                <p className='f-medium-13 text-medium'>Modern design and intuitive flows for participants and event team members to enjoy a seamless integrated experience throughout, without having to jump between disjointed tools, web pages and apps. </p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </section>
                {/* Section: All-in-one event platform */}
                <section id={TABS.ALL_IN_ONE.id} className='ts-screen column'>
                    <IonRow className='homePage--row'>
                        <IonCol className='homePage--col media mt-4'>
                            <img src='/assets/images/macbook-graphic.png'
                                srcSet='/assets/images/macbook-graphic@2x.png 2x, /assets/images/macbook-graphic@3x.png 3x'
                                className='section-image w-100 mx-auto' alt=''
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol className='whyTeleseat--titleCol mb-5'>
                            <IonLabel className='f-medium-34 text-color'>All-in-one event success platform for your superpowers</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/workflow.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Easiest to use event creation workflow </h3>
                                <p className='f-medium-13 text-medium'>In a matter of minutes, our self-guided workflow will let you create an event with sessions and speakers that you can publish for accepting registrations.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/eventPage.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Event page and integrated registrations</h3>
                                <p className='f-medium-13 text-medium'>An automatically generated, beautiful event page with built-in registration.  You can optionally choose to configure registration rules, such as which form fields to display, which emails domains to allow and so on.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/integratedEmails.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Integrated emails</h3>
                                <p className='f-medium-13 text-medium'>From registration confirmation with personalized join links to event reminders and post event follow-ups, the best practices emails are built into the platform so you don’t have to sweat about integrating a separate email automation tool.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/flexibleSessions.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Parallel and flexible sessions</h3>
                                <p className='f-medium-13 text-medium'>You are free to set up your sessions however you like, including having many of them run in parallel. All of the sessions are easily accessible to the participants through aTV-guide style sessions navigator, and they don’t have to jump back-n-forth between Zoom or another Video Conferencing app and your event session.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/contentManagement.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Content management</h3>
                                <p className='f-medium-13 text-medium'>The event team and the speakers can now easily collaborate on what materials to be made available to the attendees, including what can facilitate pre-event engagement.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/teamManagement.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Event team management</h3>
                                <p className='f-medium-13 text-medium'>A centralized place to manage all your team members, including organizers and speakers.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/recording.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Automatic high-quality recording</h3>
                                <p className='f-medium-13 text-medium'>Recordings are automatically done, unless you don’t  want to, and can be made available to the event team and attendees in as little as 30 minutes. Most other options take a day to provide recording.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/prePostRoll.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Pre and post-roll videos</h3>
                                <p className='f-medium-13 text-medium'>Be able to play recorded videos in sessions so attendees have an immersive content experience.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/branding.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Highly visible branding</h3>
                                <p className='f-medium-13 text-medium'>Your brand is what we believe should shine. Your logo and brand will be prominently displayed across the attendee experience touchpoints.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/powerfulAnalytics.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Powerful analytics</h3>
                                <p className='f-medium-13 text-medium'>Staying on top of your event metrics has never been easier. You’ll have access to highly informative real-time dashboards for traffic, registrations, live attendance, engagement, and much more. Each of the high-level metrics can be expanded to get to the details that help you gain more insights.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/engagement.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Engagement scores</h3>
                                <p className='f-medium-13 text-medium'>As part of the benefits of going digital, not only you get aggregated and detailed metrics, you will also see real-time engagement scores at various levels to help you make better decisions.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/crm.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>CRM integration</h3>
                                <p className='f-medium-13 text-medium'>With built-in integration with Salesforce, you and your revenue teams can see the impact of the events as well as orchestrate follow-ups.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/csvDownload.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>.csv Download</h3>
                                <p className='f-medium-13 text-medium'>Detailed records for registrations, live attendees etc are available to be downloaded so you can use them in your own ways.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/dyi.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>DYI and no code required</h3>
                                <p className='f-medium-13 text-medium'>Best of all, you can do it all by yourself without having to rely on developers or other help. We built Teleseat so you and your even team members have the superpowers to plan for and deliver awesome virtual events.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/onePlatform.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>One platform for your use cases</h3>
                                <p className='f-medium-13 text-medium'>Conferences, seminars, panels, webinars, customer and partner events, training, internal all-hands, quarterly business reviews, .. If it’s an event, you can do it on Teleseat. With all the tools, workflows and flexibility, you and your organization can settle on one platform so your customers, partners and employees can all benefit from one seamless and modern experience.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/manageEvents.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>A place to manage all your events</h3>
                                <p className='f-medium-13 text-medium'>Not just all your virtual events, Teleseat provides you the central digital space where you can plan for, manage and publish all your events.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </section>
                {/* Section: More ways to engage */}
                <section id={TABS.MORE_ENGAGING.id} className='ts-screen column'>
                    <IonRow className='homepage--row'>
                        <IonCol className='homePage--col media my-4'>
                            <img src='/assets/images/socials_graphic.png'
                                srcSet='/assets/images/socials_graphic@2x.png 2x, /assets/images/socials_graphic@3x.png 3x'
                                className='section-image w-100 mx-auto' alt=''
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol className='whyTeleseat--titleCol my-5'>
                            <IonLabel className='f-medium-34 text-color'>Say hello to more ways to engage</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/applause.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Applause, laugh and raise hand</h3>
                                <p className='f-medium-13 text-medium'>With real-time video, attendees are able to reach with applause and laugh just like in live physical events! These actions along with intelligent algorithms suitably simulate what one would also audibly experience in a physical event. Attendees can also raise their hand to speak and the event team can respond to such requests in an orderly fashion, just like one can in an in-person session like town halls or Q&A time after a presentation.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/virtualLobby.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Space for pre-event engagement</h3>
                                <p className='f-medium-13 text-medium'>Start engaging with participants weeks before the event in a built-in event space. Post polls, share announcements, feature videos and other materials, and engage with everyone in a slack-like chat.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </section>
                {/* Section: Better Technoloty */}
                <section id={TABS.BETTER_TECHNOLOGY.id} className='ts-screen column mb-5'>
                    <IonRow className='homepage--row'>
                        <IonCol className='homePage--col media my-4'>
                            <img src='/assets/images/socials_b_graphic.png'
                                srcSet='/assets/images/socials_b_graphic@2x.png 2x, /assets/images/socials_b_graphic@3x.png 3x'
                                className='section-image w-100 mx-auto' alt=''
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/socialEngagement.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Vibrant social engagement</h3>
                                <p className='f-medium-13 text-medium'>Events are first social venues, and Teleseat is built to foster that especially with the restrictions on physical events. All participants including attendees and events teams get to discover and engage with each other through rich profiles, automated recommendations and snap-in networking.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/richProfiles.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Rich profiles</h3>
                                <p className='f-medium-13 text-medium'>Whether it is a speaker presenting live on a session or participants engaging in the event space,  everyone throughout the event has the ability to present themselves in the best light, discover others and foster meaningful social connections.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/resource.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Resource boards</h3>
                                <p className='f-medium-13 text-medium'>In the sessions and in the event space, let attendees discover relevant content such as uploaded PDFs, video and website links on a beautifully presented resources board. Now, you will have deep content engagement and follow-ups, and the resource boards can be updated live during a session too.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/integratedPolls.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Integrated polls</h3>
                                <p className='f-medium-13 text-medium'>Polls are a great way to engage your audience before, during and after an event. So Teleseat provides you with robust poll features that are also easy to set up at any time, even during a live session, and have attendees engage with. </p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/chat.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Chat</h3>
                                <p className='f-medium-13 text-medium'>A modern Slack-like chat for attendees, speakers and the event team to express and interact. Emojis and reactions make it more social, while chat moderation controls make it easy to keep the communications appropriate for the event.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/q&a.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Q & A</h3>
                                <p className='f-medium-13 text-medium'>A separate Q&A channel allows attendees to ask questions, with added controls around who get to view the questions and their responses.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/promotedSpeakers.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Promoted speakers</h3>
                                <p className='f-medium-13 text-medium'>You’ll be able to promote any of the attendees to come live at any time. This makes it easy to bring attendees into live discussions as well as to run introductions in small formats.</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/recording.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Replays with recordings</h3>
                                <p className='f-medium-13 text-medium'>Not everyone can attend live, or you have an event that you want others to replay, perhaps for lead generation or for education.  Now you can, with recordings that are promptly made available in as little as 30 minutes.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol className='whyTeleseat--titleCol my-5'>
                            <IonLabel>
                                <h3 className='f-medium-34 text-color mt-4'>Teleseat is technically sound</h3>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/webrtc.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Standards-based with WebRTC</h3>
                                <p className='f-medium-13 text-medium'>WebRTC is supported native in most browsers (Chrome, Safari, Firefox, Edge), and will work through firewalls and in all geographies</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/infrastructure.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Robust and scalable backend infrastructure</h3>
                                <p className='f-medium-13 text-medium'>Highly scalable, GPU-based server infrastructure: dynamic server provisioning, automatic bitrate adjustments, high availability for video and database servers, etc.</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/combine.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Combines live and near-real-time streaming video</h3>
                                <p className='f-medium-13 text-medium'>WebRTC is supported native in most browsers (Chrome, Safari, Firefox, Edge), and will work through firewalls and in all geographies</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/secure.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Secure and safe</h3>
                                <p className='f-medium-13 text-medium'>End-to-end encryption, permission-based access control, secure recording and resource viewing, etc</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol className='whyTeleseat--titleCol my-5'>
                            <IonLabel>
                                <h3 className='f-medium-34 text-color mt-4'>Coming soon...</h3>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className='whyTeleseat--row'>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/ai.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>AI-powered networking</h3>
                                <p className='f-medium-13 text-medium'>Real-time recommendation systems for who to network with, semi-structured networking using matching algorithms</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='whyTeleseat--col my-3'>
                            <img src='/assets/images/infrastructure.svg' className='section-icon mb-4' alt='' />
                            <IonLabel className='whyTeleseat--label'>
                                <h3 className='f-medium-20 text-color'>Virtual background and automatic lighting adjustment</h3>
                                <p className='f-medium-13 text-medium'>High quality, GPU server based virtual background and automated lighting adjustments that does not depend on end-user devices</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </section>
                <HomePageFooter />
            </IonContent >
        </>
    )
}

export default HomePage