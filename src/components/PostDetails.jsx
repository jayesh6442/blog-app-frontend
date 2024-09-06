import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  const deletePost = async () => {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    navigate("/");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};

export default PostDetails;
