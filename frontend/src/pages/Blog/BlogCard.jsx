import React from "react";
import { Link } from "react-router";
import Reveal from "../../animation/Reveal";

const BlogCard = ({ blog }) => {
  return (
    <Reveal>
      <div className="border rounded-lg p-4 bg-white shadow-md">
        <Link to={`/blogs/${blog?._id}`}>
          <img
            src={blog.image}
            alt="Image "
            className="w-full h-48 rounded-lg shadow-md hover:scale-105 transition-all duration-200 object-cover mb-4"
          />
        </Link>
        <div>
          <p className="bg-secondary/5 inline-block text-sm text-secondary px-3 py-1 rounded-md mb-3">
            Technology
          </p>
          <Link to={`/blogs/${blog?._id}`}>
            <h3 className="text-xl font-semibold text-gray-800 hover:text-secondary mb-2">
              {blog.title}
            </h3>
          </Link>
          <p className="text-gray-500">
            {`${blog.description.substring(0, 150)}`}...
          </p>

          <div className="mt-4 flex items-center">
            <img
              src={blog.author.image}
              alt=""
              className="size-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm text-gray-600">{blog.author.name}</p>
              <p className="text-xs text-gray-400">
                {blog?.date ? (
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                ) : (
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default BlogCard;
