/**
 * Props interface for pages with pattern  a/../b/:id
 */

import { RouteComponentProps } from 'react-router-dom'

interface PageProps extends RouteComponentProps<{
    id?: string
    key?: string
}> {
    // global props here
    pageData?: Record<string, any>
    dispatchPageData?: Function
}

export default PageProps
