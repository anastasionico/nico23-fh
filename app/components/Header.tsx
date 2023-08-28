import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
    return (
        <header className="px-3 py-3 bg-primary text-white text-center header">
            <div className="col-sm-12 col-md-6 d-inline-block header-logo">
                <h3>anastasio<span className="logoNico">nico.uk</span></h3>
            </div>
            
            <div className="col-sm-12 col-md-6 d-inline-block header-menu">
                <nav className="text-white">
                    <Link href="/blog" className="mx-3">Blog</Link>
                    <Link href="/contact" className="mx-3">Contact</Link>
                    <Link href="/linkedin" className="mx-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="white"/></svg>
                    </Link>
                </nav>
            </div>
        </header>
    )
};
export default Header;