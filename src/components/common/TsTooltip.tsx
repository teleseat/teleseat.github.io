
/**
 * Pagination component
 */

import React, { useState, ReactNode, useEffect, useRef } from 'react'
import Popover, { ArrowContainer } from 'react-tiny-popover'

import './TsTooltip.scss'

type TsTooltipType = {
    children: ReactNode,
    message: ReactNode,
    className?: string,
    arrow?: boolean,
    position?: 'top' | 'right' | 'left' | 'bottom'
}

const TsTooltip: React.FC<TsTooltipType> = ({ children, className = '', message = '', arrow = false, position }) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const isMountedRef = useRef(false)
    const [arrowSetting, setArrowSetting] = useState<{color: string, arrowStyle: {opacity: number, boxShadow?: string}}>({ color: '#000000', arrowStyle: { opacity: .75 } })
    const getArrowSettings = () => {
        if (className.includes('light')) return { color: '#ffffff', arrowStyle: { opacity: 1, boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.04), 0px 1px 0px rgba(0, 0, 0, 0.03)' } }
        if (className.includes('primary')) return { color: '#00b9ff', arrowStyle: { opacity: .5 } }
        if (className.includes('danger')) return { color: '#eb445a', arrowStyle: { opacity: .5 } }
        return { color: '#000000', arrowStyle: { opacity: .75 } }
    }

    useEffect(() => {
        isMountedRef.current = true
        const _arrowSetting = getArrowSettings()
        setArrowSetting(_arrowSetting)
        return () => {
            isMountedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const content = (
        <div className={`TT-content ${className}`}>
            {message}
        </div>
    )
    return (
        <Popover
            isOpen={showTooltip}
            position={position || ['top', 'right', 'left', 'bottom']}
            padding={10}
            onClickOutside={() => {
                isMountedRef.current && setShowTooltip(false)
            }}
            align='center'
            containerClassName='TT-toltipContainer'
            content={({ position, targetRect, popoverRect }) => (
                <>
                    {arrow ? (
                        <ArrowContainer
                            position={position}
                            targetRect={targetRect}
                            popoverRect={popoverRect}
                            arrowSize={6}
                            arrowColor={arrowSetting.color}
                            arrowStyle={arrowSetting.arrowStyle}
                        >
                            {content}
                        </ArrowContainer>
                    ) : (
                            content
                        )}
                </>
            )}
        >
            <div
                className='TT-invokeBtn'
                onMouseEnter={() => {
                    isMountedRef.current && setShowTooltip(true)
                }}
                onMouseLeave={() => {
                    isMountedRef.current && setShowTooltip(false)
                }}
            >
                {children}
            </div>
        </Popover>
    )
}

export default TsTooltip
