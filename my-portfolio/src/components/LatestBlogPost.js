import React from "react";
import posts from "../blog"; // Import all blog posts

function LatestBlogPost() {
    console.log("LatestBlogPost Component Loaded"); // Debugging message
    console.log("Blog Posts in Homepage:", posts); // Debugging message to check if posts exist

    if (!posts || posts.length === 0) {
        console.error("No blog posts found.");
        return <p className="text-center text-gray-500">No blog posts available.</p>; // ✅ Prevents crash if no posts
    }

    const latestPost = posts[0]; // Get the most recent post

    return (
        <div className="mt-10 p-6 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-2">Latest Blog Post</h2>
            <h3 className="text-xl">{latestPost.title}</h3>
            <p className="text-gray-500 text-sm">{latestPost.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{latestPost.excerpt}</p>
            <a href={`/blog/${latestPost.id}`} className="text-blue-600 hover:underline">
                Read more →
            </a>
        </div>
    );
}

export default LatestBlogPost;
