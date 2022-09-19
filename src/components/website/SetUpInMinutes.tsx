/**
 * Set up in minutes section
 */

import React, { useEffect, useRef, useState } from 'react'
import {
    IonButton, IonButtons, IonLabel, IonRow, IonSlide, IonSlides,
} from '@ionic/react'

// Uses
import { APP_ROUTES } from '../app/Routes'
import TsIcon, { IconList } from '../common/TsIcon'

const slides = ['slide-01.svg', 'slide-02.svg', 'slide-03.svg']

interface SetUpInMinutesPropsType {
    className?: string
    text: string
}

const SetUpInMinutes: React.FC<SetUpInMinutesPropsType> = (props) => {
    const { className='', text='' } = props
    const slidesRef = useRef<HTMLIonSlidesElement>(null)

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        slidesRef.current?.slideTo(activeSlide)
    }, [activeSlide])

    const slideOpts = {
        speed: 500,
        allowTouchMove: false,
    };

    const slideTo = (to: 'prev' | 'next') => {
        const x = to === 'prev' ? -1 : 1
        setActiveSlide(activeSlide + x)
    }

    return (
        <section id='setUpInMinutes' className={`ts-screen column ${className}`}>
            <IonRow className='homePage--row'>
                <IonLabel className='ion-text-center info'>
                    <h2 className='f-bold-28 text-color'>Set up in minutes</h2>
                    <p className='f-16 text-dark mt-2'>{text}</p>
                </IonLabel>
            </IonRow>
            <IonRow className='homePage--row'>
                <IonSlides
                    className='usecases-slides'
                    options={slideOpts}
                    ref={slidesRef}
                >
                    {slides.map((slide, idx) => (
                        <IonSlide className='features-slide' key={idx}>
                            <img src={`/assets/images/usecases/${slide}`}
                                alt={`usecase slide ${idx}`}
                            />
                        </IonSlide>
                    ))}
                </IonSlides>
                <IonButtons className='slidesNav'>
                    <IonButton color='dark' className='slidesNavBtn ts-iconBtn force' fill='solid' onClick={() => slideTo('prev')} disabled={activeSlide === 0}>
                        <TsIcon icon={IconList.leftArrow} className='slidesNavIcon light'/>
                    </IonButton>
                    <IonButton color='dark' className='slidesNavBtn ts-iconBtn force' fill='solid' onClick={() => slideTo('next')} disabled={activeSlide === (slides.length - 1)}>
                        <TsIcon icon={IconList.rightArrow} className='slidesNavIcon light'/>
                    </IonButton>
                </IonButtons>
            </IonRow>
        </section>
    )
}

export default SetUpInMinutes
