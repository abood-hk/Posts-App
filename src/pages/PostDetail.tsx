import { useParams } from 'react-router-dom';
import React from 'react';

type POST = {
  id: number;
  title: string;
  content: string;
};

type PostDetailProps = {
  posts: POST[];
  setPosts: React.Dispatch<React.SetStateAction<POST[]>>;
};

const PostDetail = ({ posts }: PostDetailProps) => {
  const { id } = useParams<string>();
  if (!id || isNaN(Number(id))) return <h1>No post with this id</h1>;
  const post: POST = posts.filter((post) => post.id === parseInt(id))[0];
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <p>{post.id}</p>
    </div>
  );
};

export default PostDetail;
