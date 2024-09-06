import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://blog-app-backend-nghg.onrender.com/api/posts", {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
    alert("created");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Create New Post</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          style={{
            padding: "1rem",
            margin: "2rem",
          }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          style={{
            padding: "1rem",
            margin: "2rem",
          }}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
