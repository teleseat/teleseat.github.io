import Url from './url'

/**
 * Common Util static functions
 */
import { secretEnv } from '../secret-env'

const merge = require('deepmerge')
const detectBrowser = require('detect-browser')
const emailAddresses = require('email-addresses')



export default class Util {

    /* Environment */
    static getEnv() {
        const hostname: string = window.location.hostname
        if (hostname.startsWith('localhost'))
            return 'dev'
        else if (hostname.startsWith('stage') || hostname.startsWith('fstage1'))
            return 'stage'
        else
            return 'prod'
    }


    /* Get the server & client URL
    */
    static serverUrl(path: string = ''): string {

        // Production
        if (!window.location.host.startsWith('localhost'))
            return `https://${window.location.host}`

        return (secretEnv.serverLocal && secretEnv.serverLocal === 'localhost' ?
            'http://localhost:8080' : 'https://stage.teleseat.com') + path
    }

    static clientUrl(path: string = ''): string {
        return path.startsWith('https://') || path.startsWith('http://') ?
            path : `${window.location.protocol}//${window.location.host}${path}`
    }

    /**
     * Logging
     */
    //static readonly LOG_THRES: number = 2
    static log(msg: string, obj: any | null = null, level: string = 'info', thres: number = 0): void {
        //if (this.LOG_THRES > thres)
        console.log(`${level}: ${msg}${obj ? ': ' + JSON.stringify(obj) : ''}`)
        // if (msg.startsWith('Probably'))
        //     throw ('Server down')
    }
    static debug(msg: string, obj: any | null = null): void {
        if (Util.getEnv() !== 'prod')
            this.log(msg, obj, 'debug')
    }
    static error(msg: string, obj: any | null = null): void {
        this.log(msg, obj, 'error')
    }


    /**
     * Return map with values as ranks within array
     */
    static rankArray(arr: any[]): { [key: string]: number } {
        let ranks: any = {}
        for (let i in arr) {
            ranks[arr[i]] = i
        }
        return ranks
    }

    /**
     * Return name:object map from an array of objects
     */
    static nameArray(arr: any[]): any {
        let nameObj: any = {}
        for (let i in arr) {
            nameObj[arr[i].name] = arr[i]
        }
        return nameObj
    }

    /** Titlelize. Capitalize every word of a string, replace '_' by ' ' etc
     */
    static titleize(str: string): string {
        if (str !== str.toUpperCase())
            return str.replace('_', ' ').replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); }).trim()
        return str.trim()
    }

    /* Get filename extension & basename */
    static fileExt(filename: string, includeDot: boolean = true, lowerCase: boolean = true) {
        let ext: string = filename.split('.').pop() || ''
        if (lowerCase)
            ext = ext.toLowerCase()
        if (includeDot)
            ext = '.' + ext
        return ext
    }

    static fileBasename(filename: string) {
        const ix: number = filename.lastIndexOf('.')
        return ix >= 0 ? filename.slice(0, ix) : filename
    }

    /** Deep merge objects. Second object can be full object or keyed. Ex: { a: { b: 'c' } } vs { 'a.b': 'c' }
    */
    static merge(obj1: any, obj2: any, method: string = 'deep'): any {

        if (method === 'deep') {
            return merge(obj1, obj2)
        }
        else if (method === 'keys') {
            for (let key of Object.keys(obj2)) {
                let obj: any = obj1
                let parts = key.split('.')
                for (let p = 0; p < parts.length - 1; p++) {
                    if (!obj[parts[p]])
                        obj[parts[p]] = {}
                    obj = obj[parts[p]]
                }
                obj[parts[parts.length - 1]] = obj2[key]
            }
            return obj1
        }
        else {
            return { ...obj1, ...obj2 }
        }
    }

    /** Sanitize Form Edit data. Ex: covert all dates to UTC, all *Num to numbers */
    static sanitizeEdit(obj: any): void {
        if (!obj)
            return
        if (typeof obj === 'object') {
            for (let key of Object.keys(obj)) {
                if (key.endsWith('At')) {
                    const date = new Date(obj[key])
                    obj[key] = date.toISOString()
                }
                else if (key.endsWith('Num')) {
                    obj[key] = parseInt(obj[key])
                }
                else if (key.endsWith('Val')) {
                    obj[key] = parseFloat(obj[key])
                }
                else
                    Util.sanitizeEdit(obj[key])
            }
        }
    }

    /** Truncate long string with last word boundry */
    static truncateLongString(str: string, n: number = 200): string {
        if (!str)
            return str
        const sliceBoundary = (str: string) => str.substr(0, str.lastIndexOf(" "))
        return str.length <= n ? str : `${sliceBoundary(str.slice(0, n - 1))}...`
    }

    /* Sort an array by given field */
    static sort(array: any[], field: string, asc: boolean = true): any[] {
        const ret: number = asc ? 1 : -1
        return (array || []).sort((a1: any, a2: any) => { return a1[field] > a2[field] ? ret : -ret })
    }

    /* Shuffle an array */
    static shuffle(array: any[]): any[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    /* Checks if object is empty */
    static isEmptyObject(obj: any): boolean {
        return Object.keys(obj).length === 0;
    }

    /* Hash UUID to number */
    static hash(str: string): number {
        let hash: number = 5381
        let i: number = str.length;

        while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
        }

        /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
         * integers. Since we want the results to be always positive, convert the
         * signed int to an unsigned by doing an unsigned bitshift. */
        return hash >>> 0;
    }

    /* Generate a random unique ID of specific size, typically for transaction IDs */
    static tuid(isNumber: boolean = false, len: number = 12, charSet: string = ''): string | number {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length)
            randomString += charSet.substring(randomPoz, randomPoz + 1)
        }
        return isNumber ? Util.hash(randomString) : randomString
    }

    static objectToGetParams(obj: {
        [key: string]: string | number | undefined | null;
    }) {
        const params = Object.entries(obj)
            .filter(([, value]) => value !== undefined && value !== null)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

        return params.length > 0 ? `?${params.join('&')}` : '';
    }

    static fetchSafeFromObject(prop: {
        obj: any,
        path: (string | number)[],
        default_val: any,
    }) {
        const {
            obj,
            path = [],
            default_val
        } = prop;
        if (!obj || this.isEmptyObject(obj)) return default_val
        let fetch = path.reduce((val, path_key) => {
            return val && typeof (val[path_key]) !== "undefined" ? val[path_key] : null
        }, obj);
        if ((typeof (fetch) === "undefined" || fetch === null) && default_val !== "undefined") {
            fetch = default_val
        }
        return fetch;
    }

    /**
     * Deep copies the original object/array and returns the cloned version.
     * @param {object} obj - The original object/array that need to be cloned.
     * @returns {object} clone - Final cloned object/array.
     */
    static deepClone(obj: any) {
        const clone: any = Array.isArray(obj) ? [] : {};
        for (const i in obj) {
            if (obj[i] !== null && typeof (obj[i]) === "object") {
                clone[i] = Util.deepClone(obj[i]);
            }
            else {
                clone[i] = obj[i];
            }
        }
        return clone;
    };

    static throttle(fn: Function, ms: number) {
        let timeout: NodeJS.Timeout
        return (...args: any) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn(...args)
            }, ms)
        }
    }

    /* Process file info. Guess file type from ext */

    static FILE_EXT_TYPE: { [key: string]: string } = {}
    static guessFileType(name: string, isMimeType: boolean = false) {

        if (!this.FILE_EXT_TYPE['doc']) {
            const typeExts: { [key: string]: string } = {

                'PDF': 'pdf',
                'Document': 'c,css,doc,docx,dot,dvi,etf,h,htm,html,js,json,latex,man,msg,odt,pub,roff,rtf,rtx,sh,src,tex,texi,texinfo,txt,vcf,wpd,wri,document',
                'Spreadsheet': 'csv,ods,tsv,xla,xlc,xlm,xls,xlsm,xlsx,xlt,xlw,xlz,spreadsheet',
                'Slide': 'key,odp,pot,pps,ppt,pptx,swf,presentation',
                'Image': 'ai,bmp,dcr,eps,gif,ico,ief,jfif,jpe,jpeg,jpg,pbm,pgm,png,pnm,ps,psd,svg,tif,tiff',
                'Video': '3g2,3gp,asf,asx,avi,flv,h264,m4v,mkv,mov,movie,mp2,mp4,mpeg,mpg,qt,rm,swf,vob,wmv',
                'Audio': 'aif,aifc,aiff,m3u,mid,mp3,ra,ram,rmi,snd,wav.au',
                'Zip': '7z,bz2,gtar,gz,gzip,rar,tar,tgz,z,zip'
            }
            for (const type in typeExts) {
                for (const ext of typeExts[type].split(','))
                    this.FILE_EXT_TYPE[ext] = type
            }
        }

        name = name.slice(name.lastIndexOf('/') + 1)
        const type = (isMimeType ? this.FILE_EXT_TYPE[name] : '') || this.FILE_EXT_TYPE[this.fileExt(name, false)]
        return type || 'Other'
    }

    static processFileInfo(filename: string): { name: string, ext: string, type: string } {
        return { name: this.fileBasename(filename), ext: this.fileExt(filename), type: this.guessFileType(filename) }
    }

    static guessUrlType(urlStr: string): string {

        const type = this.guessFileType(urlStr)
        if (type !== 'Other')
            return type

        try {
            const url = new URL(urlStr)
            const typeDomains: any = {
                'Video': ['youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com', 'wistia.com', 'twitch.tv'],
                'Audio': ['soundcloud.com', 'mixcloud.com'],
                'Other': ['drive.google.com', 'docs.google.com']

            }
            for (const tp in typeDomains)
                for (const domain of typeDomains[tp])
                    if (url.hostname.includes(domain))
                        return tp
        }
        catch (exc) { }

        return 'Website'
    }

    static updateObjProp(obj: any, value: any, propPath: (string | number)[]) {
        propPath.reduce((accu, curr, level) => {
            if (!accu) return accu
            if (level === (propPath.length - 1)) {
                if (Array.isArray(accu[curr])) {
                    accu[curr].push(value)
                }
                else {
                    accu[curr] = value
                }
                return accu
            }
            return accu[curr]
        }, obj)
    };


    /* Detect browser */
    protected static browserInfo: any = undefined
    static browser() {
        if (this.browserInfo === undefined) {
            const detect = detectBrowser.detect()
            if (detect)
                Util.debug('Browser Info: ' + detect.name + ', ' + detect.version + ', ' + detect.os)
            this.browserInfo = detect ? detect : null
        }
        return this.browserInfo
    }

    /* Copy arbitrary text to clipboard */
    static textToClipboard(text: string) {
        const dummy = document.createElement('textarea')
        document.body.appendChild(dummy)
        dummy.value = text
        dummy.select()
        document.execCommand('copy')
        document.body.removeChild(dummy)
    }

    static async textFromClipboard() {
        return await navigator.clipboard.readText()
    }

    /* Match email with domain. Ex: foo@princeton.edu or foo@cs.princeton.edu */
    static matchEmailDomain(email: string, emailDomain: any): boolean {

        // Match personal email domains
        if (emailDomain === 'Work')
            return !Util.matchEmailDomain(email, ['yahoo.com', 'gmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'hotmail.com'])

        // Array of domains
        else if (emailDomain instanceof Array) {
            for (const domain of emailDomain) {
                if (Util.matchEmailDomain(email, domain))
                    return true
            }
            return false
        }

        // Match single domain
        else {
            const atDomain = emailDomain.startsWith('@') ? emailDomain : '@' + emailDomain
            const dotDomain = emailDomain.startsWith('.') ? emailDomain : '.' + emailDomain
            return email.endsWith(atDomain) || email.endsWith(dotDomain)
        }
    }

    /* Is email address a TS admin */
    static emailIsTsAdmin(email: string | undefined) {
        return email !== undefined && email.endsWith('@' + Url.DOMAIN) && !email.startsWith('demo') && !email.startsWith('temp')
    }

    /* Parse list of emails of the form: John Smith <jsmith@gmail.com>, Amy Liu <aliu@foo.com> */
    static parseEmailList(str: string) {
        return emailAddresses.parseAddressList(str) || []
    }

    /* Cleanup empty keys from object */
    static cleanObjectKeys(obj: Record<string, any>) {
        Object.keys(obj).forEach((key: string) => {
            if (!obj[key]) {
                delete obj[key]
            }
        })
    }

}
