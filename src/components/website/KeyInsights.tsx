/**
 * Key Insights section
 */

import React from 'react'
import {
    IonLabel, IonRow
} from '@ionic/react'

interface KeyInsightsPropsType {
    img: string
    text: string
}

const KeyInsights: React.FC<KeyInsightsPropsType> = (props) => {
    const { img='', text='' } = props
    return (
        <section id='keyInsights' className='ts-screen flex-col'>
            <IonRow className='homePage--row'>
                <IonLabel className='w-100 ion-text-center info'>
                    <h2 className='f-bold-28 text-color'>Gain key insights</h2>
                    <p className='f-16 text-dark mt-2'>{text}</p>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row ion-align-items-start'>
                <img src={`/assets/images/${img}.png`}
                    srcSet={`/assets/images/${img}@2x.png 2x, /assets/images/${img}@3x.png 3x`}
                    alt='key insights'
                    className='usecasesPage--sectionMedia'
                />
            </IonRow>
        </section>
    )
}

export default KeyInsights
