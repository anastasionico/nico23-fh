import Link from "next/link";

const Hero = () => {
    return (
        <section className="d-flex align-items-center px-3" style={{
            backgroundImage: `url("/img/copywriting-hero.jpg")`,
            height: '60vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="text-white">
                <h1 className="mb-3">Freelancer Writer for Technical Content </h1>
                <h5 className="mb-3">Artisan of the web</h5>
                <Link href="/contact" className="btn btn-secondary mb-3">Contact</Link>
            </div>
        </section>
    )
}

export default Hero;