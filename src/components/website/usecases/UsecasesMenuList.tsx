/**
 * Home Page Header component
 */

import React from 'react'
import { get } from 'lodash'
import {
    IonCol,
    IonItem, IonLabel, IonList, IonRow,
} from '@ionic/react'

import './UsecasesMenuList.scss'

// Uses
import { APP_ROUTES } from '../../app/Routes'
import { useLocation } from 'react-router-dom'

interface UsecasesMenuListPropsType {
    className?: string
    onClick: Function
}

const UsecasesMenuList: React.FC<UsecasesMenuListPropsType> = (props) => {
    const { className = '', onClick } = props
    const location = useLocation()
    const pathname = get(location, 'pathname', '')

    return (
        <IonList className={`usecasesMenu ${className}`}>
            <IonItem lines='none' className='usecasesHeaderItem'>
                <IonLabel className='ion-text-wrap'>
                    <p className='f-medium-14 text-color'>Teleseat helps your organization’s events, learning and decsion-making activities.</p>
                    <h5 className='f-bold-15 text-green'>Key use cases include:</h5>
                </IonLabel>
            </IonItem>
            <IonRow>
                <IonCol size='12' sizeMd='6' className='p-0 usecasesMenuCol'>
                    <IonItem
                        lines='none'
                        className={`usecasesMenuItem ${pathname === APP_ROUTES.USECASES_ALLHANDS ? 'selected' : ''}`}
                        button
                        detail={false}
                        routerLink={APP_ROUTES.USECASES_ALLHANDS}
                        onClick={() => onClick()}
                    >
                        <IonLabel className='ion-text-wrap ion-no-margin'>
                            <h5 className={'f-bold-15 menu-title'}>All hands and company events</h5>
                            <p className='f-13 text-medium menu-info'>Big group sessions with auditorium-like experiences and dedicated spaces.</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol size='12' sizeMd='6' className='p-0 usecasesMenuCol'>
                    <IonItem
                        lines='none'
                        className={`usecasesMenuItem ${pathname === APP_ROUTES.USECASES_PARTNER ? 'selected' : ''}`}
                        button
                        detail={false}
                        routerLink={APP_ROUTES.USECASES_PARTNER}
                        onClick={() => onClick()}
                    >
                        <IonLabel className='ion-text-wrap ion-no-margin'>
                            <h5 className={'f-bold-15 menu-title'}>Customer and partner events</h5>
                            <p className='f-13 text-medium menu-info'>With eveything you need in one platform, set up highly engaging virtual events.</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol size='12' sizeMd='6' className='p-0 usecasesMenuCol'>
                    <IonItem
                        lines='none'
                        className={`usecasesMenuItem ${pathname === APP_ROUTES.USECASES_LIVETRAINING ? 'selected' : ''}`}
                        button
                        detail={false}
                        routerLink={APP_ROUTES.USECASES_LIVETRAINING}
                        onClick={() => onClick()}
                    >
                        <IonLabel className='ion-text-wrap ion-no-margin'>
                            <h5 className={'f-bold-15 menu-title'}>Live training and workshops</h5>
                            <p className='f-13 text-medium menu-info'>Smaller group training sessions to Sales Kick-offs, make them more effective.</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol size='12' sizeMd='6' className='p-0 usecasesMenuCol'>
                    <IonItem
                        lines='none'
                        className={`usecasesMenuItem ${pathname === APP_ROUTES.USECASES_ONBOARDING ? 'selected' : ''}`}
                        button
                        detail={false}
                        routerLink={APP_ROUTES.USECASES_ONBOARDING}
                        onClick={() => onClick()}
                    >
                        <IonLabel className='ion-text-wrap ion-no-margin'>
                            <h5 className={'f-bold-15 menu-title'}>Employee onboarding</h5>
                            <p className='f-13 text-medium menu-info'>Remotely onboard with ease, set up great first impressions.</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonList>
    )
}

export default UsecasesMenuList
