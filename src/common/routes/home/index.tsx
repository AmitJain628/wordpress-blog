import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { IMenu, IPosts, ITags } from '@src/common/types/blog';
import Menu from '@src/common/components/Menu/index';
import Tags from '@src/common/components/Tags';
import DropDown from '@src/common/components/Dropdown';
import Post from '@src/common/components/Post';

import { mapDispatchToProps, mapStateToProps } from './container';
import { StyledImg, StyledPostContainer } from './styles';

interface IProps extends RouteComponentProps {
  menu: IMenu[];
  tags: ITags[];
  posts: IPosts[];
  getMenu(): void;
  getTags(): void;
  getPosts(category: string | null, tag: string | null): void;
}

const Home: React.FC<IProps> = ({ getMenu, getTags, getPosts, posts, menu, tags }): JSX.Element => {

  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    getMenu();
    getTags();
    getPosts(null, null);
  }, []);

  const onCategoryChange = (value: string) => {
    getPosts(value, selectedTag === 'all' ? null : selectedTag);
    setSelectedCategory(value);
  };
  const onTagChange = (value: string) => {
    getPosts(selectedCategory === 'All categories' ? null : selectedCategory, value);
    setSelectedTag(value);
  };

  return (
        <>
        <Menu menu={menu} />
        <StyledImg className='header-image' src='https://i.ibb.co/S0bKYtM/header.jpg' />
        <DropDown menu={menu} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
        <Tags tags={tags} selectedTag={selectedTag} onTagChange={onTagChange} />
        <StyledPostContainer>{posts && posts.map((post => <Post key={post.id} post={post} />))}</StyledPostContainer>
        </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
