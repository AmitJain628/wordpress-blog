import React from 'react';
import { IMenu } from '@src/common/types/blog';

import { StyledDropdown } from './style';

interface IProps {
    menu: IMenu[];
    selectedCategory: string;
    onCategoryChange(value: string): void;
}

const Dropdown: React.FC<IProps> = ({ menu, selectedCategory, onCategoryChange }): JSX.Element => {
    return (
         <StyledDropdown>
         <h1>Latest articles</h1>
         <label className='dropdown'>
            <div className='dd-button'>
                {selectedCategory}
            </div>
            <input type='checkbox' className='dd-input' id='test' />
            <ul className='dd-menu'>
                {menu && menu.map(el => <li onClick={() => onCategoryChange(el.name)} key={el.ID}>{el.name}</li>)}
                <li className='divider' />
                <li>
                <a href='http://rane.io'>Link to Rane.io</a>
                </li>
            </ul>
         </label>
         </StyledDropdown>
     );
};

export default Dropdown;
