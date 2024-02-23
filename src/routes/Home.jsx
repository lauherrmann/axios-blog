import blogFetch from '../axios/config';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";
import axios from 'axios';

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
            <h1>Carregando...</h1>
         {/*aqui vai o map  -> colocr um botao de ler mais que leva para os detalhes do post*/}
        </div>
    );
};

export default Home