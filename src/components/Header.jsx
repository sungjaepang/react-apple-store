import { Link } from "react-router-dom"

function Header({ cart }) {
    return (
        <header className="header">
            <Link to="/" className="logo">
                Apple Store
            </Link>

            <Link to="/cart" className="cart">
                Cart ({cart.length})
            </Link>
            
        </header>
    )
}

export default Header