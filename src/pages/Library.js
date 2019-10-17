import React from 'react';
import { Link } from 'react-router-dom';

function Library() {
    return (
        <div>
            <h1>Library page</h1>
            <Link to="/">
                <button>
                    Go back to Home Page
                </button>
            </Link>
        </div>
    );
}

export default Library;