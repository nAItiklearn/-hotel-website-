import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1 className="logo-text">Aurelius Riverside</h1>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#stay">STAY</a></li>
                    <li><a href="#dining">DINING</a></li>
                    <li><a href="#wellness">WELLNESS</a></li>
                    <li><a href="#book" className="nav-book">BOOK</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
