import React from 'react';
import './Button.scss';
import classNames from 'classnames';

export enum ButtonType {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    WARNING = 'warning',
    DANGER = 'danger',
}
const ButtonComponent: React.FC<{ type?: ButtonType, onClick?: any }> = ({ children, type = ButtonType.PRIMARY, onClick = null }) => (
    <button className={classNames('ButtonComponent', type)} onClick={onClick}>{children}</button>
);

export default ButtonComponent;
