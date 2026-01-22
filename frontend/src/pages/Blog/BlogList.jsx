import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
  const { searchTerm } = useContext(BlogContext);
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
      .catch((error) => console.error("Error fetching blog data: " + error));
  }, []);
  console.log(blogs);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMoreBlogs = () => {
    setShowBlogs((prev) => prev + 3);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.slice(0, showBlogs).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      {showBlogs < filteredBlogs.length && (
        <div className="flex justify-center items-center mt-8 mb-5">
          <button
            onClick={handleMoreBlogs}
            className="bg-secondary rounded-md text-white hover:bg-secondary/80 font-semibold flex items-center justify-center px-6 py-2 gap-1 transition-colors duration-200"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
