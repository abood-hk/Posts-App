import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Posts from './Posts';
import PostDetail from './PostDetail';
import NotFound from './NotFound';

type POST = {
  id: number;
  title: string;
  content: string;
};

const PostParent = () => {
  const savedPosts = localStorage.getItem('savedPosts');
  const [posts, setPosts] = useState<POST[]>(
    savedPosts
      ? JSON.parse(savedPosts)
      : [
          {
            id: Date.now(),
            title: 'First Post',
            content: 'This going to be real fun',
          },
          {
            id: Date.now(),
            title: 'Intresting',
            content: 'Everything i nice i hope i can blow up on this site',
          },
          {
            id: Date.now(),
            title: 'Nice',
            content: 'React is going to be fun',
          },
        ]
  );
  useEffect(() => {
    localStorage.setItem('savedPosts', JSON.stringify(posts));
  }, [posts]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts posts={posts} setPosts={setPosts} />} />
        <Route
          path=":id"
          element={<PostDetail posts={posts} setPosts={setPosts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PostParent;
