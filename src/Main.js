import React, { useContext, useEffect, useReducer, useState } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export const UserContext = React.createContext();
export const PostContext = React.createContext({ posts: [] });

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPost = action.payload.post;
      return {
        posts: [newPost, ...state.posts],
      };

    case "DELETE_POST":
      return {
        posts: state.posts.filter(post => post.id !== action.payload),
      };

    default:
      return state;
  }
};

const initialUserState = { user: "" };

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload.username,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: "",
      };

    default:
      return state;
  }
};

const loginAction = { type: "LOGIN_USER", payload: { username: "test" } };
const logoutAction = { type: "LOGOUT_USER" };

console.log(userReducer(initialUserState, loginAction));
console.log(userReducer(initialUserState, logoutAction));

const Main = () => {
  const [user, setUser] = useState("test");
  // const [posts, setPosts] = useState([]);

  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default Main;
