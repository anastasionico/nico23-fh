import ArticleHeader from "./ArticleHeader";
import BannerVertical from "./BannerVertical";
import CardsList from "./CardsList";

const SixOneLayout = () => {
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
        },
        {
            'title': 'five',
            'url': 'www.google.com',
            'published_at': '14 Aug 2023',
        },
        {
            'title': 'six',
            'url': 'www.google.com',
            'published_at': '14 Aug 2023',
        }
    ];

    return (
        <section className="px-3 py-3 mx-md-5 text-primary">
            <ArticleHeader title="Editor’s Picks"/>
            
            <div className="col-sm-12">
                <CardsList articles={articles}/>
            </div>

            <div className="col-sm-12">
                <BannerVertical/>
            </div>
      </section>
    )
}

export default SixOneLayout;