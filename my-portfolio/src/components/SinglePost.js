import React from "react";
import { useParams } from "react-router-dom";
import posts from "../blog";
import "../styles/blog.css";

const SinglePost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const post = posts.find((p) => p.id === id); // Find the matching post

    if (!post) {
        return <h2 className="text-center text-xl mt-10">Post not found.</h2>;
    }

    // Automatically inject class names into blog content
    const formattedContent = post.content
        .replace(/<h1>/g, '<h1 class="blog-heading">')
        .replace(/<h2>/g, '<h2 class="blog-subheading">')
        .replace(/<h3>/g, '<h3 class="blog-subsubheading">')
        .replace(/<p>/g, '<p class="blog-paragraph">');


    return (
        <div className="container mx-auto px-4 md:px-8 pt-24">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-[800px] max-w-full h-[500px] max-h-[600px] object-contain rounded-full mx-auto"
            />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-700 dark:text-gray-300"></div>
        </div>
    );
};

export default SinglePost;