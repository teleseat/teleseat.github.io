export interface FormCssClassType {
    className?: string
    labelClass?: string
    inputClass?: string
    moreClass?: string
}

export const tsRegex: Record<string, RegExp> = {
    email: /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/,
    domain: /([a-zA-Z0-9]+\.)?([a-zA-Z0-9][a-zA-Z0-9-]*)?((\.[a-zA-Z]{2,6})|(\.[a-zA-Z]{2,6})(\.[a-zA-Z]{2,6}))$/,
    number: /[0-9]+/,
    phoneNumber: /([0-9\s-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
    color: /^#(?:[0-9a-f]{3}){1,2}$/,
}