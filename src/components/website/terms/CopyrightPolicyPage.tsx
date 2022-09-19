/**
 * Copyright Policy Page
 * Url: /copyright-policy
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

const CopyrightPolicyPage: React.FC<PageProps> = (props) => {
    return (
        <IonContent id='copyrightPolicyPage' className='terms'>
            <Helmet>
                <title>Teleseat Copyright Policy</title>
                <meta name='description' content='Learn about Teleseat copyright policy' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.COPYRIGHT_POLICY}`}/>
            </Helmet>
            <IonRow className='homePage--row mt-5'>
                <IonLabel className='w-100'>
                    <h1 className='f-bold-36 text-color mt-4 ion-text-center'>TELESEAT INC.</h1>
                    <h2 className='f-bold-40 text-color mt-2 ion-text-center'>COPYRIGHT POLICY</h2>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row mt-4 mb-6'>
                <IonLabel>
                    <p className='f-15 text-color'>
                        Teleseat Inc. (“Teleseat”) takes claims of copyright infringement seriously. Teleseat will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from this site (the “Website”) infringe your copyright, you may request removal of those materials (or access to them) from the Website by submitting written notification to Teleseat’s copyright agent designated below.
                    </p>
                    <p className='f-15 text-color mt-3'>
                        In accordance with the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act (17 U.S.C. § 512) (“DMCA”), the written notice (the “DMCA Notice”) must include substantially the following:
                    </p>
                    <ul className='list bullet'>
                        <li className='f-15 text-color'>Your physical or electronic signature.</li>
                        <li className='f-15 text-color mt-3'>Identification of the copyrighted work you believe to have been infringed or, if the claim involves multiple works on the Website, a representative list of such works.</li>
                        <li className='f-15 text-color mt-3'>Identification of the material you believe to be infringing in a sufficiently precise manner to allow us to locate that material.</li>
                        <li className='f-15 text-color mt-3'>Adequate information by which Teleseat can contact you (including your name, postal address, telephone number, and, if available, email address).</li>
                        <li className='f-15 text-color mt-3'>A statement that you have a good faith belief that use of the copyrighted material is not authorized by the copyright owner, its agent, or the law.</li>
                        <li className='f-15 text-color mt-3'>A statement that the information in the written notice is accurate.</li>
                        <li className='f-15 text-color mt-3'>A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
                    </ul>
                    <p className='f-15 text-color mt-3'>
                        Teleseat’s designated copyright agent to receive DMCA Notices is:
                    </p>
                    <p className='f-15 text-color mt-3 pl-4'>
                        Sri Subramaniam<br />
                        Teleseat Inc.<br />
                        4125 Hopyard Rd, Suite 225<br />
                        Pleasanton, CA 94588<br />
                        Telephone: <a href='tel:4088390188'>(408) 839-0188</a><br />
                        e-mail: <a href='mailto:copyright@teleseat.com'>copyright@teleseat.com</a><br />
                    </p>
                    <p className='f-15 text-color mt-3'>
                        If you fail to comply with all of the requirements of Section 512(c)(3) of the DMCA, your DMCA Notice may not be effective.
                    </p>
                    <p className='f-15 text-color mt-3'>
                        Please be aware that if you knowingly materially misrepresent that material or activity on the Website is infringing your copyright, you may be held liable for damages (including costs and attorneys' fees) under Section 512(f) of the DMCA.
                    </p>
                </IonLabel>
            </IonRow>
        </IonContent>
    )
}

export default CopyrightPolicyPage