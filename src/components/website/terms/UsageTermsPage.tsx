/**
 * Usage Terms Page
 * Url: /usage-terms
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

const UsageTermsPage: React.FC<PageProps> = (props) => {
    return (
        <IonContent id='usageTermsPage' className='terms'>
            <Helmet>
                <title>Teleseat Usage Terms</title>
                <meta name='description' content='Learn about Teleseat usage terms' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.USAGE_TERMS}`}/>
            </Helmet>
            <IonRow className='homePage--row mt-5'>
                <IonLabel>
                    <h1 className='f-bold-40 text-color mt-4'>USAGE TERMS</h1>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row mt-4 mb-5'>
                <IonLabel>
                    <h4 className='f-medium-15 text-color'>Last updated February 14, 2021</h4>
                    <p className='f-15 text-color mt-5'>
                        These <strong>"Usage Terms"</strong> describe the terms applicable to your use of the Teleseat service (the <strong>"Service"</strong>) provided by Teleseat Inc.(<strong>"Teleseat"</strong>) to you through the Teleseat Internet web site.  The term <strong>"you"</strong> (and <strong>"your"</strong>) means you, individually, or (if you are acting on behalf of your company or another organization) the entity you represent.
                    </p>
                    <h3 className='f-bold-16 text-color mt-3'>By using the Service or by clicking to accept or agree to these Usage Terms when this option is made available to you, you accept and agree to be bound and abide by these Usage Terms.  Your use of the Service is conditioned on and subject to your compliance with theses Usage Terms.  If you do not agree with these Usage Terms, do not use the Service.</h3>

                    <h2 className='f-bold-16 text-color mt-4'>1. Registration Information.</h2>
                    <p className='f-15 text-color mt-3'>You may be required to provide information about yourself in order to register for and/or use the Service. You agree to keep such information current and accurate. If you are asked to choose a user name and password, you are entirely responsible for maintaining the security of your user name and password and agree not to disclose such to any third party.</p>

                    <h2 className='f-bold-16 text-color mt-4'>2. Eligibility.</h2>
                    <p className='f-15 text-color mt-3'>You affirm that you are at least 18 years of age and are otherwise fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Usage Terms, and to abide by and comply with these Usage Terms .  Your access may be terminated without warning if we believe that you are under the age of 18 or are otherwise ineligible. Use of the Service is void where prohibited by applicable law.</p>

                    <h2 className='f-bold-16 text-color mt-4'>3. Privacy.</h2>
                    <p className='f-15 text-color mt-3'>You agree to the Teleseat <strong>"Privacy Policy"</strong> located at <a href='https://teleseat.com/privacy' target='_blank' rel='noopener noreferrer'>https://teleseat.com/privacy</a>  (the <strong>"Privacy Policy"</strong>). Teleseat may amend the Privacy Policy from time to time, as set forth therein.  You will be deemed to have agreed to such amendments as set forth in the Privacy Policy. Teleseat may access your Content (defined below) and your personally identifiable information, in connection with monitoring the Service for technical performance, to respond to service or technical problems, to plan for service upgrades or enhancements, or as otherwise stated in the Privacy Policy.</p>

                    <h2 className='f-bold-16 text-color mt-4'>4. Intended Use.</h2>
                    <p className='f-15 text-color mt-3'>The Service is intended for business use. You may choose to use the Services for other purposes, subject to the terms and limitations of these Usage Terms.</p>

                    <h2 className='f-bold-16 text-color mt-4'>5. Your Content.</h2>
                    <p className='f-15 text-color mt-3'>You agree that you are solely responsible for the content sent or transmitted by you or displayed or uploaded by you when using the Service, including all recordings of Sessions (<strong>"Content"</strong>).  You also agree that you are responsible for compliance with all laws pertaining to the Content, including, but not limited to, laws requiring you to obtain the consent of a third party to use the Content and to provide appropriate notices of third party rights. You represent and warrant that you have the right to upload the Content to Teleseat and that such use does not violate or infringe on any rights of any third party. Under no circumstances will Teleseat be liable in any way for any (a) Content that is transmitted or viewed while using the Service, (b) errors or omissions in the Content, or (c) any loss or damage of any kind incurred as a result of the use of, access to, or denial of access to, Content. Although Teleseat is not responsible for any Content, Teleseat may delete any Content, at any time without notice to you, if Teleseat becomes aware that it violates any provision of these Usage Terms or any law. You retain copyright and any other rights you already hold in Content which you submit, post or display on or through, the Service.</p>

                    <h2 className='f-bold-16 text-color mt-4'>6. Recordings.</h2>
                    <p className='f-15 text-color mt-3'>The Service includes the ability for the host to choose to record meetings and other virtual events held using the Service (<strong>"Sessions"</strong>). You are responsible for compliance will all recording laws. By using the Service, you are giving Teleseat consent to store recordings for any or all Sessions that you join, if such recordings are stored in the Teleseat systems. All Sessions are automatically recorded, unless you are notified otherwise. If you do not consent to being recorded, you can choose to leave the Session.</p>

                    <h2 className='f-bold-16 text-color mt-4'>7. Prohibited Uses of the Service.</h2>
                    <p className='f-15 text-color mt-3'>You agree that you will not use the Service: (a) to directly or indirectly modify, disassemble, decompile, prepare derivative works of, reverse engineer or otherwise attempt to gain access to the source code of the Service, except to the extent expressly permitted by applicable law notwithstanding this restriction; (b) to attempt to gain unauthorized access to, or disrupt the integrity or performance of, the Service or the data contained therein; (c) in a way that, knowingly or negligently, abuses, interferes with, disables, disrupts or overburdens Teleseat’s networks (or any servers or networks connected to the Service or Teleseat’s security systems), your account, or the Service, such as with a denial of service (DOS) or a distributed denial of service (DDoS) attack; (d) to intercept or monitor, damage or modify any communication which is not intended for you; (e) to engage in activity that is illegal, fraudulent, false, or misleading; (f) to collect or harvest any personally identifiable information, including account names, from the Service; (g) to build or benchmark a competitive product or service, or copy any features, functions or interface of the Service; or (h) in violation of any Teleseat policy or in a manner that violates applicable law, including but not limited to anti-spam, export control, privacy, and anti-terrorism laws and regulations and laws requiring the consent of subjects of audio and video recordings. You agree that you are solely responsible for your compliance with all such laws and regulations.</p>

                    <h2 className='f-bold-16 text-color mt-4'>8. Prohibited Materials.</h2>
                    <p className='f-15 text-color mt-3'>You agree that you will not use the Service to: (a) transmit through the Service any material that may infringe the intellectual property or other rights of third parties; or (b) use the Service to communicate or expose any third party to material which is offensive, harmful to minors, indecent, harassing, libelous, threatening, obscene, or is otherwise unlawful, that would give rise to civil liability, or that constitutes or encourages conduct that could constitute a criminal offense, under any applicable law or regulation; (c) use the Service to embarrass, threaten, harass or invade the privacy of, any third party; or (d) upload or transmit any software, Content or code that does or is intended to harm, disable, destroy or adversely affect performance of the Service in any way or which does or is intended to harm or extract information or data from other hardware, software or networks of Teleseat or other users of Service.</p>

                    <h2 className='f-bold-16 text-color mt-4'>9. Feedback.</h2>
                    <p className='f-15 text-color mt-3'>If you notify Teleseat of any bugs or errors that Customer identifies in the Service or otherwise provide suggestions, comments, and other feedback (individually and collectively, <strong>"Feedback"</strong>), then you grant Teleseat a perpetual, irrevocable, royalty-free, sublicensable, and transferable license to use and exploit the Feedback.</p>

                    <h2 className='f-bold-16 text-color mt-4'>10. Proprietary Rights.</h2>
                    <p className='f-15 text-color mt-3'>Teleseat and/or its suppliers, as applicable, retain ownership of all proprietary rights in the Service and in all trade names, trademarks, service marks, logos, and domain names ("Trademarks") associated or displayed with the Service. You may not frame or use framing techniques to enclose any Trademarks, or other proprietary information (including images, text, page layout, or form) of Teleseat, without its express written consent. You may not use any meta tags or any other "hidden text" using Trademarks without Teleseat’s express written consent. You may not reproduce, resell, or distribute the Service or any reports or data generated by the Service for any purpose.</p>

                    <h2 className='f-bold-16 text-color mt-4'>11. Copyright Infringement.</h2>
                    <p className='f-15 text-color mt-3'>If you believe that your copyright has been infringed, please notify Teleseat as specified here: <a href='https://teleseat.com/copyright-policy' target='_blank' rel='noopener noreferrer'>https://teleseat.com/copyright-policy</a>.  Teleseat may deny you access to the Service if you are alleged to infringe another party's copyright.</p>

                    <h2 className='f-bold-16 text-color mt-4'>12. Changes to these Usage Terms.</h2>
                    <p className='f-15 text-color mt-3'>Teleseat may make changes to these Usage Terms from time to time. Teleseat will publish the changes at <a href='https://teleseat.com/copyright-policy' target='_blank' rel='noopener noreferrer'>https://teleseat.com/usage-terms</a>. The changes will be effective when published. Please review the Usage Terms on a regular basis. You understand and agree that your express acceptance of these Usage Terms or your use of Service after the date of publication shall constitute your agreement to the updated Usage Terms. If you do not agree with the Usage Terms then in effect, then you should cease the Service.</p>

                </IonLabel>
            </IonRow>
        </IonContent>
    )
}

export default UsageTermsPage