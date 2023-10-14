import { useState, useEffect } from "react";
import React from "react";
import Form from "./Form";

function App() {
  const [posts, setPosts] = useState([]);
  const Post = function Post(props) {
    return (
      <div className="post-card">
        <h2 className="post-title">{props.title}</h2>
        <p className="post-body">{props.body}</p>
        <button
          className="btn-delete"
          onClick={() => props.deletePost(props.id)}
        >
          delete
        </button>
      </div>
    );
  };

  const fetchPosts = async () => {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4"
    );
    const data1 = await response1.json();

    const combinedData = [...data1];

    setPosts(combinedData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (title, body) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setPosts((prevPosts) => [data, ...prevPosts]);
  };

  const deletePost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    }
  };

  return (
    <main>
      <h2>Posts</h2>
      <section className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            deletePost={deletePost}
          />
        ))}
      </section>
    </main>
  );
}
export default App;
