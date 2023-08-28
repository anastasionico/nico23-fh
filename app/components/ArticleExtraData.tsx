import Link from "next/link";

const ArticleExtraData = (props) => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center">
            <small className="align-middle opacity-50">{props.publishedAt}</small>
            
            <Link href={props.url} className="d-inline-block btn btn-sm btn-primary float-end">Read Article</Link>
        </div>
    )
}

export default ArticleExtraData;