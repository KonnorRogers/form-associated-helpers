/**
 * @template {HTMLElement} [T=HTMLElement]
 * @typedef {object} Validator
 * @property {string[]} [observedAttributes] - The attributes to listen for that may affect validations. When these attributes change, we should re-run validations. Right now, this does nothing, but will be useful for "vanilla" components.
 * @property {((...args: any[]) => string) | string} [message] - The message to display.
 * @property {(element: T & { value?: unknown }) => { message: string, isValid: boolean, invalidKeys: Array<Exclude<keyof ValidityState, "valid">> }} checkValidity
 *
 */

/**
 * @typedef { string | FormData | File | null }  FormValue
 */

export {}
