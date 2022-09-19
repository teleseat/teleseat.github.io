/**
 * App Layout component
 */


import React, { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useLocation } from 'react-router'
import {
    IonRouterOutlet
} from '@ionic/react'

/* Hooks and utils */
import { APP_ROUTES } from './Routes'


import HomePage from '../website/HomePage'
import WhyTeleseatPage from '../website/WhyTeleseatPage'
import UsecasesAllHandsPage from '../website/usecases/UsecasesAllHandsPage'
import UsecasesTrainingPage from '../website/usecases/UsecasesTrainingPage'
import UsecasesOnboardingPage from '../website/usecases/UsecasesOnboardingPage'
import UsecasesPartnerEventPage from '../website/usecases/UsecasesPartnersEventPage'
import PlatformPage from '../website/PlatformPage'
import ThankYouPage from '../website/ThankYouPage'
import PrivacyPage from '../website/terms/PrivacyPage'
import CookiePolicyPage from '../website/terms/CookiePolicyPage'
import TermsPage from '../website/terms/TermsPage'
import ServiceTermsPage from '../website/terms/ServiceTermsPage'
import UsageTermsPage from '../website/terms/UsageTermsPage'
import ServiceLevelTermsPage from '../website/terms/ServiceLevelTermsPage'
import CopyrightPolicyPage from '../website/terms/CopyrightPolicyPage'
import SecurityPage from '../website/SecurityPage'

import PageProps from '../common/PageProps'
import ContactPage from '../website/contact/ContactPage'
import WebsiteTemplate from './WebsiteTemplate'

interface AppRouteType {
    path: string
    PageComponent: FC<PageProps>
    routePage?: string
    exact?: boolean
}

const AppRoutes: AppRouteType[] = [
    { path: APP_ROUTES.WEB_HOME, PageComponent: HomePage, exact: true },
    { path: APP_ROUTES.PLATFORM, PageComponent: PlatformPage, exact: true },
    { path: APP_ROUTES.WHY_TELESEAT, PageComponent: WhyTeleseatPage, exact: true },
    { path: APP_ROUTES.USECASES_ALLHANDS, PageComponent: UsecasesAllHandsPage, exact: true },
    { path: APP_ROUTES.USECASES_LIVETRAINING, PageComponent: UsecasesTrainingPage, exact: true },
    { path: APP_ROUTES.USECASES_ONBOARDING, PageComponent: UsecasesOnboardingPage, exact: true },
    { path: APP_ROUTES.USECASES_PARTNER, PageComponent: UsecasesPartnerEventPage, exact: true },
    { path: APP_ROUTES.CONTACT, PageComponent: ContactPage, exact: false },
    { path: APP_ROUTES.THANK_YOU, PageComponent: ThankYouPage, exact: true },
    { path: APP_ROUTES.PRIVACY, PageComponent: PrivacyPage, exact: true },
    { path: APP_ROUTES.TERMS, PageComponent: TermsPage, exact: true },
    { path: APP_ROUTES.SERVICE_TERMS, PageComponent: ServiceTermsPage, exact: true },
    { path: APP_ROUTES.SLA_TERMS, PageComponent: ServiceLevelTermsPage, exact: true },
    { path: APP_ROUTES.USAGE_TERMS, PageComponent: UsageTermsPage, exact: true },
    { path: APP_ROUTES.COPYRIGHT_POLICY, PageComponent: CopyrightPolicyPage, exact: true },
    { path: APP_ROUTES.COOKIE, PageComponent: CookiePolicyPage, exact: true },
    { path: APP_ROUTES.SECURITY, PageComponent: SecurityPage, exact: true },
]

const AppLayout: React.FC = () => {
    const location = useLocation()
    const { pathname = '' } = location

    return (
        <IonRouterOutlet>
            {AppRoutes.map((AppRoute) => (
                <Route
                    key={AppRoute.path}
                    path={AppRoute.path}
                    exact={AppRoute.exact}
                    render={(componentProps) => (
                        <WebsiteTemplate pathname={pathname} PageComponent={AppRoute.PageComponent} componentProps={componentProps} />
                    )}
                />
            ))}
            <Redirect to={`${APP_ROUTES.WEB_HOME}`} />
        </IonRouterOutlet>
    )
}

export default AppLayout
