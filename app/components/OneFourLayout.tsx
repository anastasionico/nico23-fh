import ArticleHeader from "./ArticleHeader";
import ArticleLatest from "./ArticleLatest";
import CardsList from "./CardsList";

const OneFourLayout = () => {
    var articles = [
        {
            'title': 'one',
            'url': 'www.google.com',
            'published_at': '08 Aug 2023',
        },
        {
            'title': 'two',
            'url': 'www.google.com',
            'published_at': '10 Aug 2023',
        },
        {
            'title': 'three',
            'url': 'www.google.com',
            'published_at': '11 Aug 2023',
        },
        {
            'title': 'four',
            'url': 'www.google.com',
            'published_at': '14 Aug 2023',
        }
    ];

    return (
        <section className="px-3 py-3 mx-md-5 text-primary article-home-section">
            <ArticleHeader title="Most Recent Posts"/>
            <ArticleLatest/>
            <CardsList articles={articles}/>
        </section>        
    )
};

export default OneFourLayout;