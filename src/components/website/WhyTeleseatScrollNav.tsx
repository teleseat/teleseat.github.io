/**
 * Why Teleseat Page scroll nav component
 */

/* Imports: std */
import React from 'react'
import {
    IonButtons, IonButton, IonItem,
} from '@ionic/react'


export const TABS = {
    BETTER_EXPERIENCE: {
        id: 'betterExperience',
        title: 'Better overall experience',
    },
    ALL_IN_ONE: {
        id: 'allInOne',
        title: 'All-in-one event platform '
    },
    MORE_ENGAGING: {
        id: 'moreEngaging',
        title: 'More ways to engage',
    },
    BETTER_TECHNOLOGY: {
        id: 'betterTechnology',
        title: 'Better technology',
    }
}

interface WhyTeleseatScrollNavPropsType {
    active: string
    className?: string
    onClickScroll: Function
}
const WhyTeleseatScrollNav: React.FC<WhyTeleseatScrollNavPropsType> = (props) => {
    const { active = '', className = '', onClickScroll } = props
    return (
        <IonItem lines='none' className={`itemNoPad itemTrimmed itemClear w-100 my-4 ${className}`}>
            <IonButtons className='whyTeleseat--navBtns mx-auto'>
                {Object.values(TABS).map((tab: {id: string, title: string}) => (
                    <IonButton
                        key={tab.id}
                        className='whyTeleseat--navBtn'
                        fill='clear'
                        color={active === tab.id ? 'primary' : 'medium'}
                        onClick={() => onClickScroll(tab.id)}
                    >
                        {tab.title}
                    </IonButton>
                ))}
            </IonButtons>
        </IonItem>
    )
}

export default WhyTeleseatScrollNav

