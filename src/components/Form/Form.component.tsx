import React, {useState} from 'react';
import './Form.scss';
import {FormField, Validator} from "./FormField.interface";
import ActualFormComponent from "./ActualForm/ActualForm.component";

const FormComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [addition, setAddition] = useState('');

    const findFormFields: FormField[] = [
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

    const [apiCity, setApiCity] = useState('');
    const [apiHouseNumberWithAddition, setApiHouseNumberWithAddition] = useState('');
    const [apiLatitude, setApiLatitude] = useState('');
    const [apiLongitude, setApiLongitude] = useState('');
    const [apiPostalCode, setApiPostalCode] = useState('');
    const [apiProvince, setApiProvince] = useState('');
    const [apiStreet, setApiStreet] = useState('');

    const [error, setError] = useState('');
    const [addressFormShown, setAddressFormShown] = useState(false);
    const [addressFormEditable, setAddressFormEditable] = useState(false);

    const addressFormFields: FormField[] = [
        {
            id: 'city',
            label: 'Stad',
            value: apiCity,
            valueSetter: setApiCity,
            validators: [Validator.REQUIRED]
        },
        {
            id: 'house_number',
            label: 'Huisnummer & Toevoeging',
            value: apiHouseNumberWithAddition,
            valueSetter: setApiHouseNumberWithAddition,
            validators: [Validator.REQUIRED]
        },
        {
            id: 'latitude',
            label: 'latitude',
            value: apiLatitude,
            valueSetter: setApiLatitude,
            validators: []
        },
        {
            id: 'longitude',
            label: 'longitude',
            value: apiLongitude,
            valueSetter: setApiLongitude,
            validators: []
        },
        {
            id: 'postcode',
            label: 'postcode',
            value: apiPostalCode,
            valueSetter: setApiPostalCode,
            validators: [Validator.REQUIRED]
        },
        {
            id: 'province',
            label: 'province',
            value: apiProvince,
            valueSetter: setApiProvince,
            validators: [Validator.REQUIRED]
        },
        {
            id: 'street',
            label: 'Straat',
            value: apiStreet,
            valueSetter: setApiStreet,
            validators: [Validator.REQUIRED]
        },
    ];

    const onFindFormSubmit = (e: any) => {
        fetchAndFillAddressForm();
        setAddressFormShown(true)
    };

    const fetchAndFillAddressForm = () => {
        const postcode = findFormFields.find(field => field.id === 'postalCode')!.value.replace(' ', '');
        const number = findFormFields.find(field => field.id === 'houseNumber')!.value;
        const addition = findFormFields.find(field => field.id === 'addition')!.value;
        fetch(`/postcode?postcode=${postcode}&number=${number}${addition}`, {
            headers: {
                token: '2855214f-86db-4abd-9bcc-31b69b8f3b3c'
            }
        }).then(res => {
            if (res.status !== 200) {
                throw new Error('fuck')
            }
            return res.json()
        }).then(({city, house_number, latitude, longitude, postcode, province, street}) => {
            setApiCity(city);
            setApiHouseNumberWithAddition(house_number);
            setApiLatitude(latitude);
            setApiLongitude(longitude);
            setApiPostalCode(postcode);
            setApiProvince(province);
            setApiStreet(street);
            setAddressFormEditable(false)
        }).catch(err => {
            setError(`The address with postalcode "${postcode}" and house number ${number}${addition} could not be found, please fill in the address manually or search again`)
            setAddressFormEditable(true)
        });
    };

    const onAddressFormSubmit = () => {
        alert('OK')
    };

    return (
        <div className='FormComponent container'>
            {error !== null && <div className='error'>{error}</div>}
            <section>
                <ActualFormComponent
                    fields={findFormFields}
                    onSubmit={onFindFormSubmit}
                    submitButtonText='find'/>
            </section>
            <section>
                {addressFormShown && (
                    <>
                        {!addressFormEditable && <button className='edit' onClick={() => setAddressFormEditable(true)}>edit</button>}
                        <ActualFormComponent
                            fields={addressFormFields}
                            onSubmit={onAddressFormSubmit}
                            isReadonly={!addressFormEditable}/>
                    </>
                )}
            </section>
        </div>
    );
};

export default FormComponent;
