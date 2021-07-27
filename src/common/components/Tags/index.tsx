import React from 'react';
import { ITags } from '@src/common/types/blog';

import { StyledTags } from './style';

interface IProps {
    tags: ITags[];
    selectedTag: string;
    onTagChange(value: string): void;
}

const Tags: React.FC<IProps> = ({ tags, onTagChange }): JSX.Element => {
    return (
         <StyledTags>
         <h2>Tags</h2>
         {tags && tags.map(el => <button onClick={() => onTagChange(el.name)} key={el.ID} className='button'>{el.name}</button>)}
         </StyledTags>
     );
};

export default Tags;
