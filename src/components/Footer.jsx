import React from 'react';

function Footer() {
    return (
        <div className = "py-5 text-center text-sm mt-2 text-gray-300">
            <p>
                &copy;{new Date().getFullYear()} by Justin Coleman
            </p>
            <p>
                All rights reserved.
            </p>
        </div>
    )
}

export default Footer;