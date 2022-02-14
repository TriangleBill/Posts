import React from 'react';

export default function Alert({ text }) {
    return (
        <div className="alert alert-warning" role="alert">
           {text}
        </div>
    );
}
