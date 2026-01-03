import React from 'react';
import { Navigate } from 'react-router';

const HomePage = () => {
    return (
        <div>
            <Navigate to={"/category/0"}></Navigate>
        </div>
    );
};

export default HomePage;