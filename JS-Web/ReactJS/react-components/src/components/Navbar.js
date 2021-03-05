function Navbar(props) {
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <div>
                <a href="/about">About</a>
                <a href="/user/login">Login</a>
                <a href="/user/register">Register</a>
            </div>
        </div>
    )
}

export default Navbar