/**
 * Easy to use section
 */

import React from 'react'
import {
    IonButton, IonLabel,
} from '@ionic/react'

// Uses
import { APP_ROUTES } from '../app/Routes'

const EasyToUse: React.FC = () => {
    return (
        <section id='easyToUse' className='ts-screen flex-col'>
            <img src='/assets/images/grid.svg' className='homePage--dottedBg ion-hide-sm-down' alt='' />
            <img src='/assets/images/grid-mobile.svg' className='homePage--dottedBg ion-hide-sm-up' alt='' />
            <IonLabel className='ion-text-center textLabel'>
                <h2 className='f-bold-36 text-color'>Easy to use and enterprise ready</h2>
                <p className='f-medium-20 text-medium mt-4'>Built for scale, designed for ease of use, and enhanced by smart workflows, automations and analytics.</p>
                <IonButton className='ts-btn mt-4' routerLink={APP_ROUTES.PLATFORM}>
                    Learn about the platform
                </IonButton>
            </IonLabel>
        </section>
    )
}

export default EasyToUse
