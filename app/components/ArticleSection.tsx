import ArticleHeader from "./ArticleHeader";
import ArticleLatest from "./ArticleLatest";
import ArticlePrevious from "./ArticlePrevious";

const ArticleSection = () => {
    return (
        <section className="px-3 py-3 text-primary article-home-section">
            <ArticleHeader/>
            <ArticleLatest/>
            <ArticlePrevious/>
        </section>        
    )
};

export default ArticleSection;