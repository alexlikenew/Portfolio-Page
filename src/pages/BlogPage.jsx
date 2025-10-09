import React from 'react';
import {useParams} from "react-router";
import {useArticleById} from "../features/articles/useArticlebyId.jsx";
import {getArticleById} from "../services/apiArticles.jsx";

function BlogPage(props) {

    const {url} = useParams();


    const {data: article, isPending, error} = useArticleById(url)

    console.log(article)

    return (
        <div></div>
    );
}

export default BlogPage;