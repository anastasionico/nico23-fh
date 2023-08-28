import Link from "next/link"
import ArticleExtraData from "./ArticleExtraData"

const CardsList = ({articles}) => {
    const getArticles = articles.map((article) => {
        return (
            <li className="my-3 rounded-2 p-3">
                <small>{article.category}</small> 
                <h3>{article.title}</h3> 
                <ArticleExtraData publishedAt={article.published_at} url={article.url}/>
            </li>
        )
    });

    return (
        <div className="my-3 article-home-section-previous">
            <ul className="article-previous-list list-group-numbered">
                {getArticles}
            </ul>
        </div>
    )
}

export default CardsList