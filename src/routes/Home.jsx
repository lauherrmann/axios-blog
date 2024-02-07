import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const request = await axios.get("https://jsonplaceholder.typicode.com/posts");

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>home</div>
    )
}

export default Home