import React from 'react';
import './LayoutSwitch.scss';
import columnsBlackIcon from '../../../../assets/black/columns.svg'
import rowsBlackIcon from '../../../../assets/black/rows.svg'
import columnsWhiteIcon from '../../../../assets/white/columns.svg'
import rowsWhiteIcon from '../../../../assets/white/rows.svg'
import {Layout} from "../../../../store/interfaces/Layout";
import classNames from 'classnames';

const LayoutSwitchComponent: React.FC<{ layout: Layout, setLayout: (layout: Layout) => void }> = ({ layout, setLayout }) => (
    <div className='LayoutSwitch'>
        <div className={classNames('button', { 'active': layout === Layout.COLUMNS })} onClick={() => setLayout(Layout.COLUMNS)}>
            <img src={layout === Layout.COLUMNS ? columnsWhiteIcon : columnsBlackIcon} alt='columns'/>
        </div>
        <div className={classNames('button', { 'active': layout === Layout.ROWS })} onClick={() => setLayout(Layout.ROWS)}>
            <img src={layout === Layout.ROWS ? rowsWhiteIcon : rowsBlackIcon} alt='rows'/>
        </div>
    </div>
);

export default LayoutSwitchComponent;
