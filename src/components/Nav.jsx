const Nav = ({ pathName }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a
                className={`navbar-brand  ${
                    pathName === "home" ? "active" : ""
                }`}
                href="/"
            >
                <img
                    className="home-icon"
                    src="/public/images/home/home-icon.png"
                    alt="Home"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li
                        className={`nav-item  ${
                            pathName === "office" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/office">
                            Büro
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "smartphone" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/smartphone">
                            Smartphone
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "tv-and-audio" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/tv-and-audio">
                            TV & Audio
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "photo-and-video" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/photo-and-video">
                            Foto & Video
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "games" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/games">
                            Spiele
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "offers" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/offers">
                            Angebote
                        </a>
                    </li>
                    <li
                        className={`nav-item  ${
                            pathName === "contact" ? "active" : ""
                        }`}
                    >
                        <a className="nav-link" href="/contact">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
