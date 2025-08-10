import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import AddPostForm from '../components/AddPostForm';

type POST = {
  id: number;
  title: string;
  content: string;
};

type PostsProps = {
  posts: POST[];
  setPosts: React.Dispatch<React.SetStateAction<POST[]>>;
};

const Posts = ({ posts, setPosts }: PostsProps) => {
  const [search, setSearch] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <>
      <div>
        <input
          placeholder="Serach for posts..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
        <AddPostForm posts={posts} setPosts={setPosts} />
      </div>
      <div>
        {filteredPosts.map((post) => (
          <Link to={`/posts/${post.id}`}>
            <div
              style={{
                backgroundColor: 'rgba(44, 42, 42, 1)',
                color: 'whitesmoke',
              }}
              key={post.id}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  e.preventDefault();
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
