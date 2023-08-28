import ArticleHeader from "./ArticleHeader"
import CardsList from "./CardsList";

const ThreeLayout = (props) => {
    var articles = [
        {
            'title': 'one',
            'url': 'www.google.com',
            'category': 'PHP',
            'published_at': '08 Aug 2023',
        },
        {
            'title': 'two',
            'url': 'www.google.com',
            'category': 'PHP',
            'published_at': '10 Aug 2023',
        },
        {
            'title': 'three',
            'url': 'www.google.com',
            'category': 'PHP',
            'published_at': '11 Aug 2023',
        }
    ];

    return (
        <section className="px-3 py-3 mx-md-5 text-primary article-home-section">
            <ArticleHeader title={props.title}/>

            <div className="col-sm-12">
                <CardsList articles={articles}/>
            </div>
        </section>
    )
}

export default ThreeLayout