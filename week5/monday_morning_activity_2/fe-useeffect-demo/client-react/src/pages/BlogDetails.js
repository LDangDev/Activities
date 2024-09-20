import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { REACT_APP_API_URL } from "../utils/apiConfig";
const apiUrl = `${REACT_APP_API_URL}/api/blogs`;

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`${apiUrl}/${id}`);
      console.log(`${apiUrl}/${id}`);
      const json = await response.json();

      if (response.ok) {
        setBlog(json);
      }
    };

    fetchBlog();
  }, [id]);

  // const handleClick = () => {
  //   console.log("Delete blog");
  // }

  const handleClick = async () => {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  // const handleClick = () => {
  //   fetch(`${apiUrl}/${id}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     navigate("/");
  //   });
  // };

  // const handleClick = async () => {
  //   try {
  //     await fetch(`${apiUrl}/${id}`, {
  //       method: "DELETE",
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error deleting blog:", error);
  //   }
  // };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
