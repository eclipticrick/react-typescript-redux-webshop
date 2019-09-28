import React from 'react';
import './NavigationBar.scss';
import CartComponent from "./Cart";

const NavigationBarComponent: React.FC = () => (
    <div className='NavigationBarComponent elevation-1'>
        <div className='container'>
            <CartComponent/>
        </div>
    </div>
);

export default NavigationBarComponent;
