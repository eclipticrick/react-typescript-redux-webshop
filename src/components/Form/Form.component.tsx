import React, {useState} from 'react';
import './Form.scss';

enum Validator {
    REQUIRED = 'required',
    POSTALCODE = 'postalcode',
    NUMBER = 'nr'
}
interface FormField {
    id: string,
    label: string,
    value: string,
    valueSetter: (value: any) => void,
    validators?: Validator[]
}

const FormComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [addition, setAddition] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const fields: FormField[] = [
        {
            id: 'name',
            label: 'Naam',
            value: name,
            valueSetter: setName,
            validators: [Validator.REQUIRED]
        },
        {
            id: 'postalCode',
            label: 'Postcode',
            value: postalCode,
            valueSetter: setPostalCode,
            validators: [Validator.REQUIRED, Validator.POSTALCODE]
        },
        {
            id: 'houseNumber',
            label: 'Huisnummer',
            value: houseNumber,
            valueSetter: setHouseNumber,
            validators: [Validator.REQUIRED, Validator.NUMBER]
        },
        {
            id: 'addition',
            label: 'Toevoeging',
            value: addition,
            valueSetter: setAddition
        },
    ];

    const getErrors = (id: string, value: string): { [key: string]: string } => {
        const errors: {
            [key: string]: string
        } = {};
        const field = fields.find(field => field.id === id);
        if (field && field.validators) {
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

    const onSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(true)
    };

    return (
        <div className='FormComponent container'>
            <section>
                <form onSubmit={onSubmit}>
                    {fields.map(({id, label, value, valueSetter}) => {
                        const errors = getErrors(id, value);
                        const keys = Object.keys(errors);
                        return (
                            <div className='formField' key={id}>
                                <label>{label}</label>
                                <input value={value} onChange={({ target: { value } }) => valueSetter(value)}/>
                                {(keys.length > 0 && submitted) && <div className='errors'>
                                    {keys.map(key => <div key={'error' + id + key}>{errors[key]}</div>)}
                                </div>}
                            </div>
                        )
                    })}
                    <button type='submit'>gogogo</button>
                </form>
            </section>
            <section>
                Adres
            </section>
        </div>
    );
}

export default FormComponent;
