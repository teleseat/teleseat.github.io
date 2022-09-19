/**
 * Home Page Header component
 */

import React from 'react'
import { Link } from 'react-router-dom'
import {
    IonButton,
    IonButtons, IonCol, IonLabel, IonRow
} from '@ionic/react'

// Uses
import { APP_ROUTES } from '../app/Routes'
import TeleSeatBrand from '../app/TeleSeatBrand'
import TsIcon, { IconList } from '../common/TsIcon'


const HomePageFooter: React.FC<{ className?: string }> = ({ className = '' }) => {

    return (
        <footer className={`homePage--footer ${className}`}>
            <IonRow className='homePage--row'>
                <IonCol size='12' sizeMd='3' className='homePage--footerBrand p-0'>
                    <TeleSeatBrand id='teleseat_footer' variant='light' className='teleseat-logo' />
                </IonCol>
                <IonCol size='12' sizeMd='6' className='flex flex-col homePage--footerLinkCol p-0'>
                    <IonRow className='w-100'>
                        <IonCol size='12' sizeMd='4' className='flex flex-col homePage--footerLinkCol'>
                            {/* <Link to={APP_ROUTES.ABOUT} className='link'>
                                <IonLabel className='f-medium-13 text-light'>About</IonLabel>
                            </Link> */}
                            <Link to={APP_ROUTES.PLATFORM} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Platform</IonLabel>
                            </Link>
                            <Link to={APP_ROUTES.SECURITY} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Security</IonLabel>
                            </Link>
                            <a href={APP_ROUTES.BLOG} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Blog</IonLabel>
                            </a>
                        </IonCol>
                        <IonCol size='12' sizeMd='4' className='flex flex-col homePage--footerLinkCol'>
                            <Link to={APP_ROUTES.PRIVACY} className='link'>
                                <IonLabel className='f-medium-13 text-light'>Privacy</IonLabel>
                            </Link>
                            <Link to={APP_ROUTES.USAGE_TERMS} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Usage Terms</IonLabel>
                            </Link>
                            <Link to={APP_ROUTES.SERVICE_TERMS} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Service Terms</IonLabel>
                            </Link>
                            <Link to={APP_ROUTES.COPYRIGHT_POLICY} className='mt-2 link'>
                                <IonLabel className='f-medium-13 text-light'>Copyright Notice</IonLabel>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol size='12' sizeMd='3' className='homePage--footerLinkCol actionBtnCol'>
                    <IonButton
                        fill='outline'
                        color='primary'
                        className='ts-btn large w-100'
                        href='mailto:anirban@teleseat.com'
                        id='contact-footer'
                    >
                        <IonLabel className='f-medium-13 text-primary'>Contact Us</IonLabel>
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow className='homePage--row homePage--copyRow'>
                <IonLabel className='f-medium-3 text-soft copyright'>© 2020-21 Teleseat. All rights reserved.</IonLabel>
                <IonButtons className='socialBtns'>
                    <IonButton className='ts-iconBtn force faint' fill='solid' href='https://www.facebook.com/teleseat' target='_blank'>
                        <TsIcon icon={IconList.facebook} width='12px' height='12px' className='light' />
                    </IonButton>
                    <IonButton className='ts-iconBtn force faint' fill='solid' href='https://www.linkedin.com/company/teleseat' target='_blank'>
                        <TsIcon icon={IconList.linkedin} width='12px' height='12px' className='light' />
                    </IonButton>
                    <IonButton className='ts-iconBtn force faint' fill='solid' href='https://twitter.com/GetTeleseat' target='_blank'>
                        <TsIcon icon={IconList.twitter} width='12px' height='12px' className='light' />
                    </IonButton>
                </IonButtons>
            </IonRow>
        </footer>
    )
}

export default HomePageFooter
