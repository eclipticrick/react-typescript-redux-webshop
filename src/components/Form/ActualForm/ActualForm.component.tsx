import React, {useState} from "react";
import {FormField, Validator} from "../FormField.interface";

const getErrors = (field: FormField): { [key: string]: string } => {
    const errors: {
        [key: string]: string
    } = {};
    const {id, value} = field;
    if (field.validators) {
        field.validators.forEach(validator => {
            switch (validator) {
                case Validator.REQUIRED:
                    if (!value) {
                        errors[Validator.REQUIRED] = `${id} is required`
                    } else {
                        delete errors[Validator.REQUIRED];
                    }
                    break;
                case Validator.POSTALCODE:
                    const regex = RegExp(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/);
                    if (!regex.test(value.replace(' ', ''))) {
                        errors[Validator.POSTALCODE] = `${id} is not a valid postal code`
                    } else {
                        delete errors[Validator.POSTALCODE];
                    }
                    break;
                case Validator.NUMBER:
                    if (Number.isNaN(+value)) {
                        errors[Validator.NUMBER] = `${id} must be a number`
                    } else {
                        delete errors[Validator.NUMBER];
                    }
                    break;
            }
        })
    }
    return errors;
};

interface IActualFormComponentProps {
    fields: FormField[]
    onSubmit: any
    isReadonly?: boolean
    submitButtonText?: string
}

const ActualFormComponent: React.FC<IActualFormComponentProps> = ({fields, onSubmit, isReadonly = false, submitButtonText = 'Submit'}) => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        const hasErrors = fields.reduce((acc, field) => {
            return acc + Object.keys(getErrors(field)).length
        }, 0) > 0;
        if (!hasErrors) {
            onSubmit()
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => {
                const {id, label, value, valueSetter} = field;
                const errors = getErrors(field);
                const keys = Object.keys(errors);
                return (
                    <div className='formField' key={id}>
                        <label>{label}</label>
                        <input value={value} onChange={({target: {value}}) => valueSetter(value)} disabled={isReadonly}/>
                        {(keys.length > 0 && submitted) && <div className='errors'>
                            {keys.map(key => <div key={'error' + id + key}>{errors[key]}</div>)}
                        </div>}
                    </div>
                )
            })}
            <button type='submit'>{submitButtonText}</button>
        </form>
    )
};

export default ActualFormComponent;
