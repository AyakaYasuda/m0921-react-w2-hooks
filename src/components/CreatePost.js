import React, { useContext, useRef, useState } from "react";
import { PostContext } from "../App";

const CreatePost = ({ user }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const { dispatch } = useContext(PostContext);

  const submitHandler = e => {
    e.preventDefault();
    if (!content && !image) {
      return alert("Fields must not be empty");
    }

    const post = { user, image, content, id: new Date() };
    // setPosts(prevPosts => [...prevPosts, post]);
    dispatch({ type: "ADD_POST", payload: { post } });

    setContent("");
    setImage(null);
    imageInputRef.current.value = "";
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add Post Content"
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <input
          type="file"
          ref={imageInputRef}
          onChange={e => {
            setImage(e.target.files[0]);
          }}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
