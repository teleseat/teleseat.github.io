/**
 * Common URL static functions
 */

export default class Url {

    /* Domain name for app */
    static DOMAIN: string = 'teleseat.com'

    static isProd() {
        return window.location.host.startsWith(Url.DOMAIN)
    }

    /* Get key value mapping of url search params */
    static getParams(search: string): { [key: string]: string } {
        const searchParams: { [key: string]: string } = {}
        if (search.length) {
            let searchString = search.substring(1)
            searchString.split('&').map((params: string) => {
                const paramArr = params.split('=')
                searchParams[paramArr[0]] = paramArr[1]
                return true
            })
        }
        return searchParams
    }

    /* Compose URL param string from key-value pairs */
    static getParamString(obj: { [key: string]: string | number | undefined | null; }): string {

        const params = Object.entries(obj)
            .filter(([, value]) => value !== undefined && value !== null)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

        return params.length > 0 ? `?${params.join('&')}` : '';
    }

    /* Add Param */
    static addParam(url: string, param: string, value: string) {
        const addPrefix: string = (url.indexOf('?') < 0) ? '?' : '&'
        return url + addPrefix + param + '=' + value
    }

}
