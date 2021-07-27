import React from 'react';
import { IMenu } from '@src/common/types/blog';

import { StyledMenu } from './style';

interface IProps {
    menu: IMenu[];
}

const Menu: React.FC<IProps> = ({ menu }): JSX.Element => {
     return (
         <StyledMenu>
          <a href='' className='logo'>CSS Nav</a>
          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'><span className='navicon' /></label>
         <ul className='menu'>
            {menu && menu.map(el => <li key={el.ID}><a href='#work'>{el.name}</a></li>)}
         </ul>
         </StyledMenu>
     );
};

export default Menu;
