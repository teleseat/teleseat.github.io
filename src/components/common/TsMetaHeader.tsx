/**
 * Page Meta Tags
 */

import React from 'react'
import { Helmet } from 'react-helmet'


interface TsMetaHeaderPropsType {
    title: string,
    description?: string,
    url?: string,
    image?: string
}

const TsMetaHeader: React.FC<TsMetaHeaderPropsType> = (props) => {
    const {
        title = '',
        description = '',
        url = window.location.href,
        image = ''
    } = props

    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel='canonical' href={url} />
            {/* IOS */}
            {/* Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            {image && (
                <meta property="og:image" content={image}/>
            )}
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={url}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            {image && (
                <meta property="twitter:image" content={image}/>
            )}
        </Helmet>
    )
}

export default TsMetaHeader