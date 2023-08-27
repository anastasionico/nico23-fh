import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link"

const ArticleLatest = () => {
    return (
        <div className="card my-3 article-home-section-latest">
            <h3>this is a title</h3> 
            <Image
                src="/img/blog/hello.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />  
            <p>this is a description of Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloribus. Ratione nulla quas, at rem dolor sequi beatae earum voluptate quia magnam tenetur porro reiciendis sint! Sit deserunt eius fugit!</p>
            <div>
                <small className="align-middle">11 Aug 2023</small>
                <Link href="/hello" className="d-inline-block btn btn-primary float-end">Read Article</Link>
            </div>
        </div>
    )
}

export default ArticleLatest;