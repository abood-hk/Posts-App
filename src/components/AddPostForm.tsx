import React, { useState } from 'react';

type POST = {
  id: number;
  title: string;
  content: string;
};

type AddPostFormProps = {
  posts: POST[];
  setPosts: React.Dispatch<React.SetStateAction<POST[]>>;
};

type FormInput = {
  title: string;
  content: string;
};

const PostsTopbar = ({ posts, setPosts }: AddPostFormProps) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [formInput, setFormInput] = useState<FormInput>({
    title: '',
    content: '',
  });

  const addPost = (post: FormInput) => {
    setPosts([
      ...posts,
      { id: Date.now(), title: post.title, content: post.content },
    ]);
  };

  return (
    <div style={{ display: 'inline' }}>
      <button onClick={() => setFormVisibility(true)}>Add</button>
      {formVisibility && (
        <form>
          <input
            placeholder="The posts title"
            id="title"
            value={formInput?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormInput({ ...formInput, title: e.target.value });
            }}
            type="text"
          />
          <textarea
            placeholder="The post's content"
            id="content"
            rows={6}
            cols={20}
            value={formInput.content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setFormInput({ ...formInput, content: e.target.value });
            }}
          ></textarea>
          <button
            onClick={() => {
              setFormInput({ title: '', content: '' });
              setFormVisibility(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              addPost(formInput);
              setFormInput({ title: '', content: '' });
              setFormVisibility(false);
            }}
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default PostsTopbar;
