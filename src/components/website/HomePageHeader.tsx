/**
 * Home Page Header component
 */

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    IonButton, IonButtons, IonLabel, IonModal, IonPopover, IonToolbar
} from '@ionic/react'

//CSS
import '../app/AppHeader.scss'

// Components
import TeleSeatBrand from '../app/TeleSeatBrand'
import TsIcon, { IconList } from '../common/TsIcon'
import HomePageMenu from './HomePageMenu'
import UsecasesMenuList from './usecases/UsecasesMenuList'

// Uses
import { APP_ROUTES } from '../app/Routes'


interface HomePageHeaderPropsType {
    headerClass: string
}

const HomePageHeader: React.FC<HomePageHeaderPropsType> = (props) => {
    const { pathname = '' } = useLocation()
    const labelClass = 'f-16 text-medium'
    const activeLabelClass = 'f-bold-16 text-color'

    const [menu, setMenu] = useState(false)
    const [solutionsMenu, setSolutionsMenu] = useState<{ open: boolean, event: Event | undefined }>({ open: false, event: undefined })

    const closeSolutionsMenu = () => {
        setSolutionsMenu({
            open: false,
            event: undefined
        })
    }

    return (
        <IonToolbar className='AH-toolbar'>
            {/* <div className={`homePage--header ${headerClass}`}> */}
            <div className='homePage--header'>
                <TeleSeatBrand id='teleseat_header' slot='start' />
                <IonButtons slot='end' className='homePage--headerBtns ion-no-margin'>
                    <IonButton
                        fill='clear'
                        className='homePage--headerBtn clear ion-hide-md-down'
                        routerLink={APP_ROUTES.PLATFORM}
                        id='aboutTeleseatLink'
                    >
                        <IonLabel className={`homePage--headerBtnLabel ${pathname === APP_ROUTES.PLATFORM ? activeLabelClass : labelClass}`}>
                            Platform
                        </IonLabel>
                    </IonButton>
                    <IonButton
                        fill='clear'
                        className='homePage--headerBtn clear ion-hide-md-down'
                        id='usecasesLink'
                        onClick={(e: any) => setSolutionsMenu({ open: true, event: e.nativeEvent })}
                    >
                        <IonLabel className={`${solutionsMenu.open ? 'text-green' : 'homePage--headerBtnLabel'} ${pathname.startsWith('/usecases/') ? activeLabelClass : labelClass}`}>
                            Use cases
                        </IonLabel>
                        <TsIcon icon={IconList.dropdownArrow} className={`ml-1 ${solutionsMenu.open ? 'flip' : ''}`} />
                    </IonButton>
                    <IonButton
                        fill='clear'
                        className='menuBtn ion-hide-md-up'
                        onClick={() => setMenu(true)}
                    >
                        <TsIcon icon={IconList.menu} className='dark' />
                    </IonButton>
                </IonButtons>
                <IonModal isOpen={menu} cssClass='homePage-mobileMenu' onDidDismiss={() => setMenu(false)}>
                    <HomePageMenu setMenu={setMenu} />
                </IonModal>

                <IonPopover
                    isOpen={solutionsMenu.open}
                    event={solutionsMenu.event}
                    cssClass='ts-moreMenu large'
                    onDidDismiss={() => closeSolutionsMenu()}
                >
                    <UsecasesMenuList onClick={closeSolutionsMenu} className='header' />
                </IonPopover>
            </div>
        </IonToolbar>
    )
}

export default HomePageHeader
