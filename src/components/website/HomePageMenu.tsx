/**
 * Homepage menu for smaller devices
 */

/* Imports: std */
import React, { useState } from 'react'
import {
    IonCol, IonItem, IonList, IonLabel, IonContent, IonButton, IonToolbar
} from '@ionic/react'
import TsIcon, { IconList } from '../common/TsIcon'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../app/Routes'
import UsecasesMenuList from './usecases/UsecasesMenuList'

const HomePageMenu: React.FC<{ setMenu: Function }> = ({ setMenu }) => {
    const location = useLocation()
    const labelClass = 'text-medium'
    const activeLabelClass = 'text-color'

    const [usecasesMenu, setUsecasesMenu] = useState(false)

    return (
        <IonCol className='sidebar--col px-4 py-0 h-100 w-100'>
            <IonToolbar className='ion-no-padding'>
                <IonButton
                    slot='end'
                    fill='clear'
                    className='homePage--menuCloseBtn'
                    onClick={() => setMenu(false)}
                >
                    <TsIcon icon={IconList.close} className='dark' width='36px' height='36px' />
                </IonButton>
            </IonToolbar>
            <IonContent>
                <IonList className='mt-5 p-0'>
                    <IonItem
                        id='homeMenuItem'
                        lines='none'
                        className='homePage--menuItem itemClear itemNoPad mt-4'
                        routerLink={APP_ROUTES.WEB_HOME}
                        onClick={() => setMenu(false)}
                        detail={false}
                    >
                        <IonLabel
                            className={`homePage--menuLabel f-medium-34 ${location.pathname === APP_ROUTES.WEB_HOME ? activeLabelClass : labelClass}`}
                        >Home</IonLabel>
                    </IonItem>
                    {/* <IonItem
                        id='platformMenuItem'
                        lines='none'
                        className='homePage--menuItem itemClear itemNoPad mt-4'
                        routerLink={APP_ROUTES.ABOUT}
                        onClick={() => setMenu(false)}
                        detail={false}
                    >
                        <IonLabel
                            className={`homePage--menuLabel f-medium-34 ${location.pathname === APP_ROUTES.ABOUT ? activeLabelClass : labelClass}`}
                        >About</IonLabel>
                    </IonItem> */}
                    <IonItem
                        id='platformMenuItem'
                        lines='none'
                        className='homePage--menuItem itemClear itemNoPad mt-4'
                        routerLink={APP_ROUTES.PLATFORM}
                        onClick={() => setMenu(false)}
                        detail={false}
                    >
                        <IonLabel
                            className={`homePage--menuLabel f-medium-34 ${location.pathname === APP_ROUTES.PLATFORM ? activeLabelClass : labelClass}`}
                        >Platform</IonLabel>
                    </IonItem>
                    <IonItem
                        id='usecaseMenuItem'
                        lines='none'
                        className='homePage--menuItem link itemClear itemNoPad mt-4'
                        onClick={() => setUsecasesMenu(!usecasesMenu)}
                        detail={false}
                    >
                        <IonLabel
                            className={`homePage--menuLabel f-medium-34 ${location.pathname.startsWith('/usecases/') ? activeLabelClass : labelClass}`}
                        >Use cases <TsIcon icon={IconList.rightArrow} className={`ml-3 ${usecasesMenu ? 'rotate90' : ''}`} /></IonLabel>
                    </IonItem>
                    {usecasesMenu && (
                        <UsecasesMenuList onClick={() => setMenu(false)} />
                    )}
                    <IonItem lines='none' className='itemClear itemNoPad mt-4'>
                        <IonButton
                            id='requestDemoLink-mobileMenu'
                            fill='solid'
                            color='primary'
                            className='ts-btn'
                            href={APP_ROUTES.CONTACT}
                            onClick={() => setMenu(false)}
                        >
                            <IonLabel className='f-bold-15 text-light'>
                                Get Early Access
                            </IonLabel>
                        </IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonCol>
    )
}

export default HomePageMenu
