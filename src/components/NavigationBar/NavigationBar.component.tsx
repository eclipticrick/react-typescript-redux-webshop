import React from 'react';
import './NavigationBar.scss';
import CartComponent from "./Cart";
import homeWhiteIcon from "../../assets/white/home.svg";
import penWhiteIcon from "../../assets/white/pen.svg";
import {Link} from "react-router-dom";

const NavigationBarComponent: React.FC = () => (
    <div className='NavigationBarComponent elevation-1'>
        <div className='container'>
            <div className='navButton'>
                <Link to='/'>
                    <img src={homeWhiteIcon} alt='' height={24}/>
                </Link>
            </div>
            <div className='navButton'>
                <Link to='form'>
                    <img src={penWhiteIcon} alt='' height={24}/>
                </Link>
            </div>
            <CartComponent/>
        </div>
    </div>
);

export default NavigationBarComponent;
