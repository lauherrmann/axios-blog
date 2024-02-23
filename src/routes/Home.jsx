import blogFetch from "../axios/config"
import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';


import "./Home.css";

const Home = () => {
    const [posts, setPosts] = useState([]);

    //separar a requisicao em outro arquivo
    const getPosts = async() => {
        try {
            const response = await blogFetch.get("/posts");

            const data = await response.data;

            setPosts(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div>
                {posts.length === 0 ? (<p>Carregando...</p>) : (
                    posts.map((post) => (
                        <Card 
                            key={post.id}
                            cardTitle={post.title}
                            cardParagraph={post.body}
                            cardDetails={'/'}
                        />
                    ))
                )} 
                
            </div>
            
        </div>
    );
};

export default Home