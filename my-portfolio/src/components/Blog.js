import React from 'react';

const Blog = () => {
  if (true) {
    throw new Error("Testing Error Boundary in Blog page");
  }
  return (
    <div className="container mx-auto px-4 md:px-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div>
        {/* Add your blog posts here */}
        <p>Welcome to the blog! Content coming soon.</p>
      </div>
    </div>
  );
};

export default Blog;
