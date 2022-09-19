/**
 * About page
 * Url: /about
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import {
    IonCard,
    IonCol,
    IonContent, IonLabel, IonRow
} from '@ionic/react'

/* css */
import './HomePage.scss'

/* Components */
import PageProps from '../common/PageProps'
import HomePageFooter from './HomePageFooter'
import { APP_ROUTES } from '../app/Routes'
import SocialShareButtons from '../common/SocialShareButtons'

const ThankYouPage: React.FC<PageProps> = (props) => {
    const { location } = props
    const params = new URLSearchParams(location.search)
    const name = params.get('name')
    return (
        <IonContent id='thankYouPageContent'>
            <Helmet>
                <title>Thank You</title>
                <meta name='description' content='Thank you for you interest, we will contact you soon' />
                <link rel='canonical' href={`https://teleseat.com${APP_ROUTES.THANK_YOU}`} />
            </Helmet>
            <IonRow className='homePage--row my-5'>
                <IonLabel>
                    <h1 className='f-bold-40 text-color mt-5' >{`Thank${name ? `s ${name}` : ' You'}!`}</h1>
                    <p className='f-18 text-color mt-4'>
                        We’ve added you to the list and we’ll notify you when you’re given access
                    </p>
                    <p className='f-bold-18 text-color mt-4'>
                        Help spread the word
                    </p>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row my-5'>
                <IonCard className='thankYou--card w-100 m-0'>
                    <IonRow className='pl-4 pt-2 pr-2'>
                        <IonCol size='12' sizeMd='5' className='pb-0 thankYou--textCol'>
                            <IonLabel>
                                <h1 className='f-bold-30 text-light' >Discover Teleseat, virtual events in box</h1>
                                <p className='f-18 text-light mt-4'>
                                    teleseat.com
                                </p>
                            </IonLabel>
                        </IonCol>
                        <IonCol size='12' sizeMd='7' className='pb-0'>
                            <img src='/assets/images/thank-you.png'
                                srcSet='/assets/images/thank-you@2x.png 2x, /assets/images/thank-you@3x.png 3x'
                                alt='Teleseat, virtual events in box'
                                title='Teleseat, virtual events in box'
                                className='mt-2'
                            />
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonRow>
            <IonRow className='homePage--row mb-5'>
                <SocialShareButtons
                    url='https://teleseat.com'
                    title='Discover Teleseat, virtual events in box'
                    withLabel
                />
            </IonRow>
            <HomePageFooter className='mt-6' />
        </IonContent>
    )
}

export default ThankYouPage
