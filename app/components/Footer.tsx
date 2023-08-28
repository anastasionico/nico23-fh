const Footer = () => {
    return (
        <footer className="p-3 text-primary footer bg-secondary">
            <div className="row">
                <div className="col-sm-3 text-center">
                    <h5>anastasionico.uk</h5>
                </div>
                
                <div className="col-sm-3">
                    <h5>Explore</h5>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Newsletter</li>
                        <li>Blog</li>
                    </ul>
                </div>
                
                <div className="col-sm-3">
                    <h5>Projects</h5>
                    <ul>
                        <li>AttractionTickets.com</li>
                        <li>.End</li>
                        <li>Mogul</li>
                    </ul>
                </div>
                
                <div className="col-sm-3">
                    <h5>Contact</h5>
                    <ul>
                        <li>Contact page</li>
                        <li>Mail me</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer