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
            <li>
                <h3>{value.title}</h3> 
                <Link href={value.url} className="btn btn-primary">Read Article</Link>
                <small>{value.published_at}</small>
            </li>
        )
    });

    return (
        <div className="card  my-3 article-home-section-latest">
            <ul>
                {getArticles}
            </ul>
        </div>
    )
}

export default ArticlePrevious