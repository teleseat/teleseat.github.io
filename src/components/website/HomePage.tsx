/**
 * Home: Home page of App
 * Url: /home
 */

import React, { useEffect, useRef } from 'react'
import {
    IonContent, IonLabel, IonRow, IonCol, IonChip, IonSlides, IonSlide, IonCard, IonCardContent
} from '@ionic/react'

/* css */
import './HomePage.scss'

/** Hooks */
//import {ImportScripts} from '../../hooks/import-hooks'

/* Components */
import HomePageFooter from './HomePageFooter'
import { APP_ROUTES } from '../app/Routes'
import TsMetaHeader from '../common/TsMetaHeader'
import { WebPagePropsType } from '../app/WebsiteTemplate'
import { useState } from 'react'

const MEETING_PRODUCTIVITIES = [
    {
        image: 'meetingProductivity-01',
        title: 'Meeting spaces for context and continuity',
        detail: 'Easily set up virtual spaces for 1:1s, team meetings, projects, all-hands, customers and partners engagements, Board, and more. Spaces provide the focal points for collaboration and keep all meetings, materials, workflows, and discussions in one place.',
    },
    {
        image: 'meetingProductivity-02',
        title: 'Meeting prep made simple',
        detail: 'In one place, teams can work off on the agenda, add meeting materials, and collaborate in advance with action items and messaging. All of the prep work is synced automatically into the live meeting.',
    },
    {
        image: 'meetingProductivity-03',
        title: 'All meeting content, consolidated & searchable',
        detail: 'No more spending cycles searching through calendar invites, emails, chat, document repositories, or wikis to find relevant meeting content and assets. It\'s all at your fingertips in your Teleseat meeting space — curated, organized, and searchable.',
    },
    {
        image: 'meetingProductivity-04',
        title: 'A resting place for your meetings',
        detail: 'Revisit and play back past meetings, access materials, transcripts, notes, action items, messages, and more. It\'s all persistent, organized, and shareable long after the meeting ends.',
    },
]

const DISTRIBUTED_WORKS = [
    // {
    //     image: 'distributedWork-01',
    //     title: 'Meeting workflows that work for everyone',
    //     detail: 'Keep collaborating before and long after the meeting ends. You and your team can continue to work within your meeting space, creating a central repository of all messages, materials, notes and action items. It’s all secure, easily accessible, searchable and shareable.',
    //     detail2: 'With all notes, action items and materials in one place, accountability is a no-brainer.',
    // },
    {
        image: 'distributedWork-02',
        title: 'Can\'t attend a meeting? No problem!',
        detail: 'With access to everything in one place, it\'s easy to catch up without missing a beat. And you can easily prepare for subsequent meetings without falling behind.',
    },
    {
        image: 'distributedWork-03',
        title: 'Every meeting size or type — one platform',
        detail: 'There\'s no need to have a separate video streaming or webinar software for large-scale meetings like all-hands, town halls, or virtual events. Teleseat is a unified platform for 1:1s to company events with up to thousands of attendees anywhere in the world.',
    },
]

const SAID_ABOUT = [
    {
        image: 'david-garcis-matterport.png',
        name: 'David Garcia',
        title: 'VP, FP&A at Matterport',
        quote: 'Teleseat is different from the video meeting tools. It is more like a holistic solution for the meeting process, end-to-end. It’s also a product with beautiful design aesthetics.',
    },
    {
        image: 'stephen-lee-treasure-data.png',
        name: 'Stephen Lee',
        title: 'SVP, Corporate Development at Treasure Data',
        quote: 'With Teleseat, it’s easier to have meetings with better collaborative workflows and outcomes. Having all of the meeting content, notes, follow-ups, and discussions in one place and neatly organized keeps everyone updated and productive.',
    },
    {
        image: 'dave-chiang-splunk.png',
        name: 'Dave Chiang',
        title: 'VP, Digital & eCommerce at Splunk',
        quote: 'I really like how Teleseat makes it easy to have everything in one place. No more fragmented sets of tools and manual work for consolidating them for a 360-view. Everything - the agenda, materials, notes, action items, recordings and so on - is easily accessible and searchable, which makes everyone more productive.',
    },
    {
        image: 'srikanth-chinmay-engati.png',
        name: 'Srikanth Chinmay',
        title: 'CEO at Engati',
        quote: 'With dispersed teams, it’s important that the knowledge captured in virtual meetings doesn\'t just disappear. I’m quite impressed with how Teleseat is solving this rather important problem and turning meeting interactions into valuable assets that every organization can benefit from, for the participants as well as the extended teams.',
    },
]

const HomePage: React.FC<WebPagePropsType> = (props) => {
    // const { setHeaderBG } = props;

    //ImportScripts('//js.hs-scripts.com/8279169.js')
    const pageContent = useRef<HTMLIonContentElement>(null)
    const headerSection = useRef<HTMLElement>(null)
    const featureSlidesRef = useRef<HTMLIonSlidesElement>(null)

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        featureSlidesRef.current?.slideTo(activeSlide)
    }, [activeSlide])

    const getSlideOpts = (num: number) => ({
        slidesPerView: num,
        speed: 500,
        spaceBetween: 45,
        allowTouchMove: false,
    })

    const getSlides = () => {
        return SAID_ABOUT.map((saidAbout, idx: number) => (
            <IonSlide key={idx} className='homePage--saidAbout-slideItem flex-col justify-between'>
                <div className='homePage--saidAbout-slideCard'>
                    <IonLabel className='homePage--saidAbout-quote flex align-start'>
                        <img src='/assets/images/homepage/quote.svg' className='saidAbout--quote mr-3' alt='quote' />
                        <p className='f-medium-18 text-color ion-text-left'>{saidAbout.quote}</p>
                    </IonLabel>
                    <IonRow className='homePage--saidAbout-profile w-100 mt-5'>
                        <img src={`/assets/images/homepage/${saidAbout.image}`} className='homePage--saidAbout-image mr-3' alt={saidAbout.name} />
                        <IonLabel className='ion-text-left'>
                            <h2 className='f-bold-16 text-color'>{saidAbout.name}</h2>
                            <p className='f-medium-15 text-soft mt-1'>{saidAbout.title}</p>
                        </IonLabel>
                    </IonRow>
                </div>
            </IonSlide>
        ))
    }

    // const onScroll = () => {
    //     const headerSectionHeight = headerSection.current?.offsetHeight || 0
    //     const scrollPosition = headerSection.current?.offsetParent?.scrollTop || 0
    //     setHeaderBG && setHeaderBG(headerSectionHeight > scrollPosition)
    // }

    return (
        // <IonContent className='homePage' ref={pageContent} onIonScroll={onScroll} scrollEvents>
        <IonContent className='homePage' ref={pageContent}>
            <TsMetaHeader
                title='Better Meeting Outcomes'
                description="Unlike standard video conferencing tools, Teleseat streamlines the structure and workflows of meetings and events so teams' productivity and decision-making are improved."
                image='/assets/images/homepage/integrated-video.png'
                url={`https://teleseat.com${APP_ROUTES.WEB_HOME}`}
            />
            {/* HomePage Hero */}
            <section ref={headerSection} className='homePage--hero'>
                <IonRow className='homePage--row'>
                    <IonCol size='12' sizeMd='6' className='homePage--col info'>
                        <IonLabel>
                            <h2 className='homePage--sectionTitle text-color'>Better Meeting Outcomes</h2>
                            <p className='homePage--sectionSubTitle mt-4 f-medium-18 text-medium'>Unlike standard video conferencing tools, Teleseat streamlines the structure and workflows of meetings and events so teams' productivity and decision-making are improved.</p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='homePage--col media pb-0'>
                        <img src='/assets/images/homepage/banner-hero.svg'
                            className='homePage--headerImage'
                            alt=''
                            title='Better Meeting Outcomes'
                        />
                    </IonCol>
                </IonRow>
            </section>
            {/* Section : MEETING COLLABORATION */}
            <section className='homePage--meetingProductivity flex-col'>
                <IonRow className='homePage--row w-100 mb-5'>
                    <IonCol size='12' className='homePage--meetingProductivity-detail p-0 flex flex-col align-center'>
                        <IonLabel className='ion-text-center w-100'>
                            <h2 className='homePage--sectionTitle text-color'>
                                Everything you need in one place
                            </h2>
                            <p className='homePage--sectionSubTitle f-medium-18 text-medium'>
                                Access meeting schedule, agendas, materials, video conferencing, messaging, participant profiles, notes, action items, recordings, transcripts, and more — before, during, and after meetings — all in one place. Gain productivity with every meeting, and you'll be surprised how much that adds up in a week and a month.
                            </p>
                        </IonLabel>
                        <img src={`/assets/images/homepage/meetingProductivity-main.png`}
                            srcSet={`/assets/images/homepage/meetingProductivity-main@2x.png 2x, /assets/images/homepage/meetingProductivity-main@3x.png 3x`}
                            alt='Meeting Collaboration'
                            className='homePage--image'
                        />
                    </IonCol>
                </IonRow>
                {MEETING_PRODUCTIVITIES.map((productivity) => (
                    <IonRow key={productivity.image} className='homePage--row contentRow w-100'>
                        <IonCol size='12' sizeMd='7'>
                            <img src={`/assets/images/homepage/${productivity.image}.png`}
                                srcSet={`/assets/images/homepage/${productivity.image}@2x.png 2x, /assets/images/homepage/${productivity.image}@3x.png 3x`}
                                alt={productivity.title}
                                className='homePage--contentImage'
                            />
                        </IonCol>
                        <IonCol offsetMd='1' size='12' sizeMd='4' className='flex align-center'>
                            <IonCol className='homePage--contentDetail'>
                                <h3 className='f-32 text-color'>{productivity.title}</h3>
                                <p className='f-medium-18 text-medium'>{productivity.detail}</p>
                            </IonCol>
                        </IonCol>
                    </IonRow>
                ))}
            </section>
            {/* Section : DISTRIBUTED WORK */}
            <section className='homePage--distributedWork flex-col'>
                <IonRow className='homePage--row w-100 mb-5'>
                    <IonCol size='12' className='p-0 flex flex-col align-center'>
                        <IonChip className='homePage--sectionChip'>DISTRIBUTED WORK</IonChip>
                    </IonCol>
                    <IonCol size='12' className='homePage--distributedWork-detail p-0 flex flex-col align-center'>
                        <IonLabel className='ion-text-center w-100'>
                            <h2 className='homePage--sectionTitle text-color'>
                                Virtual workspaces for staying in sync
                            </h2>
                            <p className='homePage--sectionSubTitle f-medium-18 text-medium'>
                                Team members, customers, and partners now have a single place to go for meeting workflows, live on-video meetings, retrieve meeting assets, revisit what was discussed, work off on action items, keep the conversations and engagement going, and bring others up to speed.
                            </p>
                        </IonLabel>
                        <img src={`/assets/images/homepage/distributedWork-main.png`}
                            srcSet={`/assets/images/homepage/distributedWork-main@2x.png 2x, /assets/images/homepage/distributedWork-main@3x.png 3x`}
                            alt='Distributed work'
                            className='homePage--image'
                        />
                    </IonCol>
                </IonRow>
                {DISTRIBUTED_WORKS.map((distributed) => (
                    <IonRow key={distributed.image} className='homePage--row contentRow w-100'>
                        <IonCol size='12' sizeMd='7'>
                            <img src={`/assets/images/homepage/${distributed.image}.png`}
                                srcSet={`/assets/images/homepage/${distributed.image}@2x.png 2x, /assets/images/homepage/${distributed.image}@3x.png 3x`}
                                alt={distributed.title}
                                className='homePage--contentImage'
                            />
                        </IonCol>
                        <IonCol offsetMd='1' size='12' sizeMd='4' className='flex align-center'>
                            <IonCol className='homePage--contentDetail'>
                                <h3 className='f-32 text-color'>{distributed.title}</h3>
                                <p className='f-medium-18 text-medium'>{distributed.detail}</p>
                            </IonCol>
                        </IonCol>
                    </IonRow>
                ))}
            </section>
            {/* Section : FORCE MULTIPLIER */}
            <section className='homePage--knowledgeRepo flex-col'>
                <IonRow className='homePage--row w-100'>
                    <IonCol size='12' className='p-0 flex flex-col align-center'>
                        <IonChip className='homePage--sectionChip'>FORCE MULTIPLIER</IonChip>
                    </IonCol>
                    <IonCol size='12' className='homePage--knowledgeRepo-detail p-0 flex flex-col align-center'>
                        <IonLabel className='ion-text-center w-100'>
                            <h2 className='homePage--sectionTitle text-color'>
                                Build on ideas and knowledge
                            </h2>
                            <p className='homePage--sectionSubTitle f-medium-18 text-medium'>
                                Don't let the ideas exchanged, knowledge shared, and content prepared for your meetings slip into oblivion when the video call ends. Teleseat saves and organizes everything in one place for everyone to benefit from and use for getting up to speed and keep building on them.
                            </p>
                        </IonLabel>
                        <img src={`/assets/images/homepage/knowledgeRepo.png`}
                            srcSet={`/assets/images/homepage/knowledgeRepo@2x.png 2x, /assets/images/homepage/knowledgeRepo@3x.png 3x`}
                            alt='Create a culture of learning with a vast knowledge repository'
                            className='homePage--image'
                        />
                    </IonCol>
                </IonRow>
            </section>
            {/* Section : Said about TeleSeat */}
            <section className='homePage--saidAbout flex-col'>
                <IonRow className='homePage--row w-100'>
                    <IonCol size='12' className='homePage--saidAbout-detail p-0'>
                        <IonLabel className='ion-text-center w-100'>
                            <h2 className='homePage--sectionTitle text-color'>Said about <span className='text-primary'>Teleseat</span></h2>
                        </IonLabel>
                        {/* <IonSlides
                            ref={featureSlidesRef}
                            options={getSlideOpts(2)}
                            className='homePage--saidAbout-slides w-100 mt-5'
                        >
                            {getSlides()}
                        </IonSlides> */}
                        <IonRow>
                            {SAID_ABOUT.map((saidAbout, idx: number) => (
                                <IonCol key={idx} sizeLg="6" size="12" className='homePage--saidAbout-item mt-4'>
                                    <IonCard className='homePage--saidAbout-card h-100'>
                                        <IonCardContent className='p-0 h-100 flex flex-col justify-between'>
                                            <IonLabel className='homePage--saidAbout-quote flex align-start'>
                                                <img src='/assets/images/homepage/quote.svg' className='saidAbout--quote mr-3' alt='quote' />
                                                <p className='f-medium-18 text-color ion-text-left'>{saidAbout.quote}</p>
                                            </IonLabel>
                                            <IonRow className='homePage--saidAbout-profile w-100 mt-5'>
                                                <img src={`/assets/images/homepage/${saidAbout.image}`} className='homePage--saidAbout-image mr-3' alt={saidAbout.name} />
                                                <IonLabel className='ion-text-left'>
                                                    <h2 className='f-bold-16 text-color'>{saidAbout.name}</h2>
                                                    <p className='f-medium-15 text-soft mt-1'>{saidAbout.title}</p>
                                                </IonLabel>
                                            </IonRow>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonCol>
                </IonRow>
            </section>
            {/* Section : ONE PLATFORM */}
            <section className='homePage--onePlatform flex-col'>
                <IonRow className='homePage--row onePlatformContent  w-100'>
                    <IonCol size='12' className='p-0 flex flex-col align-center'>
                        <IonChip className='homePage--sectionChip'>ONE PLATFORM</IonChip>
                    </IonCol>
                    <IonCol size='12' className='homePage--onePlatform-detail mb-5 p-0 flex flex-col align-center'>
                        <IonLabel className='ion-text-center mb-2 w-100'>
                            <h2 className='homePage--sectionTitle text-color'>
                                A single unified platform
                                <br className='ion-hide-md-down' />
                                <span> for video-enabled collaboration</span>
                            </h2>
                            <p className='homePage--sectionSubTitle f-medium-18 text-medium'>
                                Teleseat is a modern, scalable and reliable platform designed to break down the silos of single-purpose apps and provide an integrated solution for productivity and collaboration in meetings, workshops, and virtual events.
                            </p>
                        </IonLabel>
                    </IonCol>
                    <IonCol size='12' sizeMd='5'>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>All-in-one, including video conferencing</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                Teleseat unifies everything you need for productive and engaging meetings into one platform. Simplify meeting workflows end-to-end with scheduling, agenda,  materials, messaging, video conferencing, live-streaming, recording, transcription, action items, notes, integrated search and more, for unprecedented ease-of-use and value.
                            </p>
                        </IonLabel>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>Lightning-fast</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                With nothing to download, no versions to manage, and authentication securely expedited by Single Sign-on, attendees can join in the most frictionless way possible — in under a second.
                            </p>
                        </IonLabel>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>Express recording</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                Within minutes after a meeting ends, the recording is available for replay — no manual downloading, posting, notifying or sharing necessary.
                            </p>
                        </IonLabel>
                    </IonCol>
                    <IonCol offsetMd='2' size='12' sizeMd='5'>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>Flex and scalable</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                Plan, organize and run any type of meeting with ease and efficiency — 1:1s, staff meetings, stand-ups, QBRs, large-scale all-hands, training sessions, sales demos, customer webinars and more.
                            </p>
                        </IonLabel>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>Outstanding video playback quality</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                Ever tried screen-sharing videos such as YouTube or Vimeo videos? The quality is often poor, and the audio may not even work. Not in Teleseat. Delight your participants with an exceptional video playback experience.
                            </p>
                        </IonLabel>
                        <IonLabel className='onePlatformInfo my-4 w-100'>
                            <h2 className='f-24 text-color'>Integrated search</h2>
                            <p className='f-medium-18 text-medium mt-2 mb-5'>
                                Not only is all meeting content preserved and intuitively organized, Teleseat’s integrated search engine makes it fast and easy to find anything you need — recordings, notes, materials, chat messages and more with a few keystrokes.
                            </p>
                        </IonLabel>
                    </IonCol>
                </IonRow>
            </section>
            <img src='/assets/images/homepage/homepage-footer.svg'
                className='homePage--footerImage'
                alt=''
            />
            <HomePageFooter />
        </IonContent >
    )
}

export default HomePage
