import Image from "next/image";
import ArticleExtraData from "./ArticleExtraData";

const ArticleLatest = () => {
    var article = {
            'title': 'six',
            'url': 'www.google.com',
            'published_at': '14 Aug 2023',
        }

    return (
        <div className="card my-3 article-home-section-latest p-3">
            <h3>this is a title</h3> 
            <Image
                src="/img/blog/hello.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-3"
            />  
            <p className="m-0 py-3">this is a description of Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloribus. Ratione nulla quas, at rem dolor sequi beatae earum voluptate quia magnam tenetur porro reiciendis sint! Sit deserunt eius fugit!</p>
            <ArticleExtraData publishedAt={article.published_at} url={article.url}/>
        </div>
    )
}

export default ArticleLatest;