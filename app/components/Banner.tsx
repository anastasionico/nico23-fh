import Link from "next/link";


const Banner = () => {
    return (
        <section className="py-5 px-3 px-md-5 bg-dark text-white">
            <div className="col-sm-12 px-md-3"> 
                <p>Find trending topics before they take off</p>
                <p>Sign up to our weekly newsletter. Every Tuesday we send you our best topics directly to your inbox.</p>
                <Link href='#' className="btn btn-secondary">Sign Up</Link>
            </div>
        </section>
    )
}

export default Banner;