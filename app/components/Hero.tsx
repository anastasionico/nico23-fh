import Link from "next/link";

const Hero = () => {
    return (
        <section className="d-flex align-items-center px-3" style={{
            backgroundImage: `url("/img/copywriting-hero.jpg")`,
            height: '60vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className=" text-white">
                <h1 className="mb-3">Freelancer Technical & <br/>Web Content Writer</h1>
                <h3 className="mb-3">Artisan of the web</h3>
                <Link href="/contact" className="btn btn-secondary mb-3">Contact</Link>
            </div>
        </section>
    )
}

export default Hero;