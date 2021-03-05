function Navbar(props) {
    return (
        <div className="navbar">
            <h1>Home</h1>
            <div>
                <a href="/about">About</a>
                <a href="/user/login">Login</a>
                <a href="/user/register">Register</a>
            </div>
        </div>
    )
}

export default Navbar