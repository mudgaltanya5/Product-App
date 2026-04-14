import React from 'react';

function Error({ message, onRetry }) {
    return (
        <div className="text-center mt-5 p-4">
            <h1>⚠️</h1>

            <h4 className="text-danger">{message || "Something went wrong"}</h4>

            <p className="text-muted">
                Please check your internet connection and try again
            </p>

            <button
                className="btn btn-dark mt-3"
                onClick={() => onRetry && onRetry()}
            >
                Retry
            </button>
        </div>
    );
}
export default Error;