/**
 * Main App component
 */


import React from 'react'
import { IonReactRouter } from '@ionic/react-router'
import { IonApp } from '@ionic/react'

import ReactGA from 'react-ga';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'


/* Theme variables */
import '../../theme/variables.css'

/* EventCo App common css */
import '../common/Utils.scss'
import './App.scss'


/* Custom components and pages */
import AppLayout from './AppLayout';

/**
 * App
 */

const App: React.FC = () => {

    ReactGA.initialize('UA-178396806-1', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <IonApp>
            <IonReactRouter>
                <AppLayout />
            </IonReactRouter>
        </IonApp>
    )
}

export default App
