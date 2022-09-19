import { IonHeader, IonPage } from '@ionic/react'
import React, { FC, useState } from 'react'
import { APP_ROUTES } from './Routes'
import HomePageHeader from '../website/HomePageHeader'
import PageProps from '../common/PageProps'

export interface WebPagePropsType extends PageProps {
    setHeaderBG?: Function
}
export interface WebPagePropsType extends PageProps {
    setHeaderBG?: Function
}

interface WebsiteTemplatePropsType {
    PageComponent: FC<WebPagePropsType>
    componentProps: PageProps
    pathname: string
}


const WebsiteTemplate: React.FC<WebsiteTemplatePropsType> = (props) => {
    const {
        PageComponent,
        componentProps,
        pathname = 'homePage'
    } = props
    const [headerBG, setHeaderBG] = useState(false)
    const headerClass = headerBG ? getHeaderClassName(pathname) : ''
    return (
        <IonPage className='webPageContent' id='main'>
            <IonHeader className={`AH homePageHeader ${headerClass}`}>
                <HomePageHeader headerClass={headerClass} />
            </IonHeader>
            <PageComponent key={pathname} {...componentProps} setHeaderBG={setHeaderBG}/>
        </IonPage>
    )
}

export default WebsiteTemplate


export const getHeaderClassName = (pathname: string) => {
    if (pathname === APP_ROUTES.WEB_HOME || pathname.startsWith('/usecases/') || pathname === APP_ROUTES.PLATFORM) {
        return 'faint-blue'
    }
    return ''
}
