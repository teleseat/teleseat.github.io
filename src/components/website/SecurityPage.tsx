/**
 * Security Page
 * Url: /service-level-terms
 */

import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { debounce, get, isArray, isEmpty, throttle } from 'lodash'
import {
    IonCol,
    IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow
} from '@ionic/react'
import Linkify from 'react-linkify'

/* css */
import './HomePage.scss'

/* Components */
import PageProps from '../common/PageProps'
import { APP_ROUTES } from '../app/Routes'

interface ContentType {
    node: 'p' | 'ul' | 'li'
    val: string | ContentType[]
}

interface ItemType {
    id: string
    title: string
    content: ContentType[]
}
const ITEMS:ItemType[] = [
    {
        id: 'information',
        title: 'Information Security Program',
        content: [
            { node: 'p', val: 'Teleseat employs information security policies and there is an executive-level commitment to implement and follow the policies throughout the organization.' },
            { node: 'p', val: 'The Information Security program is led by the CTO @ Teleseat.' },
        ]
    },
    {
        id: 'detailedReports',
        title: 'Detailed Reports',
        content: [
            { node: 'p', val: 'Please contact security@teleseat.com if you would like to review the full documentation, consisting of Customer Data Policy, Information Security Policy and Details, Vulnerability Test reports, and so on. In addition, Teleseat is able to fill out any questionnaire or information that customers may request.' },
        ]
    },
    {
        id: 'authentication',
        title: 'Authentication and Customer Data',
        content: [
            { node: 'p', val: 'Teleseat is a web-based application for video-based sessions in an enterprise that require structured workflows. Examples are: All-hands meetings, Training, New Employee on-boarding, external events and so on. Teleseat is a 100% SaaS application hosted on Google Cloud - it does not require any client download or on-premise installation.' },
            { node: 'p', val: 'Teleseat stores the following customer data in its cloud:' },
            { node: 'ul', val: [
                { node: 'li', val: 'Secure sign-in using Google Workplace (GSuite) is required for Enterprise use cases' },
                { node: 'li', val: 'For the external events use case, Google or Email/Password sign-in is required. In case of Email/Password, email verification is mandatorily used. Passwords are not stored on our system if using sign-in with Google' },
                { node: 'li', val: 'The following user data is stored (encrypted) on Google cloud: Email address, Name and Picture, obtained from Google sign-in. Chat messages and reactions during the sessions. This data is erased when the customer deletes the sessions, or leaves the platform' },
                { node: 'li', val: 'Videos are not recorded by default. If the customer turns recording on, the encrypted recording is stored on Amazon AWS S3 storage. The recording is only available to authenticated attendees for replay, or to session organizers for download. The recording is deleted when the customer deletes or restarts the sessions, or leaves the platform' },
                { node: 'li', val: 'Analytics about user interaction (sessions attended, engagement triggers) are stored in the cloud, and deleted when the customer deletes or restarts the sessions, or leaves the platform' },
                { node: 'li', val: 'The 3rd party video provider’s servers are geo-fenced to North America, and does not store any of the above data on its servers, and does not have access to the above user information' },
                { node: 'li', val: 'Other 3rd party providers (such as Email delivery) do not store any user information' },
            ]}
        ]
    },
    {
        id: 'encryption',
        title: 'Encryption',
        content: [
            { node: 'p', val: 'TLS 1.2 is enforced throughout all our services (no exception).' },
            { node: 'p', val: 'All production databases and customer data are encrypted at rest with AES-256' },
        ]
    },
    {
        id: 'gdpr',
        title: 'GDPR and Data Retention',
        content: [
            { node: 'p', val: 'Customers can delete all their data by sending an email to support@teleseat.com.' },
            { node: 'p', val: 'Customers can request all their data by sending an email to support@teleseat.com.' },
            { node: 'p', val: 'Once a user account is deleted, all associated data (account settings, etc.) are removed from Teleseat systems. This action is irreversible.' },
        ]
    },
    {
        id: 'dataAccess',
        title: 'Data Access and Segregation',
        content: [
            { node: 'p', val: 'Account data is gated at the application layer. Account data is not physically segregated at the database or storage layers.' },
            { node: 'p', val: 'By default, only our key engineering leads have access to customer data, and all roles and responsibilities are formally authorized, documented and regularly reviewed. All other engineers do not have access to customer data unless granted permission for debugging purposes.' },
        ]
    },
    {
        id: 'availability',
        title: 'Infrastructure Availability',
        content: [
            { node: 'p', val: 'Our backend infrastructure is entirely hosted on Google Cloud. It is fully automated and monitored by continuous functional tests to detect any downtime.' },
        ]
    },
    {
        id: 'production',
        title: 'Production and Datacenter Security',
        content: [
            { node: 'p', val: 'The Teleseat backend is entirely hosted on Google Cloud and leverages all the security benefits (physical security, key management, redundancy, scalability, etc) that Google Cloud provides. The IT infrastructure that Google Cloud provides to its customers is designed and managed in alignment with security best practices and a variety of IT security standards, including SOC 1/SSAE 16/ISAE 3402 • SOC 2 • SOC 3 • FISMA, DIACAP, and FedRAMP • DOD CSM Levels 1-5 • PCI DSS Level 1 • ISO 9001 / ISO 27001 • ITAR • FIPS 140-2 • MTCS Level 3.' },
            { node: 'p', val: 'In addition, the Teleseat backend is security-hardened by:' },
            { node: 'ul', val: [
                { node: 'li', val: 'Using the least privilege principle for limiting internal communication between its hosts' },
                { node: 'li', val: 'Using a VPC private network for communicating with the database instances' },
                { node: 'li', val: 'Closing all unused ports (including SSH) with Google Cloud’s built-in firewall' },
                { node: 'li', val: 'Only allowing HTTPS communication with Google Cloud’s most recommended TLS settings' },
                { node: 'li', val: 'Using best and modern practices for secure programming' },
            ]},
            { node: 'p', val: 'Teleseat Backend is leveraging Stripe for payments and therefore it doesn’t store credit cards.' },
        ]
    },
    {
        id: 'securityScans',
        title: 'Regular Penetration Tests and Security Scans',
        content: [
            { node: 'p', val: 'Teleseat Backend is regularly scanned with industry-standard scanning tools for monitoring and detecting vulnerabilities. In addition, we perform a thorough and detailed annual pentest using 3rd party pentest companies.' },
        ]
    },
    {
        id: 'disclosure',
        title: 'Responsible Disclosure',
        content: [
            { node: 'p', val: 'We consider the security of our systems a top priority. But no matter how much effort we put into system security, there can still be vulnerabilities present.' },
            { node: 'p', val: 'We encourage security researchers to work with us to mitigate and coordinate the disclosure of potential security vulnerabilities. If you discover a vulnerability, we would like to know about it so we can take steps to address it as quickly as possible. We would like to ask you to help us better protect our clients and our systems. Please email your findings to security@teleseat.com. Please do not take advantage of the vulnerability you have discovered, or reveal the problem to others until it has been resolved.' },
        ]
    },
    {
        id: 'awareness',
        title: 'Security Awareness Training for Teleseat Team',
        content: [
            { node: 'p', val: 'All members of our team go through an annual Security Awareness Training. A formal sign-up and completion sheet is maintained.' },
        ]
    },
    {
        id: 'contact',
        title: 'Contact',
        content: [
            { node: 'p', val: 'If you have any questions about this doc please contact us at:' },
            { node: 'p', val: 'security@teleseat.com' },
        ]
    },
]

const SecurityPage: React.FC<PageProps> = (props) => {
    const contentRef = useRef<HTMLIonContentElement>(null)

    const [clickEventInvoked, setClickEventInvoked] = useState(false)
    const [currentContent, setCurrentContent] = useState(ITEMS[0].id)
    const [offsets, setOffsets] = useState<Record<string, number>>({})

    useEffect(() => {
        processOffsets()
    }, [])

    const processOffsets = () => {
        const obj:Record<string, number> = {}
        ITEMS.forEach((item:ItemType) => {
            const section:HTMLElement | null = document.querySelector(`#${item.id}`)
            if ( section?.offsetTop ) {
                obj[item.id] = section.offsetTop
            }
        })
        if (isEmpty(obj)) {
            setTimeout(processOffsets, 100)
        }
        else {
            setOffsets(obj)
        }
    }

    const onClickNav = (itemId:string) => {
        setClickEventInvoked(true)
        setCurrentContent(itemId)
        const section:HTMLElement | null = document.querySelector(`#${ITEMS[0].id}`)
        const scrollPosition = section?.offsetParent?.scrollTop || 0
        const y = offsets[itemId] - scrollPosition
        contentRef.current?.scrollByPoint(0, (y), 500)
        setTimeout(() => {
            setClickEventInvoked(false)
        }, 500)
    }

    const onScroll = () => {
        if (!clickEventInvoked) {
            contentRef.current?.getScrollElement().then((elem) => {
                const section:HTMLElement | null = document.querySelector(`#${ITEMS[0].id}`)
                const scrollPosition = section?.offsetParent?.scrollTop || 0
                ITEMS.some((item, i) => {
                    if (i === (ITEMS.length + 1)) {
                        setCurrentContent(ITEMS[i].id)
                        return true;
                    }
                    else if (i === 0) {
                        if( scrollPosition < offsets[ITEMS[i+1].id] ) {
                            setCurrentContent(ITEMS[i].id)
                            return true;
                        }
                    }
                    else {
                        if( scrollPosition >= offsets[ITEMS[i].id] && scrollPosition < (offsets[ITEMS[i+1].id] - 15) ) {
                            setCurrentContent(ITEMS[i].id)
                            return true;
                        }
                    }
                    return false
                })
            })
        }
    }

    return (

        <IonGrid id='securityPage' fixed className='ion-no-padding security'>
            <Helmet>
                <title>Teleseat Security</title>
                <meta name='description' content='Teleseat employs information security policies and there is an executive-level commitment to implement and follow the policies throughout the organization. The Information Security program is led by the CTO @ Teleseat.' />
                <link rel='canonical' href={`${APP_ROUTES.TELESEAT}${APP_ROUTES.SECURITY}`}/>
            </Helmet>
            <IonRow className='homePage--row security--contentRow pt-4 pb-5'>
                <IonCol size='4' className='security-navCol ion-hide-md-down'>
                    <IonList className='security--navList'>
                        {ITEMS.map((item:ItemType, idx: number) => (
                            <IonItem
                                key={`nav${idx}`}
                                onClick={() => onClickNav(item.id)}
                                lines='none'
                                className={`security--navItem ${currentContent === item.id ? 'active' : ''}`}
                                button
                                detail={false}
                            >
                                <IonLabel className={`f-medium-15 ion-text-wrap ion-no-margin ${currentContent === item.id ? 'text-primary' : 'text-medium'}`}>{item.title}</IonLabel>
                            </IonItem>
                        ))}
                    </IonList>
                </IonCol>
                <IonCol size='12' sizeMd='8' className='security-contentCol'>
                    <IonContent ref={contentRef} onIonScroll={throttle(onScroll, 500)} scrollEvents>
                        <IonLabel key='pageTitle'>
                            <h1 className='f-bold-24 text-color'>Teleseat Security</h1>
                        </IonLabel>
                        {ITEMS.map((item:ItemType, j:number) => (
                            <section
                                key={`section${j}`}
                                id={item.id}
                                className='security--section'
                            >
                                <IonLabel>
                                    <h2 key={`section${j}_title`} className='security--sectionTitle f-bold-20 text-color mt-4'>{item.title}</h2>
                                    {item.content.map((content: ContentType, i: number) => (
                                        <ContentRenderer content={content} idx={`section${j}_${i}`} />
                                    ))}
                                </IonLabel>
                            </section>
                        ))}
                    </IonContent>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default SecurityPage

const ContentRenderer: React.FC<{content: ContentType, idx: string}> = (props) => {
    const idx = get(props, 'idx', '')
    const node = get(props, 'content.node', 'p')
    const val = get(props, 'content.val', '')
    switch (node) {
        case 'ul': {
            return (
                <ul key={idx}>
                    {isArray(val) ? (
                        <>
                            {val.map((child: ContentType, i: number) => (
                                <ContentRenderer content={child} idx={`${idx}_${i}`} />
                            ))}
                        </>
                    ):(
                        <ContentRenderer content={val} idx={`${idx}_child`} />
                    )}
                </ul>
            )
        }
        case 'li': {
            return (
                <li className='f-20 text-color mt-3' key={idx}><Linkify>{val}</Linkify></li>
            )
        }
        default: {
            return (
                <p className='f-20 text-color mt-3' key={idx}><Linkify>{val}</Linkify></p>
            )
        }
    }
}