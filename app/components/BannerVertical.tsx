import Link from "next/link";


const BannerVertical = () => {
    return (
        <div className="p-3 text-white bg-dark card">
            <p>Find trending topics before they take off</p>
            <p>Sign up to our weekly newsletter. Every Tuesday we send you our best topics directly to your inbox.</p>
            <Link href='#' className="d-inline-block btn btn-secondary float-end">Sign Up</Link>
        </div>
    )
}

export default BannerVertical;