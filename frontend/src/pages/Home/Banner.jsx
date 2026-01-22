/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
import bgImg from "../../assets/blogs/blog-0.png";
import authorImg from "../../assets/author.png";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold"
        >
          Meta Blog
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <li>
            <Link
              to="/"
              className="bg-secondary/10 hover:text-secondary hover:underline underline-offset-4 rounded-full py-1 px-2.5"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog/addBlog"
              className="bg-secondary/10 hover:text-secondary hover:underline underline-offset-4 rounded-full py-1 px-2.5"
            >
              Add Blog
            </Link>
          </li>
          <li>
            <Link
              to="/blog/manageBlog"
              className="bg-secondary/10 hover:text-secondary hover:underline underline-offset-4 rounded-full py-1 px-2.5"
            >
              Manage Blog Blog
            </Link>
          </li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        <div
          className="md:min-h-[450px h-80 w-full bg-center bg-cover bg-no-repeat rounded-md"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="flex flex-col h-full justify-end p-5">
            <span className="bg-secondary text-center max-w-36 px-4 py-1 mb-3 rounded-md">
              Technology
            </span>
            <h2 className="sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            <div className="flex items-center gap-1">
              <img src={authorImg} alt="size-8" />
              <div className="flex flex-wrap items-center space-x-4">
                <span className="ml-2 text-base cursor-pointer hover:underline underline-offset-2">
                  Tracey Wilson
                </span>
                <span className="text-sm italic">20 Jan, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
