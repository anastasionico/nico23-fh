import Link from "next/link"

const ArticlePrevious = () => {
    const articles = [
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
        }
    ];
    const getArticles = articles.map((value) => {
        return (
            <li className="my-3">
                <h3>{value.title}</h3> 
                <div>
                    <small>{value.published_at}</small>
                    <Link href={value.url} className="d-inline-block btn btn-primary float-end">Read Article</Link>
                </div>
            </li>
        )
    });

    return (
        <div className="my-3 article-home-section-previous">
            <ul className="article-previous-list">
                {getArticles}
            </ul>
        </div>
    )
}

export default ArticlePrevious