/**
 * Service level Terms Page
 * Url: /service-level-terms
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

const ServiceLevelTermsPage: React.FC<PageProps> = (props) => {
    return (
        <IonContent id='servcieLevelTermsPage' className='terms'>
            <Helmet>
                <title>Teleseat Service Level Terms</title>
                <meta name='description' content='Learn about Teleseat service level terms' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.SLA_TERMS}`}/>
            </Helmet>
            <IonRow className='homePage--row mt-5'>
                <IonLabel>
                    <h1 className='f-bold-40 text-color mt-4'>SERVICE LEVEL TERMS</h1>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row mt-4 mb-5'>
                <IonLabel>
                    <h4 className='f-medium-15 text-color'>Last updated February 14, 2021</h4>
                    <p className='f-15 text-color mt-5'>
                        Teleseat strives to make the Teleseat service (the <strong>"Service"</strong>), accessible at <a href='https://teleseat.com/' target='_blank' rel='noopener noreferrer'>www.teleseat.com</a>, Available at least 99.5% of the time, measured by calendar month and determined as provided below.
                    </p>
                    <p className='f-15 text-color mt-3'>Calculation of the Service as <strong>"Available"</strong> excludes downtime (a) during holidays and weekends and scheduled maintenance; (b) caused by (i) customer-requested maintenance, or (ii) other conditions that are beyond Teleseat’s reasonable control such as, but not limited to: any downtime resulting from outages of third party connections or utilities, customer-provided network access, the Internet, and other <i>force majeure</i> events; or (c) due to Teleseat blocking access to the Service for security reasons or otherwise in accordance with its policies.  The Service is not Available as soon as a customer (with written notice to Teleseat) recognizes that the Service is not accessible and continues until the availability of the Service is restored to such customer.</p>
                    <p className='f-15 text-color mt-3'>If the Service is not Available on a particular business day for 2 or more hours, Teleseat will issue a credit (<strong>"Credit"</strong>) to the affected customer equal to 5% of the fees paid to Teleseat by such customer that are allocable to such month; provided that no more than one such Credit will accrue per day for a customer and Credits accrued for a customer in a calendar month shall not exceed 25% of the fees paid to Teleseat by such customer that are allocable to such month.  A customer will forfeit the right to receive a Credit for a particular lack of availability if it fails to request such Credit from Teleseat in writing within 24 hours from the end of such downtime.  Credits may only be used to pay for the Service and may not be redeemed for cash.  Credits not used within 6 months following issuance are deemed forfeited.</p>
                    <p className='f-15 text-color mt-3'>If the Service is Available less than (a) 99.5% of the time per calendar month for any three consecutive months or (b) 85% of the time in a calendar month, then within 10 days of such event, a customer may terminate its agreement with Teleseat for the Service, by delivering notice of such termination to Teleseat in writing.  Failure to provide such notice in such time-period waives the right to terminate under this clause.</p>
                    <p className='f-15 text-color mt-3'>The issuance of Credits and termination by a customer as provided above are Teleseat’s sole obligation, and each affected customer’s sole remedy, if the Service is not Available for any reason.</p>
                    <p className='f-15 text-color mt-3'>Teleseat may amend or terminate these Service Level Terms as to future periods by providing notice at least 60 days prior to the amendment or termination taking effect.</p>
                </IonLabel>
            </IonRow>
        </IonContent>
    )
}

export default ServiceLevelTermsPage