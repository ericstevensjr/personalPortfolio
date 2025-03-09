import React from "react";
import { useParams } from "react-router-dom";
import posts from "../blog";

const SinglePost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const post = posts.find((p) => p.id === id); // Find the matching post

    if (!post) {
        return <h2 className="text-center text-xl mt-10">Post not found.</h2>;
    }

    return (
        <div className="container mx-auto px-4 md:px-8 pt-24">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-84 h-84 object-contain object-center rounded-lg mb-6" 
            />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-700 dark:text-gray-300"></div>
        </div>
    );
};

export default SinglePost;