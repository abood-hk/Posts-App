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
    savedPosts ? JSON.parse(savedPosts) : []
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
