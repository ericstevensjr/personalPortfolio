import React from "react";
import posts from "../blog";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-10 border-b pb-6">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-500 text-sm">{post.date}</p>
          <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
