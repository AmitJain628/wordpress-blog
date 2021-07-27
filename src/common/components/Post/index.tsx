import React from 'react';
import { IPosts } from '@src/common/types/blog';

import { StyledPost } from './style';

interface IProps {
    post: IPosts;
}

const Post: React.FC<IProps> = ({ post }): JSX.Element => {
    return (
         <StyledPost>
         <p>{post.categoryName}</p>
         <img src={post.thumbnail} className='image-container' />
         <p>{post.time}</p>
         </StyledPost>
     );
};

export default Post;
