import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen((prev) => !prev);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return(
        <>
            <header>
                <div className={`burger ${isOpen ? 'close' : ''}`} onClick={toggleNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="logo">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/images/header-logo-1.webp" />
                        <img src="/images/jovie-logo3.png" alt="" className='img-fluid' />
                    </picture>
                </div>
                <div className={`nav-bar ${isOpen ? 'active' : ''}`}>
                    <nav>
                        <Link to="" onClick={closeNav}>Find a Nanny / Sitter</Link>
                        <Link to="" onClick={closeNav}>Find a Job</Link>
                        <Link to="/apply" onClick={closeNav}>Apply Now</Link>
                    </nav>
                    <div className="dropdown-nav mt-4">
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Family Childcare
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Nannies</a></li>
                                <li><a className="dropdown-item" href="#">Babysitters</a></li>
                                <li><a className="dropdown-item" href="#">Special Needs Childcare</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Family Childcare
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Nannies</a></li>
                                <li><a className="dropdown-item" href="#">Babysitters</a></li>
                                <li><a className="dropdown-item" href="#">Special Needs Childcare</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Family Childcare
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Nannies</a></li>
                                <li><a className="dropdown-item" href="#">Babysitters</a></li>
                                <li><a className="dropdown-item" href="#">Special Needs Childcare</a></li>
                            </ul>
                        </div>
                        <Link to="" className='blog-text' onClick={closeNav}>Blog</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
