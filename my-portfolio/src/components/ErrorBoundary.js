import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, errorMessage: error.toString() };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error for debugging
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold text-red-600">Something went wrong</h2>
                    <p className="text-gray-700 dark:text-gray-300">{this.state.errorMessage}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Refresh Page
                    </button>
               </div>
            );
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;