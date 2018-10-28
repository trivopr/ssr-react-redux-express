import React, { Component } from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.isNotFoundPage = true;
    return (
        <div>
            <h2 className="center">NOT FOUND PAGE</h2>
        </div>
    );
}

export default {
    component: NotFoundPage
};