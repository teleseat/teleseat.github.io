/**
 * Privacy page
 * Url: /privacy
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import {
    IonContent, IonLabel, IonRow
} from '@ionic/react'

/* css */
import '../HomePage.scss'

/* Components */
import PageProps from '../../common/PageProps'
import { APP_ROUTES } from '../../app/Routes'

const PrivacyPage: React.FC<PageProps> = (props) => {

    return (
        <IonContent id='privacyPage'  className='terms'>
            <Helmet>
                <title>Telseat Privacy Policy</title>
                <meta name='description' content='Learn about our commitment to privacy' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.PRIVACY}`}/>
            </Helmet>
            <IonRow className='homePage--row mt-5'>
                <IonLabel>
                    <h1 className='f-bold-40 text-color mt-4' >Privacy Notice</h1>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row mt-4 mb-5'>
                <IonLabel>
                    <h4 className='f-medium-15 text-color'>Last updated February 25, 2021</h4>
                    <p className='f-15 text-medium mt-5'>
                        Thank you for choosing to be part of our community at Teleseat Inc. ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href='mailto:contact@teleseat.com'>contact@teleseat.com</a>.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        When you visit our website <a href='https://teleseat.com' target='_blank' rel='noopener noreferrer'>https://teleseat.com</a>(the "<strong>Website</strong>"), and more generally, use any of our services (the "<strong>Services</strong>", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
                    </p>
                    <h4 className='f-medium-15 text-color mt-4'>
                        WHAT THIS PRIVACY NOTICE COVERS
                    </h4>
                    <p className='f-15 text-medium mt-3'>
                        This Privacy Notice applies to personal data that we collect, use, and share as a data controller. When the Company is the data controller, we control the means and purposes of the personal data we process. If you are using the Services through an account holder, such as your employer or in response to an invitation, the organization that is the account holder is the data controller of personal data that we process when you use the Services and your personal data is subject to its privacy policies.
                    </p>
                    <p className='f-15 text-medium mt-3'>
                        If you are a user participating in a meeting or event on the Services, the meeting host will control any meeting recordings or files shared during the meeting. Such materials will be subject to the host’s corporate policies regarding access, use, deletion, preservation, and export of information. The meeting host has the option to record meetings, which may be shared with others or subject to disclosure in a legal proceeding. The Company has no control over, and is not responsible or liable for the privacy of any information that you share with others while using the Services. Even after information is removed from our platform, copies of that information may still reside elsewhere if it has been shared with others.
                    </p>
                    <h3 className='f-bold-18 text-color mt-5'>TABLE OF CONTENTS</h3>
                    <ul className='list'>
                        <li className='f-15 text-color'>1. WHAT INFORMATION DO WE COLLECT?</li>
                        <li className='f-15 text-color'>2. HOW DO WE USE YOUR INFORMATION?</li>
                        <li className='f-15 text-color'>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                        <li className='f-15 text-color'>4. WHO ARE OUR SERVICE PROVIDERS (SUB-PROCESSORS)?</li>
                        <li className='f-15 text-color'>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                        <li className='f-15 text-color'>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                        <li className='f-15 text-color'>7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
                        <li className='f-15 text-color'>8. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                        <li className='f-15 text-color'>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                        <li className='f-15 text-color'>10. WHAT ARE YOUR PRIVACY RIGHTS?</li>
                        <li className='f-15 text-color'>11. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                        <li className='f-15 text-color'>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                        <li className='f-15 text-color'>13. DO WE MAKE UPDATES TO THIS NOTICE?</li>
                        <li className='f-15 text-color'>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                        <li className='f-15 text-color'>15. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                    </ul>
                    <div id='article1'>
                        <h3 className='f-bold-18 text-color mt-5'>1. WHAT INFORMATION DO WE COLLECT?</h3>
                        <h4 className='f-medium-15 text-color mt-4'>Personal information you disclose to us</h4>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We collect personal information that you provide to us.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as by posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Personal Information Provided by You.</strong> We collect names; email addresses; job titles; passwords; contact preferences; profile picture; company / organization; about description; interests; social urls (linkedin, facebook, twitter); contact or authentication data; and other similar information.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: <a href='https://stripe.com/privacy' target='_blank' rel='noopener noreferrer'>https://stripe.com/privacy</a>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called "<strong>HOW DO WE HANDLE YOUR SOCIAL LOGINS</strong>" below.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
                        </p>
                        <h4 className='f-medium-15 text-color mt-4'>Information automatically collected</h4>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Like many businesses, we also collect information through cookies and similar technologies.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            The information we collect includes:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                <i>Log and Usage Data.</i> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <i>Device Data.</i> We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <i>Location Data.</i> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Website. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
                            </li>
                        </ul>
                    </div>
                    <div id='article2'>
                        <h3 className='f-bold-18 text-color mt-5'>1. HOW DO WE USE YOUR INFORMATION?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We use the information we collect or receive:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "<strong>HOW DO WE HANDLE YOUR SOCIAL LOGINS</strong>" for further information.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at sri@teleseat.com and be sure to include your name, testimonial location, and contact information.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user's consent.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To manage user accounts.</strong> We may use your information for the purposes of managing our account and keeping it in working order.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To protect our Services.</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</strong>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To respond to legal requests and prevent harm.</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to invite you to meetings and events, and to provide you with the requested services.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "<strong>WHAT ARE YOUR PRIVACY RIGHTS</strong>" below).
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
                            </li>
                        </ul>
                    </div>
                    <div id='article3'>
                        <h3 className='f-bold-18 text-color mt-5'>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may process or share your data that we hold based on the following legal basis:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            More specifically, we may need to process your data or share your personal information in the following situations:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Website, which will enable them to collect data on our behalf about how you interact with our Website over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes. We have contracts in place with our data processors, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions or other content to the Website) or otherwise interact with public areas of the Website, such personal information may be viewed by all users and may be publicly made available outside the Website in perpetuity. If you interact with other users of our Website and register for our Website through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Website, and view your profile.
                            </li>
                        </ul>
                    </div>
                    <div id='article4'>
                        <h3 className='f-bold-18 text-color mt-5'>4. WHO ARE OUR SERVICE PROVIDERS (SUB-PROCESSORS)?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We only share information with the following third parties.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We share and disclose your information with the following third party service providers (sub-processors). We have categorized each party so that you may be easily understand our processing practices.
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Cloud Computing Services</strong>
                                <p>Google Cloud Platform</p>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Content Optimization</strong>
                                <p>Google Site Search</p>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Invoice and Billing</strong>
                                <p>Stripe</p>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>User Account Registration and Authentication</strong>
                                <p>Google Sign-In, Facebook Login and LinkedIn OAuth 2.0</p>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Web and Mobile Analytics</strong>
                                <p>Google Analytics</p>
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                <strong>Event Organizers using our Virtual Events platform</strong>
                                <p>Participant information</p>
                            </li>
                        </ul>
                    </div>
                    <div id='article5'>
                        <h3 className='f-bold-18 text-color mt-5'>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We may use cookies and other tracking technologies to collect and store your information.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>
                    </div>
                    <div id='article6'>
                        <h3 className='f-bold-18 text-color mt-5'>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS? </h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Our Website offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Website. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
                        </p>
                    </div>
                    <div id='article7'>
                        <h3 className='f-bold-18 text-color mt-5'>7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We may transfer, store, and process your information in countries other than your own.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Our servers are located in United States. If you are accessing our Website from outside United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "<strong>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong>" above), in United States, and other countries.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are a resident in the European Economic Area, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            European Commission's Standard Contractual Clauses:
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.
                        </p>
                    </div>
                    <div id='article8'>
                        <h3 className='f-bold-18 text-color mt-5'>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Subject to the policies of the account holder, such as your employer, authorized users may be able to delete user-generated content such as meeting recordings, chat messages, and uploaded documents.
                        </p>
                    </div>
                    <div id='article9'>
                        <h3 className='f-bold-18 text-color mt-5'>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>We aim to protect your personal information through a system of organizational and technical security measures.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
                        </p>
                    </div>
                    <div id='article10'>
                        <h3 className='f-bold-18 text-color mt-5'>10. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the <strong>contact details </strong>provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are a user and another organization, such as your employer or the entity inviting you to a meeting or event on the Services, is the data controller, we may redirect you to that entity for a response to your data request.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled "<strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>". Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href='http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm' target='_blank' rel='noopener noreferrer'>http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <a href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank' rel='noopener noreferrer'>https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you have questions or comments about your privacy rights, you may email us at <a href='mailto:contact@teleseat.com'>contact@teleseat.com</a>.
                        </p>
                        <h4 className='f-medium-15 text-color mt-4'>Account Information</h4>
                        <p className='f-15 text-medium mt-3'>
                            If you would at any time like to review or change the information in your account or terminate your account, you can:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                Log in to your account settings and update your user account.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit <a href='http://www.aboutads.info/choices/' target='_blank' rel='noopener noreferrer'>http://www.aboutads.info/choices/</a>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                Access your account settings and update your preferences.
                            </li>
                        </ul>
                    </div>
                    <div id='article11'>
                        <h3 className='f-bold-18 text-color mt-5'>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
                        <p className='f-15 text-medium mt-3'>
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                        </p>
                    </div>
                    <div id='article12'>
                        <h3 className='f-bold-18 text-color mt-5'>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                        </p>
                        <h4 className='f-medium-15 text-color mt-4'>CCPA Privacy Notice</h4>
                        <p className='f-15 text-medium mt-3'>
                            The California Code of Regulations defines a "resident" as:
                        </p>
                        <ol>
                            <li className='f-15 text-medium mt-3'>
                                every individual who is in the State of California for other than a temporary or transitory purpose and
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                            </li>
                        </ol>
                        <p className='f-15 text-medium mt-3'>
                            All other individuals are defined as "non-residents."
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>What categories of personal information do we collect?</strong>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We have collected the following categories of personal information in the past twelve (12) months:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th className='f-15 text-medium mt-3'><strong>Category</strong></th>
                                    <th className='f-15 text-medium mt-3'><strong>Examples</strong></th>
                                    <th className='f-15 text-medium mt-3'><strong>Collected</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>A. Identifiers</td>
                                    <td className='f-15 text-medium mt-3'>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</td>
                                    <td className='f-15 text-medium mt-3'>YES</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>B. Personal information categories listed in the California Customer Records statute</td>
                                    <td className='f-15 text-medium mt-3'>Name, contact information, education, employment, employment history and financial information</td>
                                    <td className='f-15 text-medium mt-3'>YES</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>C. Protected classification characteristics under California or federal law</td>
                                    <td className='f-15 text-medium mt-3'>Gender and date of birth</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>D. Commercial information</td>
                                    <td className='f-15 text-medium mt-3'>Transaction information, purchase history, financial details and payment information</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>E. Biometric information</td>
                                    <td className='f-15 text-medium mt-3'>Fingerprints and voiceprints</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>F. Internet or other similar network activity</td>
                                    <td className='f-15 text-medium mt-3'>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>G. Geolocation data</td>
                                    <td className='f-15 text-medium mt-3'>Device location</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                                    <td className='f-15 text-medium mt-3'>Images and audio, video or call recordings created in connection with our business activities</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>I. Professional or employment-related information</td>
                                    <td className='f-15 text-medium mt-3'>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>J. Education Information</td>
                                    <td className='f-15 text-medium mt-3'>Student records and directory information</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                                <tr>
                                    <td className='f-15 text-medium mt-3'>K. Inferences drawn from other personal information</td>
                                    <td className='f-15 text-medium mt-3'>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                    <td className='f-15 text-medium mt-3'>NO</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='f-15 text-medium mt-3'>
                            We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                Receiving help through our customer support channels;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                Participation in customer surveys or contests; and
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                Facilitation in the delivery of our Services and to respond to your inquiries.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            <strong>How do we use and share your personal information?</strong>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            More information about our data collection and sharing practices can be found in this privacy notice.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            You may contact us by email at contact@teleseat.com, or by referring to the contact details at the bottom of this document.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Will your information be shared with anyone else?</strong>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may share your personal information as described in this Privacy Notice under <strong>"HOW WILL YOUR INFORMATION BE SHARED"</strong>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            The current list of our service providers can be found under <strong>"WHO ARE OUR SERVICE PROVIDERS (SUB-PROCESSORS)"</strong>.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Teleseat Inc. has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history and financial information.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            <strong>Your rights with respect to your personal data</strong>
                        </p>
                        <p className='f-15 text-medium mt-3 underline'>
                            Right to request deletion of the data - Request to delete
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.
                        </p>
                        <p className='f-15 text-medium mt-3 underline'>
                            Right to be informed - Request to know
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Depending on the circumstances, you have a right to know:
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                whether we collect and use your personal information;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the categories of personal information that we collect;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the purposes for which the collected personal information is used;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                whether we sell your personal information to third parties;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the categories of personal information that we sold or disclosed for a business purpose;
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the business or commercial purpose for collecting or selling personal information.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                the business or commercial purpose for collecting or selling personal information.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                        </p>
                        <p className='f-15 text-medium mt-3 underline'>
                            Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We will not discriminate against you if you exercise your privacy rights.
                        </p>
                        <p className='f-15 text-medium mt-3 underline'>
                            Verification process
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                        </p>
                        <p className='f-15 text-medium mt-3 underline'>
                            Other privacy rights
                        </p>
                        <ul>
                            <li className='f-15 text-medium mt-3'>
                                you may object to the processing of your personal data
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
                            </li>
                            <li className='f-15 text-medium mt-3'>
                                you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
                            </li>
                        </ul>
                        <p className='f-15 text-medium mt-3'>
                            To exercise these rights, you can contact us by email at contact@teleseat.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            If you are a user and another organization, such as your employer or the entity inviting you to a meeting or event on the Services, is the data controller, we may redirect you to that entity for a response to your data request.
                        </p>
                    </div>
                    <div id='article13'>
                        <h3 className='f-bold-18 text-color mt-5'>13. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
                        <p className='f-15 text-medium mt-3'>
                            <strong>In Short:</strong> <i>Yes, we will update this notice as necessary to stay compliant with relevant laws.</i>
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                        </p>
                    </div>
                    <div id='article14'>
                        <h3 className='f-bold-18 text-color mt-5'>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
                        <p className='f-15 text-medium mt-3'>
                            If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO), Sri Subramaniam, by email at <a href='mailto:sri@teleseat.com'>sri@teleseat.com</a>, by phone at <a href='tel:14088390188'>(408) 839-0188</a>, or by post to:
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            Teleseat Inc.<br />
                            Sri Subramaniam<br />
                            4125 Hopyard Rd<br />
                            Suite 225<br />
                            Pleasanton, CA 94588<br />
                            United States
                        </p>
                    </div>
                    <div id='article14'>
                        <h3 className='f-bold-18 text-color mt-5'>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
                        <p className='f-15 text-medium mt-3'>
                            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit: <a href='https://teleseat.com' target='_blank' rel='noopener noreferrer'>https://teleseat.com</a>. We will respond to your request within 30 days.
                        </p>
                        <p className='f-15 text-medium mt-3'>
                            This privacy policy was created using <a href='https://termly.io/products/privacy-policy-generator/?ftseo' target='_blank' rel='noopener noreferrer'>Termly’s Privacy Policy Generator</a>.
                        </p>
                    </div>
                </IonLabel>
            </IonRow>
        </IonContent>
    )
}

export default PrivacyPage
