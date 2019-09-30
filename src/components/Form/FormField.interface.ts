
export enum Validator {
    REQUIRED = 'required',
    POSTALCODE = 'postalcode',
    NUMBER = 'nr'
}
export interface FormField {
    id: string,
    label: string,
    value: string,
    valueSetter: (value: any) => void,
    validators?: Validator[]
}
