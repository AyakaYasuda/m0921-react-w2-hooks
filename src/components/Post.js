import React, { useContext } from "react";
import { PostContext, UserContext } from "../Main";

const Post = ({ user, image, content, id }) => {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user;

  const deleteHandler = postId => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="upload"
          style={{ height: 200 }}
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
      {isCurrentUser && (
        <button onClick={() => deleteHandler(id)}>delete</button>
      )}
    </>
  );
};

export default Post;
